import { Component, OnInit, ViewChild } from '@angular/core';
import { SubscriptionService } from 'src/app/utils/services/subscription.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  currentPlan;
  plan;

  constructor(
    private subscriptionService: SubscriptionService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.subscriptionService.getSubscription().then(res => {
      this.plan = res.data;
      this.currentPlan = this.plan.name;
    });
  }

  changePlan() {
    console.log('submitting', this.plan.name);
    this.spinner.show();
    this.subscriptionService.changeSubscription(this.plan.name).then(res => {
      console.log('res', res);
      this.currentPlan = this.plan.name;
      this.spinner.hide();
    });
  }

}
