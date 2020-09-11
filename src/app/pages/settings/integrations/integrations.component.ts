import { Component, OnInit } from '@angular/core';
import {BusinessIntegration} from '../../../utils/interfaces/models/BusinessIntegration';
import {SettingsService} from '../../../utils/services/settings.service';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.css']
})
export class IntegrationsComponent implements OnInit {
  integration: BusinessIntegration = null;
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getIntegrations().then(res => {
      this.integration = res.data;
    });
  }
}
