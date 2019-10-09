import React from 'react';

import { Car, AdditionalFeature } from './models/Car';
import { HeaderComponent } from './components/header/header.component';
import { AddedFeaturesComponent } from './components/added-features/added-features.component';
import { AdditionalFeaturesComponent } from './components/additional-features/additional-features.component';
import { TotalComponent } from './components/total/total.component';

type AppState = {
  additionalPrice: number;
  car: Car;
  additionalFeatures: AdditionalFeature[];
};

const App = () => {
  const state: AppState = {
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

  const removeFeature = (item: AdditionalFeature) => {
    // dispatch an action here to remove an item
  };

  const buyItem = (item: AdditionalFeature) => {
    // dispatch an action here to add an item
  };

  return (
    <div className='boxes'>
      <div className='box'>
        <HeaderComponent car={state.car} />
        <AddedFeaturesComponent car={state.car} />
      </div>
      <div className='box'>
        <AdditionalFeaturesComponent store={state.additionalFeatures} />
        <TotalComponent car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export { App };
