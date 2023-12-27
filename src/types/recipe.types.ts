export type MeasurementUnit =
  | 'as-needed'
  | 'piece'
  | 'table-spoon'
  | 'coffee-spoon'
  | 'tea-spoon'
  | 'glass'
  | 'millilitre'
  | 'litre'
  | 'gram'
  | 'kilogram';

export type IngredientSection = {
  title?: string;
  items: Ingredient[];
};

export type Ingredient = {
  name: string;
  count?: number;
  countStart?: number;
  countEnd?: number;
  measureUnit: MeasurementUnit;
  comment?: string;
  isOptional?: boolean;
};

export type Step = {
  explanation: string;
  title?: string;
  image?: string;
};

export type Recipe = {
  title: string;
  ingredients: IngredientSection[];
  steps: Step[];
  image?: string;
};
