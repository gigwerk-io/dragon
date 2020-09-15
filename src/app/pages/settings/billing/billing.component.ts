import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {SubscriptionService} from '../../../utils/services/subscription.service';
import {FinanceService} from '../../../utils/services/finance.service';
import {Subscription as StripeSubscription} from '../../../utils/interfaces/models/Subscription';
import {PaymentMethod} from '../../../utils/interfaces/models/PaymentMethod';
import {Invoice} from '../../../utils/interfaces/models/invoice';
import { NotyfService } from 'ng-notyf';
import { error } from 'util';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  showPaymentModal = false;
  subscription: StripeSubscription;
  paymentMethods: PaymentMethod[];
  invoice: Invoice[];
  savePaymentSubscription: Subscription;


  constructor(
    private subscriptionService: SubscriptionService,
    private financeService: FinanceService,
    private notyfService: NotyfService
  ) {
  }

  ngOnInit() {
    this.subscriptionService.getSubscription().then(res => {
      this.subscription = res.data;
    });

    this.savePaymentSubscription = this.financeService.savePayment.subscribe(res => {
      console.log('Payment Subscription', res);
      this.financeService.savePaymentMethod(res).then(response => {
        console.log('back from saving card with', response);
        this.notyfService.success();
      }).catch(err => {
        console.log('error saving card method', err);
      });
    });

    this.financeService.getAllPaymentMethods().then(res => {
      this.paymentMethods = res.data;
    });

    this.financeService.getInvoice().then(res => {
      this.invoice = res.data;
    });
  }

  deletePaymentMethod(id: string) {
    this.financeService.deletePaymentMethod(id)
      .then(res => {
        this.paymentMethods = this.paymentMethods.filter((paymentMethod) => {
          return paymentMethod.id !== id;
        })
        
        this.notyfService.success(res.message);
      }).catch(err => {
        this.notyfService.error(err.error.message);
    });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    this.savePaymentSubscription ? this.savePaymentSubscription.unsubscribe() : null;
  }

}
