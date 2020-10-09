import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotyfService } from 'ng-notyf';
import { AuthenticationService } from 'src/app/utils/services/authentication.service';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.css']
})
export class ForgotPasswordModalComponent implements OnInit, OnChanges {

  email = '';
  isFormValid = true;


  transition = false;
  showModalMaster: boolean;
  showResentMessage = false;

  // tslint:disable-next-line: no-input-rename
  @Input('showModal') showModal;

  constructor(
    public authService: AuthenticationService,
  ) { }

  ngOnChanges() {
    if (this.showModal === true) {
      this.showModalMaster = true;
      setTimeout(() => this.transition = true, 200);
    } else {
      this.transition = false;
      setTimeout(() => this.showModalMaster = false, 200);
    }
  }

  ngOnInit() {
    this.showModalMaster = this.showModal;
  }

  onSendLink(form: NgForm) {
    if (form.valid && form.touched && this.email.length) {
      this.isFormValid = true;
      this.showResentMessage = true;
    } else {
      this.showResentMessage = false;
      this.isFormValid = false;
    }
  }

}
