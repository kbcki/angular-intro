import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeCount, selectCounter } from '../../state/counter-state';
import { ValueComponent } from '../counter/value/value.component';
import { ButtonComponent } from '../counter/button/button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-counter-with-ngrx',
  templateUrl: './counter-with-ngrx.component.html',
  imports: [ValueComponent, ButtonComponent],
})
export class CounterWithNgRxComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly destroyRef = inject(DestroyRef);

  count = 0;

  ngOnInit(): void {
    this.store
      .select(selectCounter)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((val) => val * 3)
      )
      .subscribe((count) => {
        this.count = count;
      });
  }

  increment() {
    this.store.dispatch(ChangeCount({ diff: 1 }));
  }

  decrement() {
    this.store.dispatch(ChangeCount({ diff: -1 }));
  }
}
