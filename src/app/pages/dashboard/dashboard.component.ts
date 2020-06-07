import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../utils/services/dashboard.service';
import {Storage} from '@ionic/storage';
import {StatsResponse} from '../../utils/interfaces/responses/StatsResponse';
import {Response} from '../../utils/interfaces/responses/GenericResponse';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../../utils/interfaces/models/User';
import {Stats} from '../../utils/interfaces/models/Stats';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  userStats: StatsResponse;
  profitStats: StatsResponse;
  trafficStats: StatsResponse;
  date = new Date().getFullYear();
  totalHoursWorked: number;
  paymentsChart;
  jobsChart;
  stats: Stats;
  topWorkers: User[];

  constructor(private dashboardService: DashboardService, private storage: Storage, private ngxSpinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.getGraphs();
    this.getStats();
    this.getLeaderboard();
  }

  getStats() {
    this.dashboardService.getStats().then(res => {
      this.stats = res.data;
      console.log(this.stats);
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
