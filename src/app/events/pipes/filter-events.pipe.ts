import { Pipe, PipeTransform } from '@angular/core';
import { EventsType, EventDefinition } from '../models/event.interface';

@Pipe({
  name: 'filterEvents',
})
export class FilterEventsPipe implements PipeTransform {
  transform(events: EventDefinition[], filter: EventsType): EventDefinition[] {
    const currentTime = new Date().getTime();

    return events.filter((event) => {
      const dateToCompare = event.endDate ? event.endDate : event.startDate;

      return filter === 'upcoming'
        ? dateToCompare > currentTime
        : dateToCompare < currentTime;
    });
  }
}
