import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../interfaces/enum/constants';
import { HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Business } from '../interfaces/models/Business';

@Injectable({
  providedIn: 'root'
})
export class RESTService {

  public business: Business;

  constructor(public http: HttpClient, public storage: Storage) {

    this.storage.get(StorageKeys.SELECTED_BUSINESS)
      .then(res => this.business = res);
  }

  public async businessUuid(): Promise<string> {
    return await this.getBusiness().then(business => business.unique_id);
  }

  public async getBusiness(): Promise<Business> {
    return new Promise(resolve => resolve(this.business));
  }

  /**
   * Note: this is an Observable that returns an Observable upon subscription
   */
  public makeHttpRequest<T>(
    route: string,
    httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    httpParams?: any
  ): Promise<Observable<T> | undefined> {
    return this.storage.get(StorageKeys.ACCESS_TOKEN)
        .then(token => {
          const header = {
            headers: {
              Authorization: 'Bearer ' + token
            }
          };

          return this.businessUuid()
            .then(businessUuid => {
              route = `${environment.apiUrl}/business/${businessUuid}/${route}`;
              switch (httpMethod) {
                case 'GET':
                  if (httpParams) {
                    header['params'] = httpParams;
                  }
                  return this.http.get<T>(route, header);
                case 'POST':
                  return this.http.post<T>(route, httpParams, header);
                case 'PUT':
                  return this.http.put<T>(route, httpParams, header);
                case 'DELETE':
                  return this.http.delete<T>(route, header);
                case 'PATCH':
                  return this.http.patch<T>(route, httpParams, header);
                default:
                  return undefined;
              }
            });
        });
  }
}
