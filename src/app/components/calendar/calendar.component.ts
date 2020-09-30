import {Component, Input, OnInit} from '@angular/core';
import {months, days, themes} from '../../../app/utils/interfaces/enum/calendar';
import {CalendarEvent} from '../../utils/interfaces/models/CalendarEvent';
import {DashboardService} from '../../utils/services/dashboard.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('events') events: CalendarEvent[];
  months = months;
  days = days;
  month: number;
  year: number;
  no_of_days = [];
  blankdays = [];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.initDate();
    this.getNoOfDays();
  }

  initDate() {
    const today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
  }

  isToday(date) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);

    return today.toDateString() === d.toDateString();
  }

  subtractMonth() {
    this.month--;
    this.getNoOfDays();
  }

  addMonth() {
    this.month++;
    this.getNoOfDays();
  }

  getNoOfDays() {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

    // find where to start calendar day of week
    const dayOfWeek = new Date(this.year, this.month).getDay();
    const blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    const daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }

  showDayModal(day) {
    console.log(this.month, day);
  }
}
