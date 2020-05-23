import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../utils/services/settings.service';
import {Storage} from '@ionic/storage';
import {Organization} from '../../utils/interfaces/favr/Organization';
import {FormControl, FormGroup} from '@angular/forms';
import {StorageKeys} from '../../utils/interfaces/storage/constants';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  organization: Organization;
  settingsForm: FormGroup;
  constructor(private storage: Storage,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.storage.get(StorageKeys.ORGANIZATION)
      .then((org: Organization) => {
        this.organization = org;
        this.settingsForm = new FormGroup({
          street_address: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl(''),
          zip: new FormControl('')
        });
      });
  }

  submitLocation() {
    const bodyLoc = {
      street_address: this.settingsForm.value.street_address,
      city: this.settingsForm.value.city,
      state: this.settingsForm.value.state,
      zip: this.settingsForm.value.zip
    };

    this.settingsService.updateLocation(this.organization.id, bodyLoc).then()
  }
}
