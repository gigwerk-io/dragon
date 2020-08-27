import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  transition = false;
  show = true;
  phoneObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Phone',
    name: `phone-${Date.now()}`,
    errorText: 'please Enter a valid phone number',
  };

  constructor() { }

  ngOnInit() {
  }

}
 