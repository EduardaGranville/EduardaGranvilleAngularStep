import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,JobListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ex01';
}
