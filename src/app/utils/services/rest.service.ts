import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {Organization} from '../interfaces/favr/Organization';
import {StorageKeys} from '../interfaces/storage/constants';
import {HttpParams} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RESTService {

  public organization: Organization;

  constructor(public http: HttpClient, public storage: Storage) {
    this.storage.get(StorageKeys.ORGANIZATION)
      .then(res => this.organization = res);
  }

  public async organizationId(): Promise<number> {
    return await this.getOrganization().then(org => org.id);
  }

  public async getOrganization(): Promise<Organization> {
    return new Promise(resolve => resolve(this.organization));
  }

  /**
   *
   * Note: this is an Observable that returns an Observable upon subscription
   *
   * @param route
   * @param httpMethod
   * @param httpParams
   * @param callback a callback function to do some intermittent logic while fetching data
   */
  public makeHttpRequest(route: string, httpMethod: string, httpParams?: HttpParams | any, callback?: () => any): Observable<any> | undefined {
    return from(
      this.storage.get(StorageKeys.ACCESS_TOKEN)
        .then(token => {
          const header = {
            headers: {
              Authorization: token
            }
          };

          return this.organizationId()
            .then(orgId => {
              callback;
              route = `${environment.apiUrl}/organization/${orgId}/${route}`;
              switch (httpMethod) {
                case 'GET':
                  return this.http.get(route, header);
                case 'POST':
                  return this.http.post(route, httpParams, header);
                case 'PUT':
                  return this.http.put(route, httpParams, header);
                case 'DELETE':
                  return this.http.delete(route, header);
                case 'PATCH':
                  return this.http.patch(route, httpParams, header);
                default:
                  return undefined;
              }
            });
        })
    );
  }
}
