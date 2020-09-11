import { Injectable } from '@angular/core';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { StorageKeys } from '../interfaces/enum/constants';
import { environment } from '../../../environments/environment';
import { MissingSteps } from '../interfaces/user/User';
import {Response, UrlResponse} from '../interfaces/responses/GenericResponse';
import {Business} from '../interfaces/models/Business';
import {UpdateLocationRequest} from '../interfaces/requests/settings/UpdateLocationRequest';
import {UpdateBusinessRequest} from '../interfaces/requests/settings/UpdateBusinessRequest';
import {BusinessIntegration} from '../interfaces/models/BusinessIntegration';
import {UpdateIntegrationsRequest} from '../interfaces/requests/settings/UpdateIntegrationsRequest';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends RESTService {

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  getAccount(): Promise<Response<Business>> {
    return this.makeHttpRequest(`account`, `GET`)
      .then((res: Observable<Response<Business>>) => res.toPromise());
  }

  updateLocation(body: UpdateLocationRequest): Promise<Response<null>> {
    return this.makeHttpRequest(`location`, `PATCH`, body)
      .then((res: Observable<Response<null>>) => res.toPromise());
  }

  updateBusiness(body: UpdateBusinessRequest) {
    return this.makeHttpRequest(`account`, `PATCH`, body)
      .then((res: Observable<Response<null>>) => res.toPromise());
  }

  generateOAuthUrl() {
    return this.makeHttpRequest(`google/oauth`, `POST`)
      .then((res: Observable<Response<UrlResponse>>) => res.toPromise());
  }

  getIntegrations() {
    return this.makeHttpRequest(`integrations`, `GET`)
      .then((res: Observable<Response<BusinessIntegration>>) => res.toPromise());
  }

  updateIntegrations(body: UpdateIntegrationsRequest) {
    return this.makeHttpRequest(`integrations`, `PATCH`, body)
      .then((res: Observable<Response<null>>) => res.toPromise());
  }
}
