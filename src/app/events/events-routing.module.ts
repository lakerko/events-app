import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPageComponent } from './events-page/events-page.component';
import { UpcomingEventsPageComponent } from './upcoming-events-page/upcoming-events-page.component';
import { PastEventsPageComponent } from './past-events-page/past-events-page.component';

const routes: Routes = [
  {
    path: '',
    component: EventsPageComponent,
    children: [
      {
        path: 'upcoming',
        component: UpcomingEventsPageComponent,
      },
      {
        path: 'past',
        component: PastEventsPageComponent,
      },
      {
        path: '',
        redirectTo: 'upcoming',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
