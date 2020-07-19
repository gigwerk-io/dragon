import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../utils/services/subscription.service';
import { FinanceService } from '../../utils/services/finance.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  showPaymentModal = false;
  subscription;
  paymentMethods;
  invoice;
  savePaymentSubscription: Subscription;


  constructor(
    private subscriptionService: SubscriptionService,
    private financeService: FinanceService
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
      }).catch(err => {
        console.log('error saving card method', err);
      });
    });

    this.financeService.getAllPaymentMethods().then(res => {
      this.paymentMethods = res.data;
    });

    this.financeService.getInvoice().then(res => this.invoice = res.data);
  }


  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    this.savePaymentSubscription ? this.savePaymentSubscription.unsubscribe() : null;
  }
}
