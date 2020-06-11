import { Injectable } from '@angular/core';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { StorageKeys } from '../interfaces/enum/constants';
import { environment } from '../../../environments/environment';
import { MissingSteps } from '../interfaces/user/User';
import { Response } from '../interfaces/responses/GenericResponse';
import {Business} from '../interfaces/models/Business';
import {UpdateLocationRequest} from '../interfaces/requests/settings/UpdateLocationRequest';
import {UpdateBusinessRequest} from '../interfaces/requests/settings/UpdateBusinessRequest';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends RESTService {

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  getAccount(): Promise<Response<Business>> {
    return this.makeHttpRequest(`account`, `GET`)
      .toPromise()
      .then((res: Observable<Response<Business>>) => res.toPromise());
  }

  updateLocation(body: UpdateLocationRequest): Promise<Response<null>> {
    return this.makeHttpRequest(`location`, `PATCH`, body)
      .toPromise()
      .then((res: Observable<Response<null>>) => res.toPromise());
  }

  updateBusiness(body: UpdateBusinessRequest) {
    return this.makeHttpRequest(`account`, `PATCH`, body)
      .toPromise()
      .then((res: Observable<Response<null>>) => res.toPromise());
  }

  getQRCode(): Promise<string> {
    return this.makeHttpRequest(`qr-code`, 'GET')
      .toPromise()
      .then((res: Observable<any>) => res.toPromise().then(r => r.url));
  }

  getStripeLink(): Promise<Response<any>> {
    return this.makeHttpRequest(`stripe`, 'GET')
      .toPromise()
      .then((res: Observable<Response<any>>) => res.toPromise().then(r => r));
  }
  // getStripeLink(): Promise<string> {
  //   return this.makeHttpRequest(`stripe/login`, 'GET')
  //     .toPromise()
  //     .then((res: Observable<any>) => res.toPromise().then(r => r.url));
  // }
  checkMissingSteps(): Promise<Response<MissingSteps>> {
    return this.makeHttpRequest(`missing-steps`, 'GET')
      .toPromise()
      .then((res: Observable<Response<MissingSteps>>) => res.toPromise());
  }
}
