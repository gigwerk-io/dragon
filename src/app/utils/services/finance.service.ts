import { Injectable } from '@angular/core';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Storage } from '@ionic/storage';
import { Payment } from '../interfaces/models/Payment';
import { Response } from '../interfaces/responses/GenericResponse';
import {Observable, Subject} from 'rxjs';
import { Invoice } from '../interfaces/models/invoice';
import {PaymentMethod} from '../interfaces/models/PaymentMethod';



@Injectable({
  providedIn: 'root'
})
export class FinanceService extends RESTService {

  admin;
  savePayment = new Subject<string>();

  constructor(
    public http: HttpClient,
    private toast: ToastrService,
    public storage: Storage,
  ) {
    super(http, storage);

  }

  getInvoice(): Promise<Response<Invoice[]>> {
    return this.makeHttpRequest<Response<Invoice[]>>(`invoices`, 'GET')
      .then((res) => res.toPromise());
  }

  savePaymentMethod(stripe_token: string) {
    return this.makeHttpRequest(`payment-methods`, 'POST', { payment_method_id: stripe_token })
      .then((res) => res.toPromise());
  }

  deletePaymentMethod(id: string) {
    return this.makeHttpRequest(`payment-method/${id}`, `DELETE`)
      .then((res: Observable<Response<null>>) => res.toPromise());
  }

  getAllPayments(): Promise<Response<Payment[]>> {
    return this.makeHttpRequest<Response<Payment[]>>(`payments`, 'GET')
      .then((res) => res.toPromise());
  }

  getAllPaymentMethods(): Promise<Response<PaymentMethod[]>> {
    return this.makeHttpRequest<Response<PaymentMethod[]>>(`payment-methods`, 'GET')
      .then((res) => res.toPromise());
  }


  refundCutomer(stripe_token: string) {
    return this.makeHttpRequest(`admin/refund/${stripe_token}`, 'PATCH')
      .then((res) => console.log('refunded?', res));
  }
}
