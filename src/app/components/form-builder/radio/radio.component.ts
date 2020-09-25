import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit, OnDestroy, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index = 1;

  // tslint:disable-next-line: no-input-rename
  @Input('settings') settings;

  // tslint:disable-next-line: no-input-rename
  @Input('mode') mode: string;

  submitFormSubscription: Subscription;

  transition = false;
  show = true;
  radioObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Radio',
    name: `radio-${Date.now()}`,
    radioArr: [
      { text: 'Option 1', value: 'option 1' },
      { text: 'Option 2', value: 'option 2' },
      { text: 'Option 3', value: 'option 3' },
      { text: 'Option 4', value: 'option 4' },
    ],
    index: this.index
  };
  radioValue = '';
  newOptionText = '';
  newOptionValue = '';

  ngOnChanges() {
    this.radioObject.index = this.index;
  }
  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {
    this.radioObject = this.formBuilderService.setOptions(this.settings, this.radioObject);
    this.radioObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
      .subscribe(() => this.formBuilderService.componentOptions.push(this.radioObject));
  }

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

  addOption() {
    if (this.newOptionText.length && this.newOptionValue.length) {
      this.radioObject.radioArr.push({ text: this.newOptionText, value: this.newOptionValue });
      this.newOptionText = '';
      this.newOptionValue = '';
    }
  }

  updateValue(event: string, index: number, type: string) {
    if (type === 'text') {
      this.radioObject.radioArr[index].text = event;
    } else {
      this.radioObject.radioArr[index].value = event;
    }
  }

  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }

}
