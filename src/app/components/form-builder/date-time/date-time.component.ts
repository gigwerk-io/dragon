import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {

  transition = false;
  show = true;
  dateTimeObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Date Time',
    name: `datetime-${Date.now()}`,
  };


  constructor() { }

  ngOnInit() {
  }

}
