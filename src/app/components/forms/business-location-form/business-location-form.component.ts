import {Component, Input, OnInit} from '@angular/core';
import {BusinessLocation} from '../../../utils/interfaces/models/BusinessLocation';
import {NgForm} from '@angular/forms';
import {SettingsService} from '../../../utils/services/settings.service';
import {states} from '../../../utils/interfaces/enum/States';
import {UpdateLocationRequest} from '../../../utils/interfaces/requests/settings/UpdateLocationRequest';
import {error} from 'util';
import { NotyfService } from 'ng-notyf';

@Component({
  selector: 'app-business-location-form',
  templateUrl: './business-location-form.component.html',
  styleUrls: ['./business-location-form.component.css']
})
export class BusinessLocationFormComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('location') location: BusinessLocation;
  states = states;
  constructor(private settingsService: SettingsService, private notyfService: NotyfService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const locationRequest: UpdateLocationRequest = {
        street_address: this.location.street_address,
        city: this.location.city,
        state: this.location.state,
        zip: this.location.zip
      };

      this.settingsService.updateLocation(locationRequest).then(res => {
        this.notyfService.success(res.message);
      }).catch(err => {
        this.notyfService.error(err.error.message);
      });
    }
  }
}
