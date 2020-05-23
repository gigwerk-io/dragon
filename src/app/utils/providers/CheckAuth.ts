import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../interfaces/enum/constants';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CheckAuth implements CanActivate {
  constructor(private storage: Storage,
    private router: Router,
    private auth: AuthenticationService,
    private toast: ToastrService) { }

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
            // this.router.navigateByUrl('/login');
            this.toast.error('Please login to access this page!', 'Session error!');
          }
        }
        return true;
      })
      .catch(error => {
        this.router.navigateByUrl('/login');
        // this.toast.error(error.error, 'Error with session token!');
        return false;
      });
  }
}
