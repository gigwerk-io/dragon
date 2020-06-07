import {Component, Input, OnInit} from '@angular/core';
import {Business} from '../../../utils/interfaces/models/Business';
import {SettingsService} from '../../../utils/services/settings.service';
import {NgForm} from '@angular/forms';
import {UpdateBusinessRequest} from '../../../utils/interfaces/requests/settings/UpdateBusinessRequest';

@Component({
  selector: 'app-business-info-form',
  templateUrl: './business-info-form.component.html',
  styleUrls: ['./business-info-form.component.css']
})
export class BusinessInfoFormComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('business') business: Business;

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.toDataURL(this.business.profile.image, (image) => {
      this.business.profile.image = image;
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        this.business.profile.image = reader.result;
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
        image: this.business.profile.image,
        short_description: this.business.profile.short_description,
        long_description: this.business.profile.long_description
      };

      this.settingsService.updateBusiness(updateBusinessRequest).then(res => {
        console.log(res);
        // TODO: Add a toast message here.
      }).catch(err => {
        // TODO: Add a toast message here.
      });
    }
  }
}