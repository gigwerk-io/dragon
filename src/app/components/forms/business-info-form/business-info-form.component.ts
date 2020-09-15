import {Component, Input, OnInit} from '@angular/core';
import {Business} from '../../../utils/interfaces/models/Business';
import {SettingsService} from '../../../utils/services/settings.service';
import {NgForm} from '@angular/forms';
import {UpdateBusinessRequest} from '../../../utils/interfaces/requests/settings/UpdateBusinessRequest';
import { NotyfService } from 'ng-notyf';

@Component({
  selector: 'app-business-info-form',
  templateUrl: './business-info-form.component.html',
  styleUrls: ['./business-info-form.component.css']
})
export class BusinessInfoFormComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('business') business: Business|null;
  imageChanged = false;

  constructor(private settingsService: SettingsService, private notyfService: NotyfService) {
  }

  ngOnInit() {
    if (this.business !== null) {
      this.toDataURL(this.business.profile.image, (image) => {
        this.business.profile.image = image;
      });
    }
  }

  onFileChange(event) {
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        this.business.profile.image = reader.result;
        this.imageChanged = true;
      }
    };
  }

  toDataURL(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.send();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const updateBusinessRequest: UpdateBusinessRequest = {
        name: this.business.name,
        image: this.imageChanged ? this.business.profile.image: undefined,
        short_description: this.business.profile.short_description,
        long_description: this.business.profile.long_description
      };

      this.settingsService.updateBusiness(updateBusinessRequest).then(res => {
        console.log(res);
        this.notyfService.success(res.message);
      }).catch(err => {
        this.notyfService.error(err.error.message);
      });
    }
  }
}
