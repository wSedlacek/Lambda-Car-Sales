import { combineReducers } from 'redux';

import { carReducer, CarType } from './car/car.reducer';

export type CarState = {
  car: CarType;
};

export const reducer = combineReducers({ car: carReducer });
