import { createAction, createReducer, on, props } from '@ngrx/store';

export interface CounterState {
  count: number;
}

export const selectCounter = (state: any) => state.counter.count;

export const ChangeCount = createAction(
  'ChangeCount',
  props<{ diff: number }>()
);

const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(ChangeCount, (state, { diff }) => ({
    ...state,
    count: state.count + diff,
  }))
);
