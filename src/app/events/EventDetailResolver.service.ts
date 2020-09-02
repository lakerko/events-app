import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { catchError } from 'rxjs/operators';
import { empty, Observable } from 'rxjs';

import { EventsHttpService } from './events-http.service';
import { EventDefinition } from './models/event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventDetailResolverService implements Resolve<any> {
  constructor(private eventsHttpService: EventsHttpService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<EventDefinition> {
    return this.eventsHttpService.getEventById$(route.params.id).pipe(
      catchError((error) => {
        return empty();
      }),
    );
  }
}
