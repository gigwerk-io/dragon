import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../utils/services/dashboard.service';
import {Storage} from '@ionic/storage';
import {StatsResponse} from '../../utils/interfaces/dashboard/StatsResponse';
import {Response} from '../../utils/interfaces/api/GenericResponse';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../../utils/interfaces/user/User';

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
  salesChart;
  barChart;
  topWorkers: User[];

  constructor(private dashboardService: DashboardService, private storage: Storage, private ngxSpinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.ngxSpinner.show();
    this.getDashboardData();
  }

  async getDashboardData() {
    await this.getTrafficData();
    await this.getUserData();
    await this.getTimeWorkedStat();
    await this.getSalesGraphData();
    await this.getBarChartData();
    await this.getTopWorkers();
    setTimeout(() => {
      this.ngxSpinner.hide();
    }, 1000);
    return;
  }

  async getUserData() {
    return this.dashboardService.getUserStats().then(res => {
      this.userStats = res.data;
    });
  }

  async getTrafficData() {
    return this.dashboardService.getTrafficStats().then(res => {
      this.trafficStats = res.data;
    });
  }

  async getTimeWorkedStat() {
    return this.dashboardService.getTimeWorked()
      .then((res: Response<{ minutes: number }>) => this.totalHoursWorked = Math.floor(res.data.minutes / 60));

  }

  async getSalesGraphData() {
    return this.dashboardService.getSalesGraph().then(res => {
      this.salesChart = res.data;
    });
  }

  async getBarChartData() {
    return this.dashboardService.getJobsGraph().then(res => {
      this.barChart = res.data;
    });
  }

  async getTopWorkers() {
    this.dashboardService.getTopWorkers().then(res => {
      this.topWorkers = res.data;
    });
  }
}
