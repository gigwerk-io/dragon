import { Injectable } from '@angular/core';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { MarketplaceJob } from '../interfaces/models/MarketplaceJob';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/responses/GenericResponse';

@Injectable({
  providedIn: 'root'
})
export class JobsService extends RESTService {

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  getAllJobs(): Promise<Response<MarketplaceJob[]>> {
    return this.makeHttpRequest('jobs', 'GET')
      .toPromise()
      .then((res) => {
        return res.toPromise().then((jobsRes) => jobsRes);
      });
  }

  getJob(id: number): Promise<Response<MarketplaceJob>> {
    return this.makeHttpRequest(`job/${id}`, `GET`)
      .toPromise()
      .then((res) => res.toPromise());
  }


  assignWorker(id: number, body: { worker_id: number }): Promise<any> {
    return this.makeHttpRequest(`job/${id}/assign`, 'PATCH', body)
      .toPromise()
      .then((res: Observable<any>) => res.toPromise());
  }

  updateJob(id: number,
    body: { description: string, complete_before: string, street_address: string, city: string, state: string, zip: string })
    : Promise<any> {
    return this.makeHttpRequest(`marketplace/job/${id}`, 'PATCH', body)
      .toPromise()
      .then((res: Observable<any>) => res.toPromise());
  }

  updateLocation(id: number, body: { street_address: string, city: string, state: string, zip: string }): Promise<any> {
    return this.makeHttpRequest(`location/${id}`, 'PUT', body)
      .toPromise()
      .then((res: Observable<any>) => res.toPromise());
  }

  deleteJob(id: number): Promise<any> {
    return this.makeHttpRequest(`job/${id}`, 'DELETE')
      .toPromise()
      .then((res: Observable<any>) => res.toPromise());
  }


}
