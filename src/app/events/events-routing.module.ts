import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPageComponent } from './events-page/events-page.component';
import { EventsListPageComponent } from './events-list-page/events-list-page.component';
import { EventDetailPageComponent } from './event-detail-page/event-detail-page.component';

import { EventCreatePageComponent } from './event-create-page/event-create-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { EventDetailResolverService } from './EventDetailResolver.service';

const routes: Routes = [
  {
    path: '',
    component: EventsPageComponent,
    children: [
      {
        path: 'list',
        component: EventsListPageComponent,
      },
      {
        path: 'create',
        component: EventCreatePageComponent,
      },
      {
        path: ':id',
        component: EventDetailPageComponent,
        resolve: {
          event: EventDetailResolverService,
        },
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
