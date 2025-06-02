import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-value',
  template: `<div>Value: {{ value }}</div> `,
})
export class ValueComponent {
  @Input({ required: true })
  value!: number;
}
