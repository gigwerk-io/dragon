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
  @Input('index') index = 1;

  // tslint:disable-next-line: no-input-rename
  @Input('settings') settings;

  // tslint:disable-next-line: no-input-rename
  @Input('mode') mode: string;

  submitFormSubscription: Subscription;

  transition = false;
  show = true;
  selectObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Text',
    name: `text-${Date.now()}`,
    selectArr: [
      { text: 'Option 1', value: 'Option 1' },
      { text: 'Option 2', value: 'Option 2' },
      { text: 'Option 3', value: 'Option 3' }
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
    this.selectObject = this.formBuilderService.setOptions(this.settings, this.selectObject);
    this.selectObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
      .subscribe(() => this.formBuilderService.componentOptions.push(this.selectObject));
  }

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

  addOption() {
    if (this.newSelectText.length && this.newSelectValue.length) {
      this.selectObject.selectArr.push({ text: this.newSelectText, value: this.newSelectValue });
      this.newSelectText = '';
      this.newSelectValue = '';
    }
  }

  updateValue(event: string, index: number, type: string) {
    if (type === 'text') {
      this.selectObject.selectArr[index].text = event;
    } else {
      this.selectObject.selectArr[index].value = event;
    }
  }

  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }

}
