import { Pipe, PipeTransform } from '@angular/core';
import { EventDefinition } from '../models/event.interface';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  transform(events: EventDefinition[]): EventDefinition[] {
    return events.sort((a, b) => a.startDate - b.startDate);
  }
}
