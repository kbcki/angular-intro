import { Component } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';
import { CounterWithServiceComponent } from '../components/counter-with-service/counter-with-service.component';
import { CounterWithNgRxComponent } from '../components/counter-with-ngrx/counter-with-ngrx.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    CounterComponent,
    CounterWithServiceComponent,
    CounterWithNgRxComponent,
  ],
})
export class AppComponent {
  title = 'angular-intro';
}
