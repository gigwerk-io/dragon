import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;

  transition = false;
  show = true;
  phoneObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Phone',
    name: `phone-${Date.now()}`,
    errorText: 'please Enter a valid phone number',
  };

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {}

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

}
