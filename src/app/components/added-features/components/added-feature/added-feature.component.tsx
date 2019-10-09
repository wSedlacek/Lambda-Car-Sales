import React from 'react';

import { AdditionalFeature } from '../../../../models/Car';

type AddedFeatureProps = {
  feature: AdditionalFeature;
};

const AddedFeatureComponent = (props: AddedFeatureProps) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className='button'>X</button>
      {props.feature.name}
    </li>
  );
};

export { AddedFeatureComponent };
