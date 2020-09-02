import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { CreateEventService } from './create-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create-page',
  templateUrl: './event-create-page.component.html',
  styleUrls: ['./event-create-page.component.scss'],
})
export class EventCreatePageComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    location: ['', [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: [''],
  });

  public config = this.createEventService.getDatePickerConfig();

  public isSaveButtonDisabled = false;
  public shouldHighlightErrors = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly createEventService: CreateEventService,
  ) {}

  ngOnInit(): void {
    this.startDate.valueChanges.subscribe((value) => console.log(value));
  }

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get location(): AbstractControl {
    return this.form.get('location');
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }

  get startDate(): AbstractControl {
    return this.form.get('startDate');
  }

  get startTime(): AbstractControl {
    return this.form.get('startTime');
  }

  get endDate(): AbstractControl {
    return this.form.get('endDate');
  }

  get endTime(): AbstractControl {
    return this.form.get('endTime');
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.shouldHighlightErrors = true;
      return;
    }

    this.isSaveButtonDisabled = true;
    this.shouldHighlightErrors = false;
    this.createEventService
      .createEventAndGetId(this.form.getRawValue())
      .subscribe((id) => {
        this.isSaveButtonDisabled = true;

        this.router.navigate(['/events', id]);
      });
  }
}
