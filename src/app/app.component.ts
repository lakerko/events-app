import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Create events module
  // -- events service
  // ---- request events (upcoming, past) from server
  // ---- create events
  // -- events dashboard component
  // ---- routing for upcoming and past events
  // ----- get data via service, sends them to list component
  // -- events-list component
  // ---- display input events in a list
  // -- event-list-item component
  // ----- display data of a specific event in a list
  // -- event-detail-page component
  // ---- request data about specific event based on url id
  // ---- display event informations
  // -- event-create-page component
  // ---- create form
  // ---- call create request from service
}
