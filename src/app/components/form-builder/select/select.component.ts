import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, OnDestroy, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;

  submitFormSubscription: Subscription;

  transition = false;
  show = true;
  selectObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Text',
    name: `text-${Date.now()}`,
    selectArr: [
      {text: 'Option 1', value: 'Option 1'},
      {text: 'Option 2', value: 'Option 2'},
      {text: 'Option 3', value: 'Option 3'}
    ],
    index: this.index
  };

  selectValue = '';
  newSelectText = '';
  newSelectValue = '';


  ngOnChanges() {
    this.selectObject.index = this.index;
  }
  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {
    this.selectObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
    .subscribe(() => this.formBuilderService.componentOptions.push(this.selectObject));
  }

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

  addOption() {
    if (this.newSelectText.length && this.newSelectValue.length) {
      this.selectObject.selectArr.push({text: this.newSelectText, value: this.newSelectValue});
      this.newSelectText = '';
      this.newSelectValue = '';
    }
  }

  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }

}
