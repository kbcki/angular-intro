import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { CounterWithServiceComponent } from '../counter-with-service/counter-with-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CounterComponent, CounterWithServiceComponent],
})
export class AppComponent {
  title = 'angular-intro';
}
