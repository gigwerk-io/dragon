import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../interfaces/enum/constants';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import {NotyfService} from 'ng-notyf';

@Injectable({
  providedIn: 'root'
})
export class CheckAuth implements CanActivate {
  constructor(private storage: Storage,
    private router: Router,
    private auth: AuthenticationService,
    private notyfService: NotyfService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.auth.isValidToken().toPromise()
      .then(token => {
        if (token.data.validToken) {
          switch (state.url) {
            case '/login':
              this.router.navigateByUrl('/dashboard');
              break;
          }
        } else {
          if (!(state.url === '/login')) {
            this.router.navigateByUrl('/login');
            this.notyfService.error('You have been logged out.');
          }
        }
        return true;
      })
      .catch(error => {
        switch (state.url) {
          case '/login':
            return true;
          default:
            this.notyfService.error('You have been logged out.');
            this.router.navigateByUrl('/login');
        }
      });
  }
}
