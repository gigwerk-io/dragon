import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;

  transition = false;
  show = true;
  radioObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Radio',
    name: `radio-${Date.now()}`,
    radioArr: [
      {text: 'Option 1', value: 'option 1'},
      {text: 'Option 2', value: 'option 2'},
      {text: 'Option 3', value: 'option 3'},
      {text: 'Option 4', value: 'option 4'},
    ],
  };
  radioValue = '';
  newOptionText = '';
  newOptionValue = '';

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {}

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

  addOption() {
    if (this.newOptionText.length && this.newOptionValue.length) {
      this.radioObject.radioArr.push({text: this.newOptionText, value: this.newOptionValue});
      this.newOptionText = '';
      this.newOptionValue = '';
    }
  }


}
