import { useFormContext } from 'react-hook-form';

import { RecipeView } from '../../view/RecipeView';
import { RecipeFormValues } from '../recipe.types';

export const SummarySection = () => {
  const { getValues } = useFormContext<RecipeFormValues>();
  const { steps, ingredients, image, title } = getValues();

  return <RecipeView title={title} ingredients={ingredients} steps={steps} image={image} />;
};
