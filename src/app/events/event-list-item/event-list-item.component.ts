import { Component, Input } from '@angular/core';
import { EventDefinition } from '../models/event.interface';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss'],
})
export class EventListItemComponent {
  @Input() eventDefinition: EventDefinition;
}
