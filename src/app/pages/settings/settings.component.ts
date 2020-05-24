import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../utils/services/settings.service';
import {Storage} from '@ionic/storage';
import {FormControl, FormGroup} from '@angular/forms';
import {StorageKeys} from '../../utils/interfaces/enum/constants';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsForm: FormGroup;
  constructor(private storage: Storage,
              private settingsService: SettingsService) { }

  ngOnInit() {

  }

  submitLocation() {
    const bodyLoc = {
      street_address: this.settingsForm.value.street_address,
      city: this.settingsForm.value.city,
      state: this.settingsForm.value.state,
      zip: this.settingsForm.value.zip
    };
  }
}
