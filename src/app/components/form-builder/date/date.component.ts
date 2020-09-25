import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit, OnDestroy, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index = 1;

  // tslint:disable-next-line: no-input-rename
  @Input('settings') settings;

  // tslint:disable-next-line: no-input-rename
  @Input('mode') mode: string;

  submitFormSubscription: Subscription;

  transition = false;
  show = true;
  dateObject = {
    requireToggle: false,
    placeholder: 'mm/dd/yyyy',
    label: 'Date',
    name: `date-${Date.now()}`,
    index: this.index
  };


  ngOnChanges() {
    this.dateObject.index = this.index;
  }

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {
    this.dateObject = this.formBuilderService.setOptions(this.settings, this.dateObject);
    this.dateObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
      .subscribe(() => this.formBuilderService.componentOptions.push(this.dateObject));
  }


  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }
  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }

}
