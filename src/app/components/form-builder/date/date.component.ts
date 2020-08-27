import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  transition = false;
  show = true;
  dateObject = {
    requireToggle: false,
    placeholder: 'mm/dd/yyyy',
    label: 'Date',
    name: `date-${Date.now()}`,
  };

  constructor() { }

  ngOnInit() {
  }

}
 