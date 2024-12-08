import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'student-form',
  imports: [ReactiveFormsModule ],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Define form controls with validation
    this.form = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
      age: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Form submitted:', formData);

      // // Send the data to the API
      // this.http.post('https://example.com', formData).subscribe({
      //   next: (response) => console.log('Success:', response),
      //   error: (error) => console.error('Error:', error)
      // });
    }
  }
}
