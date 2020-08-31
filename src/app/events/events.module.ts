import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';

import { EventsPageComponent } from './events-page/events-page.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';

import { UpcomingEventsPageComponent } from './upcoming-events-page/upcoming-events-page.component';
import { PastEventsPageComponent } from './past-events-page/past-events-page.component';

import { EventDetailPageComponent } from './event-detail-page/event-detail-page.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    EventsPageComponent,
    UpcomingEventsPageComponent,
    PastEventsPageComponent,
    EventListItemComponent,
    EventDetailPageComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, EventsRoutingModule],
})
export class EventsModule {}
