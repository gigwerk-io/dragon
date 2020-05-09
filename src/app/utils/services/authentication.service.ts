import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../interfaces/auth/LoginRequest';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { LoginResponse } from '../interfaces/auth/LoginResponse';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../interfaces/storage/constants';
import { ValidateTokenResponse } from '../interfaces/auth/ValidateTokenResponse';
import { GenericResponse, Response } from '../interfaces/api/GenericResponse';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authSubject = new BehaviorSubject(false);

  constructor(private http: HttpClient, private storage: Storage, private toast: ToastrService) { }

  login(body: LoginRequest): Observable<Response<LoginResponse>> {

    return this.http.post<Response<LoginResponse>>(`${environment.apiUrl}/login`, body).pipe(
      tap(async (res: Response<LoginResponse>) => {
        if (res.data.profile.user.is_organization_admin) {
          await this.storage.set(StorageKeys.ACCESS_TOKEN, res.data.token);
          await this.storage.set(StorageKeys.PROFILE, res.data.profile);
          await this.storage.set(StorageKeys.ORGANIZATION,
            { id: res.data.profile.user.organization_id, organization: res.data.profile.user.organization });
          this.authSubject.next(true);
        } else {
          this.toast.error('You do not have access to this area!', 'Access Denied!');
        }
      })
    );
  }

  logout(token): Observable<GenericResponse> {
    return this.http.get<GenericResponse>(`${environment.apiUrl}/logout`, token).pipe(
      // @ts-ignore
      tap(async (res: GenericResponse) => {
        await this.storage.remove(StorageKeys.ACCESS_TOKEN);
        await this.storage.remove(StorageKeys.PROFILE);
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
            Authorization: (token) ? token : ''
          }
        };
        return this.http.get<Response<ValidateTokenResponse>>(`${environment.apiUrl}/validate`, authHeader).toPromise().then((res) => res);
      })
    );
  }
}
