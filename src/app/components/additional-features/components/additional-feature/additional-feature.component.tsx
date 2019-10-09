import React from 'react';

import { AdditionalFeature } from '../../../../models/Car';

type AdditionalFeatureProps = {
  feature: AdditionalFeature;
};

const AdditionalFeatureComponent = (props: AdditionalFeatureProps) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className='button'>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export { AdditionalFeatureComponent };
