import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventDefinition } from '../models/event.interface';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.scss'],
})
export class EventDetailPageComponent {
  public eventData: EventDefinition = this.activatedRoute.snapshot.data.event;

  constructor(private activatedRoute: ActivatedRoute) {}
}
