import { Recipe } from '@types';

export type RecipeFormValues = Omit<Recipe, 'id'>;
