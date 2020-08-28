import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsPageComponent } from './events-page/events-page.component';
import { UpcomingEventsPageComponent } from './upcoming-events-page/upcoming-events-page.component';
import { PastEventsPageComponent } from './past-events-page/past-events-page.component';


@NgModule({
  declarations: [EventsPageComponent, UpcomingEventsPageComponent, PastEventsPageComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }