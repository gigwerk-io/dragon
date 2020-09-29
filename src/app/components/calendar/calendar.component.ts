import {Component, OnInit} from '@angular/core';
import {months, days, themes} from '../../../app/utils/interfaces/enum/calendar';
import {CalendarEvent} from '../../utils/interfaces/models/CalendarEvent';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  months = months;
  days = days;
  themes = themes;
  month: number;
  year: number;
  no_of_days = [];
  blankdays = [];
  events: CalendarEvent[] = [
    {
      event_date: new Date(2020, 8, 30),
      event_title: 'April Fool\'s Day',
      event_theme: 'blue'
    },

    {
      event_date: new Date(2020, 8, 30),
      event_title: 'Birthday',
      event_theme: 'red'
    },

    {
      event_date: new Date(2020, 8, 30),
      event_title: 'Upcoming Event Event Event',
      event_theme: 'green'
    }
  ];
  filteredEvents: CalendarEvent[];

  constructor() {
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

  filterEvents(date): CalendarEvent[] {
    this.filteredEvents = this.events.filter(
      e => new Date(e.event_date).toDateString() ===  new Date(this.year, this.month, date).toDateString()
    );
    console.log(this.filteredEvents);
    return this.filteredEvents;
  }
}
