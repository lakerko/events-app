import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../models/navigation.interface';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
})
export class EventsPageComponent implements OnInit {
  public navigationItems: NavigationItem[] = [
    {
      label: 'events',
      path: ['list'],
    },
    {
      label: 'create event',
      path: ['create'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
