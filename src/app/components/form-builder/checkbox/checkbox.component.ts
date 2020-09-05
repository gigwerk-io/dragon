import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;

  submitFormSubscription: Subscription;


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
    ],
    index: this.index
  };
  newOptionText = '';
  newOptionValue = '';

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnChanges() {
    this.checkboxObject.index = this.index;
  }

  ngOnInit() {
    this.checkboxObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
    .subscribe(() => this.formBuilderService.componentOptions.push(this.checkboxObject));
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
