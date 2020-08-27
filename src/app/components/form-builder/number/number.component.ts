import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  transition = false;
  show = true;
  numberObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Number',
    name: `number-${Date.now()}`,
  };

  constructor() { }

  ngOnInit() {
  }

}
