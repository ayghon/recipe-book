export enum MeasurementUnit {
  AsNeeded = 'as_needed',
  Piece = 'piece',
  TableSpoon = 'table_spoon',
  CoffeeSpoon = 'coffee_spoon',
  TeaSpoon = 'tea_spoon',
  Glass = 'glass',
  Millilitre = 'millilitre',
  Litre = 'litre',
  Gram = 'gram',
  Kilogram = 'kilogram',
}

export type IngredientSection = {
  title?: string;
  items: Ingredient[];
};

export type Ingredient = {
  name: string;
  countStart?: number;
  countEnd?: number;
  measureUnit: MeasurementUnit;
  comment?: string;
  isOptional?: boolean;
};

export type Step = {
  explanation: string;
  image?: string;
};

export type Recipe = {
  id: string;
  title: string;
  ingredients: IngredientSection[];
  steps: Step[];
  image?: string;
};
