import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { StatsResponse } from '../interfaces/responses/StatsResponse';
import { ChartResponse} from '../interfaces/responses/ChartResponse';
import { RESTService } from './rest.service';
import { Response } from '../interfaces/responses/GenericResponse';
import {User} from '../interfaces/models/User';

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

  getSalesGraph(): Promise<Response<ChartResponse>> {
    return this.makeHttpRequest(`payouts-graph`, `GET`)
      .toPromise()
      .then((res) => res.toPromise());
  }

  getJobsGraph(): Promise<Response<ChartResponse>> {
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
