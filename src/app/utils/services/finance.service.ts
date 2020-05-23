import { Injectable } from '@angular/core';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Storage } from '@ionic/storage';
import { Payment } from '../interfaces/models/Payment';
import { Response } from '../interfaces/responses/GenericResponse';


@Injectable({
  providedIn: 'root'
})
export class FinanceService extends RESTService {

  admin;

  constructor(
    public http: HttpClient,
    private toast: ToastrService,
    public storage: Storage,
  ) {
    super(http, storage);

  }

  getAllPayments(): Promise<Response<Payment[]>> {
    return this.makeHttpRequest(`payments`, 'GET')
      .toPromise()
      .then((res) => res.toPromise());
  }


  refundCutomer(stripe_token: string) {
    return this.makeHttpRequest(`admin/refund/${stripe_token}`, 'PATCH')
      .toPromise()
      .then((res) => console.log('refunded?', res));
  }



}
