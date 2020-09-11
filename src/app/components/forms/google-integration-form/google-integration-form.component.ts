import {Component, Input, OnInit} from '@angular/core';
import {SettingsService} from '../../../utils/services/settings.service';
import {BusinessIntegration} from '../../../utils/interfaces/models/BusinessIntegration';

@Component({
  selector: 'app-google-integration-form',
  templateUrl: './google-integration-form.component.html',
  styleUrls: ['./google-integration-form.component.css']
})
export class GoogleIntegrationFormComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('integration') integration: BusinessIntegration|null;
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
  }

  connectGoogle() {
    this.settingsService.generateOAuthUrl().then(res => {
      window.open(res.data.url);
    }).catch(err => {
      // flash error
      console.log(err);
    });
  }

}
