import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EventsHttpService } from '../events-http.service';
import { EventsType } from '../models/event.interface';

@Component({
  selector: 'app-events-list-page',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListPageComponent {
  public eventFilter: EventsType = 'upcoming';

  constructor(public readonly eventsHttpService: EventsHttpService) {}

  switchTo(eventFilter: EventsType): void {
    if (eventFilter !== this.eventFilter) {
      this.eventFilter = eventFilter;
    }
  }
}
