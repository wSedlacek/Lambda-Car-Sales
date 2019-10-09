import React from 'react';
import { Provider } from 'react-redux';

import { store } from './state/app.store';
import { HeaderComponent } from './components/header/header.component';
import { AddedFeaturesComponent } from './components/added-features/added-features.component';
import { AdditionalFeaturesComponent } from './components/additional-features/additional-features.component';
import { TotalComponent } from './components/total/total.component';

const App = () => {
  return (
    <Provider store={store}>
      <div className='boxes'>
        <div className='box'>
          <HeaderComponent />
          <AddedFeaturesComponent />
        </div>
        <div className='box'>
          <AdditionalFeaturesComponent />
          <TotalComponent />
        </div>
      </div>
    </Provider>
  );
};

export { App };
