import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ElementOptions, Elements, ElementsOptions, StripeCardComponent, StripeService } from 'ngx-stripe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Element as StripeElement } from 'ngx-stripe/lib/interfaces/element';
import { FinanceService } from '../../../utils/services/finance.service';

@Component({
  selector: 'app-payment-method-modal',
  templateUrl: './payment-method-modal.component.html',
  styleUrls: ['./payment-method-modal.component.css'],
})
export class PaymentMethodModalComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('show') show: boolean;
  @Output() close = new EventEmitter();

  // @ts-ignore
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: ElementOptions = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };

  elementsOptions: ElementsOptions = {
    locale: 'auto'
  };

  stripeTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private financeService: FinanceService
  ) { }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  buy() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.getCard(), { name })
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          console.log(result.token.id);
          this.financeService.savePayment.next(result.token.id)
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

  closeModal() {
    this.close.emit();
  }
}
