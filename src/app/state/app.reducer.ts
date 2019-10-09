import { combineReducers } from 'redux';

import { carReducer, CarState } from './car/car.reducer';

export type State = {
  car: CarState;
};

export const reducer = combineReducers({ car: carReducer });
