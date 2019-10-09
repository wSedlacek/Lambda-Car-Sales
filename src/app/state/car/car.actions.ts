import { AdditionalFeature } from '../../models/Car';

export type AddFeatureAction = {
  type: 'ADD_FEATURE';
  payload: AdditionalFeature;
};

export type RemoveFeatureAction = {
  type: 'REMOVE_FEATURE';
  payload: number;
};

export type CarActions = {
  addFeature?: (payload: AdditionalFeature) => void;
  removeFeature?: (payload: number) => void;
};

export const addFeature = (payload: AdditionalFeature) => (
  dispatch: (action: AddFeatureAction) => void
) => {
  dispatch({ type: 'ADD_FEATURE', payload });
};

export const removeFeature = (payload: number) => (
  dispatch: (action: RemoveFeatureAction) => void
) => {
  dispatch({ type: 'REMOVE_FEATURE', payload });
};
