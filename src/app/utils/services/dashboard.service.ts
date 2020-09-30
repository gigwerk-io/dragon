import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {RESTService} from './rest.service';
import {Response} from '../interfaces/responses/GenericResponse';
import {Graph} from '../interfaces/models/Graph';
import {Observable} from 'rxjs';
import {CalendarEvent} from '../interfaces/models/CalendarEvent';
import {Metrics} from '../interfaces/models/Metrics';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends RESTService {

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  getMetrics(): Promise<Response<Metrics>> {
    return this.makeHttpRequest<Response<Metrics>>(`metrics`, `GET`)
      .then(res => res.toPromise());
  }

  getGraphs(): Promise<Response<Graph>> {
    return this.makeHttpRequest(`graphs`, `GET`)
      .then((res: Observable<Response<Graph>>) => res.toPromise());
  }

  getCalendar(): Promise<Response<CalendarEvent[]>> {
    return this.makeHttpRequest<Response<CalendarEvent[]>>(`calendar`, `GET`)
      .then(res => res.toPromise());
  }
}
