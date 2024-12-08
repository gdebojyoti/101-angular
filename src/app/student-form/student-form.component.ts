import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

@Component({
  selector: 'student-form',
  imports: [DynamicFormComponent],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  studentFormConfig = [
    {
      type: 'text',
      label: 'First Name',
      key: 'fName',
      validators: [Validators.required],
    },
    {
      type: 'dropdown',
      label: 'Age',
      key: 'age',
      options: [
        { key: 'more', label: 'More than 25' },
        { key: 'less', label: 'Less than 25' },
      ],
      validators: [Validators.required],
    },
    {
      type: 'checkbox',
      label: 'Agree to Terms',
      key: 'terms',
      validators: [Validators.requiredTrue],
    },
  ];

  handleFormSubmit(data: any) {
    console.log('Form Submitted:', data);
  }
}
