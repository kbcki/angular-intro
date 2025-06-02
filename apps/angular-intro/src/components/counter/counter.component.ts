import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ValueComponent } from './value/value.component';

@Component({
  standalone: true,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  imports: [ButtonComponent, ValueComponent],
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
