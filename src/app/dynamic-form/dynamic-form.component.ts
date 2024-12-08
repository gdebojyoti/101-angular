import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class DynamicFormComponent implements OnChanges {
  @Input() config: any[] = []
  @Input() submit!: (d: any) => void

  form!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    this.createForm()
  }

  createForm() {
    this.form = this.fb.group({})

    for (const field of this.config) {
      this.form.addControl(
        field.key,
        this.fb.control('', field.validators || [])
      )
    }
  }

  onSubmit(e: Event) {
    if (this.form.valid) {
      this.submit(this.form.value)
    }
  }
}
