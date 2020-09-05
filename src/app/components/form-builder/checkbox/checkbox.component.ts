import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;


  transition = false;
  show = true;
  checkboxObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Checkbox',
    name: `checkbox-${Date.now()}`,
    checkboxArr: [
      {text: 'Option 1', value: 'option 1'},
      {text: 'Option 2', value: 'option 2'},
      {text: 'Option 3', value: 'option 3'},
      {text: 'Option 4', value: 'option 4'},
    ]
  };
 
  newOptionText = '';
  newOptionValue = '';

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {
  }

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

  addOption() {
    if (this.newOptionText.length && this.newOptionValue.length) {
      this.checkboxObject.checkboxArr.push({text: this.newOptionText, value: this.newOptionValue});
      this.newOptionText = '';
      this.newOptionValue = '';
    }
  }

}
