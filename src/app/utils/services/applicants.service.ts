import { Injectable } from '@angular/core';
import {RESTService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {Response} from '../interfaces/responses/GenericResponse';
import {User} from '../interfaces/models/User';
import {Observable} from 'rxjs';
import {Application} from '../interfaces/models/Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService extends RESTService {

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  getApplicants(status: number = null): Promise<Response<Application[]>> {
    let params = null;
    if (status != null) {
     params = {status};
    }

    return this.makeHttpRequest(`applicants`, `GET`, params)
      .then((res:  Observable<Response<Application[]>>) => res.toPromise());
  }

  getApplicant(id): Promise<Response<Application>> {
    return this.makeHttpRequest(`applicant/${id}`, `GET`)
      .then((res:  Observable<Response<Application>>) => res.toPromise());
  }
}
