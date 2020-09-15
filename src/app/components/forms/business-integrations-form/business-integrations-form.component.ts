import {Component, Input, OnInit} from '@angular/core';
import {SettingsService} from '../../../utils/services/settings.service';
import {NgForm} from '@angular/forms';
import {BusinessIntegration} from '../../../utils/interfaces/models/BusinessIntegration';
import {UpdateIntegrationsRequest} from '../../../utils/interfaces/requests/settings/UpdateIntegrationsRequest';
import { NotyfService } from 'ng-notyf';

@Component({
  selector: 'app-business-integrations-form',
  templateUrl: './business-integrations-form.component.html',
  styleUrls: ['./business-integrations-form.component.css']
})
export class BusinessIntegrationsFormComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('integrations') integrations: BusinessIntegration|null;
  constructor(private settingsService: SettingsService, private notyfService: NotyfService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const updateIntegrationsRequest: UpdateIntegrationsRequest = {
        facebook_pixel_id: this.integrations.facebook_pixel_id,
        google_analytics_id: this.integrations.google_analytics_id
      };

      this.settingsService.updateIntegrations(updateIntegrationsRequest)
        .then(res => {
          this.notyfService.success(res.message);
        }).catch(err => {
          this.notyfService.error(err.error.message)
      });
    }
  }
}
