import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../utils/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {NotyfService} from 'ng-notyf';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest = {
    username: undefined,
    password: undefined
  };
  submitted = false;

  loginSubscription: Subscription;

  constructor(private router: Router,
              private auth: AuthenticationService,
              private notyfService: NotyfService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.submitted = form.valid;
    if (form.valid) {
      this.loginSubscription = this.auth.login(this.loginRequest).subscribe((res) => {
        this.router.navigateByUrl('/dashboard');
      }, error => {
        this.notyfService.error(error.error.message);
      });
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    this.loginSubscription ? this.loginSubscription.unsubscribe() : null;
  }
}
