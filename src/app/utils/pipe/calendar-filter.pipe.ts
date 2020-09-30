import {Pipe, PipeTransform} from '@angular/core';
import {CalendarEvent} from '../interfaces/models/CalendarEvent';

@Pipe({
  name: 'calendarFilter'
})
export class CalendarFilterPipe implements PipeTransform {

  transform(events: CalendarEvent[], filter: {year: number, month: number, date: number}): CalendarEvent[] {
    return events.filter(e => {
      return new Date(e.date * 1000).toDateString() === new Date(filter.year, filter.month, filter.date).toDateString();
    });
  }

}
