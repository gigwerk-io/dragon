import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {DashboardService} from '../../utils/services/dashboard.service';
import {Storage} from '@ionic/storage';
import {StatsResponse} from '../../utils/interfaces/responses/StatsResponse';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../../utils/interfaces/models/User';
import {Stats} from '../../utils/interfaces/models/Stats';
import {GuidedTour, GuidedTourService, Orientation, TourStep} from 'ngx-guided-tour';
import {StorageKeys} from "../../utils/interfaces/enum/constants";
import {CalendarEvent} from '../../utils/interfaces/models/CalendarEvent';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterContentInit {
  userStats: StatsResponse;
  profitStats: StatsResponse;
  trafficStats: StatsResponse;
  date = new Date().getFullYear();
  totalHoursWorked: number;
  paymentsChart;
  jobsChart;
  stats: Stats;
  events: CalendarEvent[];
  topWorkers: User[];

  constructor(
    private dashboardService: DashboardService,
    private storage: Storage,
    private ngxSpinner: NgxSpinnerService,
    private guidedTourService: GuidedTourService
  ) {
  }

  ngOnInit() {
    this.getGraphs();
    this.getStats();
    this.getLeaderboard();
    this.getEvents();
  }

  ngAfterContentInit() {
    const tourSteps: TourStep[] = [
      {
        content: `
           <div class="dash-tour-step1">
            <h3 class="text-4xl font-bold text-center text-gray-900">
              Welcome!
            </h3>
            <div class="flex justify-center mb-2">
              <img class="w-40" src="assets/img/welcome.svg" alt="Welcome" />
            </div>
            <div class="mt-2 ml-auto mr-auto max-w-xl text-center text-base leading-5 font-weight-700 text-gray-500">
              <p>
                This is the dashboard you will use to manage your business.
                We will walk you through how to use it.
              </p>
            </div>
           </div>`
      }, {
        selector: '#stats_at_a_glance',
        orientation: Orientation.TopLeft,
        action: () => document.getElementById('app_container').scrollTo(0, 0),
        content: `
        <div class="dash-tour-step2">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <div class="h-6 w-6">
              <div class="icon-inner">
                <img class="text-green-600" src="assets/img/icons/bar-chart-outline.svg" alt="Bar chart" />
              </div>
            </div>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-bold text-gray-900" id="modal-headline">
              Stats at a glance
            </h3>
          </div>
          <div class="mt-2 ml-auto mr-auto max-w-xl text-center text-base leading-5 font-weight-700 text-gray-500">
            <p>
              This panel allows you to view your business' important stats quickly.
            </p>
          </div>
        </div>
        `
      }, {
        selector: '#leaderboard',
        orientation: Orientation.TopRight,
        scrollAdjustment: 100,
        action: () => {
          const leaderboard = document.getElementById('leaderboard');
          document.getElementById('app_container').scrollTo({top: leaderboard.scrollHeight});
        },
        content: `
          <div class="dash-tour-step3">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
            <div class="h-6 w-6">
              <div class="icon-inner">
                <img src="assets/img/icons/trophy-outline.svg" alt="Trophy" />
              </div>
            </div>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-bold text-gray-900" id="modal-headline">
              Leaderboard
            </h3>
          </div>
          <div class="mt-2 ml-auto mr-auto max-w-xl text-center text-base leading-5 font-weight-700 text-gray-500">
            <p>
              Keep track of your best performing freelancers.
            </p>
          </div>
        </div>
        `
      }
    ];
    const guidedTour: GuidedTour = {
      tourId: 'dashboard',
      steps: [...tourSteps],
      skipCallback: () => this.storage.set(StorageKeys.SHOW_DASHBOARD_TOUR, false),
      completeCallback: () => this.storage.set(StorageKeys.SHOW_DASHBOARD_TOUR, false)
    };
    this.storage.get(StorageKeys.SHOW_DASHBOARD_TOUR)
      .then(show => {
        if (show || show == null) {
          this.guidedTourService.startTour(guidedTour);
        }
      });
  }

  getStats() {
    this.dashboardService.getStats().then(res => {
      this.stats = res.data;
      console.log(this.stats);
    });
  }

  getEvents() {
    this.dashboardService.getCalendar().then(res => {
      this.events = res.data;
    });
  }

  getGraphs() {
    this.dashboardService.getGraphs().then(res => {
      this.paymentsChart = res.data.payments;
      this.jobsChart = res.data.jobs;
    });
  }

  getLeaderboard() {
    this.dashboardService.getLeaderboard().then(res => {
      this.topWorkers = res.data;
    });
  }
}
