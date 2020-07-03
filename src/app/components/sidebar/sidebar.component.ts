import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from '../../utils/services/settings.service';
import {MissingSteps} from '../../utils/interfaces/user/User';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showSidebar = false;
  public isMissingSteps = false;
  public stepsKey = {
    workers: 'people',
    customers: 'people',
    stripe: 'settings',
    location: 'settings'
  };
  missingSteps: MissingSteps;
  showModal = false;

  constructor(public router: Router, private settingsService: SettingsService) {
  }

  ngOnInit() {
    // this.settingsService.checkMissingSteps().then((steps) => {
    //   this.missingSteps = steps.data;
    //   // tslint:disable-next-line:max-line-length
    //   this.isMissingSteps = (!this.missingSteps.has_location || !this.missingSteps.has_workers || !this.missingSteps.has_stripe || !this.missingSteps.has_customers);
    // });
  }
}
