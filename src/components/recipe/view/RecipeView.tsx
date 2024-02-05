import { FC } from 'react';
import { Separator, useTheme, View } from 'tamagui';

import { RecipeHeader } from './RecipeHeader';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeSteps } from './RecipeSteps';
import { RecipeFormValues } from '../form';

export const RecipeView: FC<RecipeFormValues> = ({ title, image, ingredients, steps }) => {
  const theme = useTheme();

  return (
    <View rowGap={16}>
      {/* HEADER */}
      <RecipeHeader title={title} image={image} />

      <Separator borderColor={theme.gray8.val} />

      {/* INGREDIENTS */}
      <RecipeIngredients ingredients={ingredients} />

      <Separator borderColor={theme.gray8.val} />

      {/* STEPS */}
      <RecipeSteps steps={steps} />
    </View>
  );
};
