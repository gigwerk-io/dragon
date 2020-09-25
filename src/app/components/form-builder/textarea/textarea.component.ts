import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit, OnDestroy, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index = 1;

  // tslint:disable-next-line: no-input-rename
  @Input('settings') settings;

  // tslint:disable-next-line: no-input-rename
  @Input('mode') mode: string;

  submitFormSubscription: Subscription;
  transition = false;
  show = true;
  textAreaObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Text Area',
    name: `textarea-${Date.now()}`,
    index: this.index
  };

  ngOnChanges() {
    this.textAreaObject.index = this.index;
  }


  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {
    this.textAreaObject = this.formBuilderService.setOptions(this.settings, this.textAreaObject);
    this.textAreaObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
      .subscribe(() => this.formBuilderService.componentOptions.push(this.textAreaObject));
  }

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }

}
