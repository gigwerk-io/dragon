import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit, OnDestroy, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index = 1;

  // tslint:disable-next-line: no-input-rename
  @Input('settings') settings;

  // tslint:disable-next-line: no-input-rename
  @Input('mode') mode: string;

  submitFormSubscription: Subscription;
  transition = false;
  show = true;
  dateTimeObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Date Time',
    name: `datetime-${Date.now()}`,
    index: this.index
  };


  ngOnChanges() {
    this.dateTimeObject.index = this.index;
  }

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {
    this.dateTimeObject = this.formBuilderService.setOptions(this.settings, this.dateTimeObject);
    this.dateTimeObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
      .subscribe(() => this.formBuilderService.componentOptions.push(this.dateTimeObject));
  }


  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }

}
