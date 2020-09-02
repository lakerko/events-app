import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

import { EventDefinition } from './models/event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsHttpService {
  private events: EventDefinition[] = [
    {
      id: 'h4730h85-36m2-404e-8d14-47ae842fmknm',
      name: 'Action figure market',
      startDate: 1598117201000,
      description: `Join us and say goodbye to summer.
      Bacon ipsum dolor amet lorem labore cillum, nisi pork spare ribs kevin. Exercitation do turkey, chuck irure alcatra mollit sausage est adipisicing ex tail aliquip reprehenderit sed. Brisket flank pancetta dolore t-bone sint, sirloin filet mignon aliquip pig. Incididunt eu pig nisi frankfurter venison laborum minim. Rump fugiat dolor, ut ut swine tempor. Ullamco quis capicola, excepteur ham hock laborum beef buffalo tri-tip venison aliquip. Ball tip jerky lorem ut aute cupim anim elit drumstick.

      Tenderloin ut shank tongue pariatur eu. Elit reprehenderit beef sirloin ad consectetur. Cupidatat culpa shankle sint proident. Irure pork chop ground round nisi pork belly aliqua salami andouille.`,
      location: 'Trnava',
    },
    {
      id: 'b6821c93-38e2-404e-8d14-47ae842fbbec',
      name: 'Say goodbye to summer',
      startDate: 1598990441000,
      endDate: 1600200041000,
      description: `Join us and say goodbye to summer.
      Bacon ipsum dolor amet lorem labore cillum, nisi pork spare ribs kevin. Exercitation do turkey, chuck irure alcatra mollit sausage est adipisicing ex tail aliquip reprehenderit sed. Brisket flank pancetta dolore t-bone sint, sirloin filet mignon aliquip pig. Incididunt eu pig nisi frankfurter venison laborum minim. Rump fugiat dolor, ut ut swine tempor. Ullamco quis capicola, excepteur ham hock laborum beef buffalo tri-tip venison aliquip. Ball tip jerky lorem ut aute cupim anim elit drumstick.

      Tenderloin ut shank tongue pariatur eu. Elit reprehenderit beef sirloin ad consectetur. Cupidatat culpa shankle sint proident. Irure pork chop ground round nisi pork belly aliqua salami andouille.`,
      location: 'Trnava',
    },
    {
      id: 'f4831d93-48e2-104e-4d14-57ae842fghrb',
      name: 'Grill party',
      startDate: 1595190401000,
      description: `
      Bacon ipsum dolor amet lorem labore cillum, nisi pork spare ribs kevin. Exercitation do turkey, chuck irure alcatra mollit sausage est adipisicing ex tail aliquip reprehenderit sed. Brisket flank pancetta dolore t-bone sint, sirloin filet mignon aliquip pig. Incididunt eu pig nisi frankfurter venison laborum minim. Rump fugiat dolor, ut ut swine tempor. Ullamco quis capicola, excepteur ham hock laborum beef buffalo tri-tip venison aliquip. Ball tip jerky lorem ut aute cupim anim elit drumstick.

      Tenderloin ut shank tongue pariatur eu. Elit reprehenderit beef sirloin ad consectetur. Cupidatat culpa shankle sint proident. Irure pork chop ground round nisi pork belly aliqua salami andouille.`,
      location: 'Trnava',
    },
    {
      id: 'e7af43a9-a349-40ee-a3b6-40efcd579f5e',
      name: 'Fall Party',
      startDate: 1600614000000,
      description: `Summer is over. But we can look forward to wind and rain. Falling leaves. And stuff.
        Bacon ipsum dolor amet cow irure salami pariatur chicken tempor tail deserunt spare ribs cupidatat ut sausage tenderloin occaecat lorem. Picanha eu fugiat, officia consectetur leberkas chicken deserunt turkey shankle laborum andouille short loin mollit commodo. Tri-tip bresaola proident pariatur minim leberkas filet mignon nostrud. Strip steak dolor ham hock, officia rump in capicola venison cupidatat cow.

        Filet mignon capicola boudin qui drumstick ham hock aliqua duis. Drumstick ad eu exercitation. Picanha turducken pastrami laboris officia qui in, turkey shoulder flank sed ribeye quis bacon. Short ribs ground round commodo corned beef, nisi andouille cillum burgdoggen. Qui ipsum occaecat exercitation ex tail jowl. Elit tempor consequat flank irure ea doner commodo excepteur consectetur. Biltong do flank doner chuck.

        Ea laborum dolore short loin pariatur occaecat magna pork loin fugiat strip steak boudin. Anim capicola porchetta sausage, boudin rump incididunt drumstick. Ad qui pork tri-tip elit short loin capicola. Officia pork minim, turkey kevin deserunt spare ribs pork chop drumstick tri-tip sirloin shank ham hock in. Do sirloin mollit ullamco shankle.`,
      location: 'Bucany',
    },
    {
      id: 'x7320g93-38e2-404e-8d14-47ae842fffdd',
      name: 'Bazar',
      startDate: 1594646801000,
      endDate: 1594672001000,
      description: `
      Bacon ipsum dolor amet lorem labore cillum, nisi pork spare ribs kevin. Exercitation do turkey, chuck irure alcatra mollit sausage est adipisicing ex tail aliquip reprehenderit sed. Brisket flank pancetta dolore t-bone sint, sirloin filet mignon aliquip pig. Incididunt eu pig nisi frankfurter venison laborum minim. Rump fugiat dolor, ut ut swine tempor. Ullamco quis capicola, excepteur ham hock laborum beef buffalo tri-tip venison aliquip. Ball tip jerky lorem ut aute cupim anim elit drumstick.

      Tenderloin ut shank tongue pariatur eu. Elit reprehenderit beef sirloin ad consectetur. Cupidatat culpa shankle sint proident. Irure pork chop ground round nisi pork belly aliqua salami andouille.`,
      location: 'Bratislava',
    },
    {
      id: 'e3d71f9c-6664-4216-b682-a4a73e4f63a7',
      name: 'Start of semester party',
      startDate: 1601056800000,
      description: `We are going to school. We will ignore corona. Come and join us. See what happens.
        Bacon ipsum dolor amet alcatra strip steak buffalo swine, picanha prosciutto spare ribs kielbasa shoulder biltong bresaola andouille turducken venison. Shoulder corned beef buffalo, leberkas filet mignon landjaeger short loin ground round pork chop beef ribs burgdoggen rump turducken flank frankfurter. Salami ribeye chislic, turkey tail t-bone short loin boudin short ribs alcatra sausage tenderloin fatback brisket. Pancetta bresaola salami tongue turkey corned beef chuck buffalo kevin fatback venison ball tip shank short ribs shankle. Short loin flank tri-tip, biltong bresaola kevin ham hock doner.`,
      location: 'Bratislava',
    },
  ];

  constructor() {}

  getEvents$(): Observable<EventDefinition[]> {
    return of(this.events);
  }

  getEventById$(eventId: string): Observable<EventDefinition> {
    return of(this.events.find((event) => event.id === eventId));
  }

  submitEventAndReturnId(event): Observable<string> {
    const id = this.create_UUID();
    const eventWithId = {
      ...event,
      id,
    };

    this.events.push(eventWithId);
    return of(id);
  }

  create_UUID(): string {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (c) => {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      },
    );
    return uuid;
  }
}
