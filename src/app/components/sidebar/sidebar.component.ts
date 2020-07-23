import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SettingsService} from '../../utils/services/settings.service';
import {MissingSteps} from '../../utils/interfaces/user/User';
import {AuthenticationService} from "../../utils/services/authentication.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, DoCheck {
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
  @Input() pageTitle = '';

  dashboardActive: string;
  peopleActive: string;
  jobsActive: string;
  applicantsActive: string;
  financesActive: string;
  settingsActive: string;

  constructor(
    private settingsService: SettingsService,
    private router: Router,
    private authService: AuthenticationService
  ) {  }

  ngOnInit() {
    // this.settingsService.checkMissingSteps().then((steps) => {
    //   this.missingSteps = steps.data;
    // tslint:disable-next-line:max-line-length
    //   this.isMissingSteps = (!this.missingSteps.has_location || !this.missingSteps.has_workers || !this.missingSteps.has_stripe || !this.missingSteps.has_customers);
    // });
  }

  ngDoCheck() {
    this.pageTitle = this.router.url.split('/')[1];
    this.pageTitle = this.pageTitle.charAt(0).toUpperCase() + this.pageTitle.slice(1);

    switch (this.pageTitle) {
      case 'Dashboard':
        this.dashboardActive = 'text-white bg-gray-900';
        this.peopleActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.jobsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.applicantsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.financesActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.settingsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        break;
      case 'People':
        this.peopleActive = 'text-white bg-gray-900';
        this.dashboardActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.jobsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.applicantsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.financesActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.settingsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        break;
      case 'Jobs':
        this.jobsActive = 'text-white bg-gray-900';
        this.dashboardActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.peopleActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.applicantsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.financesActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.settingsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        break;
      case 'Applicants':
        this.applicantsActive = 'text-white bg-gray-900';
        this.dashboardActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.peopleActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.jobsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.financesActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.settingsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        break;
      case 'Finances':
        this.financesActive = 'text-white bg-gray-900';
        this.dashboardActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.peopleActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.jobsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.applicantsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.settingsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        break;
      case 'Settings':
        this.settingsActive = 'text-white bg-gray-900';
        this.dashboardActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.peopleActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.jobsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.applicantsActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        this.financesActive = 'text-gray-300 hover:text-white hover:bg-gray-700';
        break;
    }
  }

  signOut() {
    this.authService.logout();
  }
}
