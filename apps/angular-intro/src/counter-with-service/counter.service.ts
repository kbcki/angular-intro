import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private value$ = new BehaviorSubject<number>(0);

  getValue() {
    return this.value$.asObservable();
  }

  increment() {
    this.value$.next(this.value$.getValue() + 1);
  }

  decrement() {
    this.value$.next(this.value$.getValue() - 1);
  }
}
