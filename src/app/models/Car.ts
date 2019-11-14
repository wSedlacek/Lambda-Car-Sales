export interface Car {
  price: number;
  name: string;
  image: string;
  features: AdditionalFeature[];
}

export interface AdditionalFeature {
  id: number;
  name: string;
  price: number;
}
