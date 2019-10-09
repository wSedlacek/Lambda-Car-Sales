import { Car, AdditionalFeature } from '../../models/Car';
import { AddFeatureAction, RemoveFeatureAction } from './car.actions';

export type CarState = {
  additionalPrice: number;
  car: Car;
  additionalFeatures: AdditionalFeature[];
};

const initialState: CarState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
  ],
};

export const carReducer = (
  state = initialState,
  action: AddFeatureAction | RemoveFeatureAction
) => {
  const { type, payload } = action;
  const { additionalPrice, car } = state;
  const { features } = car;

  switch (type) {
    case 'ADD_FEATURE':
      if (features.includes(payload)) return state;

      return {
        ...state,
        additionalPrice: additionalPrice + payload.price,
        car: {
          ...car,
          features: [...features, payload],
        },
      };
    case 'REMOVE_FEATURE':
      return {
        ...state,
        additionalPrice: additionalPrice - payload.price,
        car: {
          ...car,
          features: features.filter((feature) => feature.id !== payload.id),
        },
      };
    default:
      return state;
  }
};
