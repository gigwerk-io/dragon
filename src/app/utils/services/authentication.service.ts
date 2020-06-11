import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../interfaces/enum/constants';
import { ValidateTokenResponse } from '../interfaces/responses/ValidateTokenResponse';
import { GenericResponse, Response } from '../interfaces/responses/GenericResponse';
import { ToastrService } from 'ngx-toastr';
import {LoginResponse} from '../interfaces/responses/LoginResponse';
import {LoginRequest} from '../interfaces/requests/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authSubject = new BehaviorSubject(false);

  constructor(private http: HttpClient, private storage: Storage, private toast: ToastrService) { }

  login(body: LoginRequest): Observable<Response<LoginResponse>> {
    return this.http.post<Response<LoginResponse>>(`${environment.apiUrl}/login`, body).pipe(
      tap(async (res: Response<LoginResponse>) => {
        await this.storage.set(StorageKeys.ACCESS_TOKEN, res.data.token);
        await this.storage.set(StorageKeys.USER, res.data.user);
        // get owned businesses
        const businesses = res.data.user.businesses.filter((business) => {
          return business.owner_id === res.data.user.id;
        });
        delete res.data.user.businesses;

        await this.storage.set(StorageKeys.USER, res.data.user);
        await this.storage.set(StorageKeys.SELECTED_BUSINESS, businesses[0]);
        await this.storage.set(StorageKeys.BUSINESSES, businesses);
      })
    );
  }

  logout(token): Observable<GenericResponse> {
    console.log(token);
    return this.http.post<GenericResponse>(`${environment.apiUrl}/logout`, null, token).pipe(
      // @ts-ignore
      tap(async (res: GenericResponse) => {
        await this.storage.remove(StorageKeys.ACCESS_TOKEN);
        await this.storage.remove(StorageKeys.USER);
        this.authSubject.next(true);
      })
    );
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }

  isValidToken() {
    return from(
      this.storage.get(StorageKeys.ACCESS_TOKEN).then(token => {
        const authHeader = {
          headers: {
            Authorization: (token) ? 'Bearer ' + token : ''
          }
        };
        return this.http.get<Response<ValidateTokenResponse>>(`${environment.apiUrl}/validate`, authHeader).toPromise().then((res) => res);
      })
    );
  }
}
