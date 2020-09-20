import { Injectable } from '@angular/core';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { MarketplaceJob } from '../interfaces/models/MarketplaceJob';
import { Observable, Subject } from 'rxjs';
import { Response } from '../interfaces/responses/GenericResponse';
import { CreateJobRequest } from '../interfaces/requests/CreateJobRequest';

@Injectable({
  providedIn: 'root'
})
export class JobsService extends RESTService {

  clearJobSliderover = new Subject<any>();

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  getAllJobs(status: number = null): Promise<Response<MarketplaceJob[]>> {
    let params = null;
    if (status != null) {
     params = {status};
    }

      return this.makeHttpRequest(`jobs`, `GET`, params)
        .then((res:  Observable<Response<MarketplaceJob[]>>) => res.toPromise());
  }


  getJob(id: number): Promise<Response<MarketplaceJob>> {
    return this.makeHttpRequest<Response<MarketplaceJob>>(`job/${id}`, `GET`)
      .then((res) => res.toPromise());
  }

  createJob(body: CreateJobRequest): Promise<Response<MarketplaceJob>> {
    return this.makeHttpRequest<Response<MarketplaceJob>>(`marketplace/job`, `POST`, body)
      .then((res) => res.toPromise());
  }


  assignWorker(id: number, body: { worker_id: number }): Promise<any> {
    return this.makeHttpRequest<any>(`job/${id}/assign`, 'PATCH', body)
      .then((res: Observable<any>) => res.toPromise());
  }

  proposeWorker(jobID: number, body: { worker_id: number }) {
    return this.makeHttpRequest<any>(`job/${jobID}/assign`, 'PATCH', body)
      .then((res: Observable<any>) => res.toPromise());
  }

  updateJob(id: number,
    body:
    {
      description: string,
      complete_before: string,
      street_address: string,
      city: string,
      state: string,
      zip: number,
      intensity_id: number,
      price: number,
      category_id: number;
    })
    : Promise<any> {
    return this.makeHttpRequest(`marketplace/job/${id}`, 'PATCH', body)
      .then((res: Observable<any>) => res.toPromise());
  }

  updateLocation(id: number, body: { street_address: string, city: string, state: string, zip: string }): Promise<any> {
    return this.makeHttpRequest(`location/${id}`, 'PUT', body)
      .then((res: Observable<any>) => res.toPromise());
  }

  deleteJob(id: number): Promise<any> {
    return this.makeHttpRequest(`job/${id}`, 'DELETE')
      .then((res: Observable<any>) => res.toPromise());
  }
}
