import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventsPageComponent } from './upcoming-events-page.component';

describe('UpcomingEventsPageComponent', () => {
  let component: UpcomingEventsPageComponent;
  let fixture: ComponentFixture<UpcomingEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
