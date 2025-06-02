import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValueComponent } from '../counter/value/value.component';
import { ButtonComponent } from '../counter/button/button.component';
import { CounterService } from './counter.service';

@Component({
  standalone: true,
  selector: 'app-counter-with-service',
  templateUrl: './counter-with-service.component.html',
  imports: [CommonModule, ValueComponent, ButtonComponent],
})
export class CounterWithServiceComponent {
  private readonly counterService = inject(CounterService);

  count$ = this.counterService.getValue();

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
