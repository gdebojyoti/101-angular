import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { StudentFormComponent } from './student-form/student-form.component';

@Component({
  selector: 'my-app-root',
  imports: [HeaderComponent, StudentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-title';
}
