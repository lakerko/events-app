import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DpDatePickerModule } from 'ng2-date-picker';

import { EventsRoutingModule } from './events-routing.module';

import { EventsPageComponent } from './events-page/events-page.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';

import { EventsListPageComponent } from './events-list-page/events-list-page.component';

import { EventDetailPageComponent } from './event-detail-page/event-detail-page.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DisplayDateComponent } from './components/display-date/display-date.component';
import { EventCreatePageComponent } from './event-create-page/event-create-page.component';
import { FilterEventsPipe } from './pipes/filter-events.pipe';

@NgModule({
  declarations: [
    EventsPageComponent,
    EventsListPageComponent,
    EventListItemComponent,
    EventDetailPageComponent,
    PageNotFoundComponent,
    DisplayDateComponent,
    EventCreatePageComponent,
    FilterEventsPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    DpDatePickerModule,

    EventsRoutingModule,
  ],
})
export class EventsModule {}
