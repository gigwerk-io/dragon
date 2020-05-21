import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../utils/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';


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

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private toast: ToastrService
  ) { }

  ngOnInit() {

  }





  onLogin(form: NgForm) {
    this.submitted = form.valid;
    if (form.valid) {
      this.loginSubscription = this.auth.login(this.loginRequest).subscribe((res) => {
        this.router.navigateByUrl('/dashboard');
      }, error => {
        this.toast.error(error.error.message);
      });
    }
  }



  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    this.loginSubscription ? this.loginSubscription.unsubscribe() : null;
  }
}