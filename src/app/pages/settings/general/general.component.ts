import { Component, OnInit } from '@angular/core';
import {Business} from '../../../utils/interfaces/models/Business';
import {FormGroup} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {SettingsService} from '../../../utils/services/settings.service';
import {BusinessLocation} from '../../../utils/interfaces/models/BusinessLocation';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  business: Business = null;
  location: BusinessLocation = null;
  constructor(
    private storage: Storage,
    private settingsService: SettingsService
  ) {
  }

  ngOnInit() {
    this.settingsService.getAccount().then(res => {
      this.business = res.data;
      this.location = this.business.location;
    });
  }

}
