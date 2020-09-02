import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';

import { EventsPageComponent } from './events-page/events-page.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';

import { EventsListPageComponent } from './events-list-page/events-list-page.component';

import { EventDetailPageComponent } from './event-detail-page/event-detail-page.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DisplayDateComponent } from './components/display-date/display-date.component';
import { FilterEventsPipe } from './pipes/filter-events.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';

@NgModule({
  declarations: [
    EventsPageComponent,
    EventsListPageComponent,
    EventListItemComponent,
    EventDetailPageComponent,
    PageNotFoundComponent,
    DisplayDateComponent,

    FilterEventsPipe,

    SortByDatePipe,
  ],
  imports: [CommonModule, EventsRoutingModule],
})
export class EventsModule {}
