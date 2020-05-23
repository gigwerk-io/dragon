import { Injectable } from '@angular/core';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { StorageKeys } from '../interfaces/enum/constants';
import { environment } from '../../../environments/environment';
import { MissingSteps } from '../interfaces/user/User';
import { Response } from '../interfaces/responses/GenericResponse';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends RESTService {

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  updateOrganization(body: { name: string; total_goal: number; individual_goal: number; email: number; logo?: string; }): Promise<any> {
    return this.makeHttpRequest(`account`, 'PUT', body)
      .toPromise()
      .then((res: Observable<any>) => res.toPromise());
  }

  // updateLocation(id: number, body: { street_address: string; city: string; state: string; zip: number; }): Promise<any> {
  //   return this.storage.get(StorageKeys.ACCESS_TOKEN)
  //     .then(token => {
  //       const orgId = super.organizationId();
  //       const header = {
  //         headers: {
  //           Authorization: token
  //         }
  //       };
  //
  //       return this.http.post(`${environment.apiUrl}/admin/location/${orgId}`, body, header)
  //         .toPromise();
  //     });
  // }

  getQRCode(): Promise<string> {
    return this.makeHttpRequest(`qr-code`, 'GET')
      .toPromise()
      .then((res: Observable<any>) => res.toPromise().then(r => r.url));
  }

  getStripeLink(): Promise<Response<string>> {
    return this.makeHttpRequest(`stripe/login`, 'GET')
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
