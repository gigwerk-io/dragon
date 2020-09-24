import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit, OnDestroy, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index = 1;

  submitFormSubscription: Subscription;
  transition = false;
  show = true;
  phoneObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Phone',
    name: `phone-${Date.now()}`,
    errorText: 'please Enter a valid phone number',
    index: this.index
  };

  ngOnChanges() {
    this.phoneObject.index = this.index;
  }

  constructor(
    private formBuilderService: FormBuilderService
  ) { }


  ngOnInit() {
    this.phoneObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
    .subscribe(() => this.formBuilderService.componentOptions.push(this.phoneObject));
  }

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }


  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }


}
