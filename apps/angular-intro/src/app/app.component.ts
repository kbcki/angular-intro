import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CounterComponent],
})
export class AppComponent {
  title = 'angular-intro';
}
