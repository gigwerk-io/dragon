import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../utils/services/settings.service';
import {Storage} from '@ionic/storage';
import {FormControl, FormGroup} from '@angular/forms';
import {StorageKeys} from '../../utils/interfaces/enum/constants';
import {Business} from '../../utils/interfaces/models/Business';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  business: Business;
  settingsForm: FormGroup;

  constructor(private storage: Storage,
              private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsService.getAccount().then(res => {
      this.business = res.data;
      console.log(this.business);
    });
  }


  goToStripe() {
    this.settingsService.getStripeLink().then(res => {
      window.open(res.data.url, '_blank');
    });
  }
}
