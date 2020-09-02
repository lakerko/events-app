import { Injectable } from '@angular/core';

import { EventsHttpService } from '../events-http.service';
import { IDatePickerDirectiveConfig } from 'ng2-date-picker';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateEventService {
  constructor(private readonly eventsHttpService: EventsHttpService) {}

  getDatePickerConfig(): IDatePickerDirectiveConfig {
    return {
      format: 'DD.MM.YYYY HH:mm',
      firstDayOfWeek: 'mo',
      // min: this.getTodayInConfigFormat(),
      showGoToCurrent: true,
      showTwentyFourHours: true,
    };
  }

  getTodayInConfigFormat(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  }

  createEventAndGetId(formValues: {
    [key: string]: string;
  }): Observable<string> {
    const payload = {
      ...formValues,
      startDate: this.getTimestampFromDateString(formValues.startDate),
      endDate: formValues.endDate
        ? this.getTimestampFromDateString(formValues.endDate)
        : null,
    };

    return this.eventsHttpService.submitEventAndReturnId(payload);
  }

  getTimestampFromDateString(dateString: string): number {
    if (!dateString) {
      throw new Error('Incorrect format');
    }
    const [day, month, year] = dateString
      .substring(0, 10)
      .split('.')
      .map((value) => Number(value));
    const [hours, minutes] = dateString
      .substring(11)
      .split(':')
      .map((value) => Number(value));
    return new Date(year, month, day, hours, minutes, 0).getTime();
  }
}
