import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-date',
  templateUrl: './display-date.component.html',
  styleUrls: ['./display-date.component.scss'],
})
export class DisplayDateComponent {
  @Input() timestamp: number;
}
