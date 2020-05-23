import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { StatsResponse } from '../interfaces/dashboard/StatsResponse';
import { ChartData } from '../interfaces/dashboard/ChartData';
import { RESTService } from './rest.service';
import { Response } from '../interfaces/api/GenericResponse';
import {User} from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends RESTService {

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  getUserStats(): Promise<Response<StatsResponse>> {
    return this.makeHttpRequest(`user-stats`, `GET`)
      .toPromise()
      .then((res) => res.toPromise());
  }

  getTrafficStats(): Promise<Response<StatsResponse>> {
    return this.makeHttpRequest(`traffic-stats`, `GET`)
      .toPromise()
      .then((res) => res.toPromise());
  }

  getProfitStats(): Promise<Response<StatsResponse>> {
    return this.makeHttpRequest(`profit-stats`, `GET`)
      .toPromise()
      .then((res) => res.toPromise());
  }

  getSalesGraph(): Promise<Response<ChartData>> {
    return this.makeHttpRequest(`payouts-graph`, `GET`)
      .toPromise()
      .then((res) => res.toPromise());
  }

  getJobsGraph(): Promise<Response<ChartData>> {
    return this.makeHttpRequest(`jobs-graph`, `GET`)
      .toPromise()
      .then((res) => res.toPromise());
  }

  getLeaderboard(): Promise<Response<User[]>> {
    return this.makeHttpRequest(`leaderboard`, `GET`)
      .toPromise()
      .then((res) => res.toPromise());
  }

  getTimeWorked(): Promise<Response<{ minutes: number }>> {
    return this.makeHttpRequest(`time-worked`, `GET`)
      .toPromise()
      .then((res) => res.toPromise());
  }
}
