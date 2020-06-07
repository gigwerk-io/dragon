import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { StatsResponse } from '../interfaces/responses/StatsResponse';
import { ChartResponse} from '../interfaces/responses/ChartResponse';
import { RESTService } from './rest.service';
import { Response } from '../interfaces/responses/GenericResponse';
import {User} from '../interfaces/models/User';
import {Stats} from '../interfaces/models/Stats';
import {Graph} from '../interfaces/models/Graph';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends RESTService {

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  getStats(): Promise<Response<Stats>> {
    return this.makeHttpRequest(`stats`, `GET`)
      .toPromise()
      .then((res:  Observable<Response<Stats>>) => res.toPromise());
  }

  getGraphs(): Promise<Response<Graph>> {
    return this.makeHttpRequest(`graphs`, `GET`)
      .toPromise()
      .then((res:  Observable<Response<Graph>>) => res.toPromise());
  }


  getLeaderboard(): Promise<Response<User[]>> {
    return this.makeHttpRequest(`leaderboard`, `GET`)
      .toPromise()
      .then((res) => res.toPromise());
  }
}
