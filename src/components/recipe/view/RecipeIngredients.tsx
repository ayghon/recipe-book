import { i18nKeys } from '@i18n';
import { Ingredient, MeasurementUnit } from '@types';
import { Dot } from '@ui';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph, Text, useTheme, View, XStack } from 'tamagui';

type RecipeIngredientsProps = {
  ingredients: Ingredient[];
};

export const RecipeIngredients: FC<RecipeIngredientsProps> = ({ ingredients }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View rowGap={16}>
      <Text fontSize={16} fontWeight="800">
        {t(i18nKeys.components.recipe_form.ingredients_section.title)}
      </Text>
      <View>
        {ingredients.map((ingredient, index) => {
          const isAsNeeded = ingredient.measureUnit === MeasurementUnit.AsNeeded;

          return (
            <View key={`${ingredient.name}-${index}`} rowGap={8}>
              <XStack alignItems="center" columnGap={8}>
                <Dot />
                {!isAsNeeded && (
                  <Text fontSize={16}>
                    {!ingredient.countEnd
                      ? ingredient.countStart
                      : `${ingredient.countStart}-${ingredient.countEnd}`}
                  </Text>
                )}
                {!isAsNeeded && (
                  <Text fontSize={16}>
                    {t(i18nKeys.common.measure_unit[ingredient.measureUnit])}
                  </Text>
                )}
                <Text fontSize={16}>{ingredient.name}</Text>
                {isAsNeeded && (
                  <Text fontSize={16}>{t(i18nKeys.common.measure_unit.as_needed)}</Text>
                )}
                {ingredient.isOptional && (
                  <Text fontSize={16} color={theme.gray11.val}>
                    {t(i18nKeys.recipe.view.ingredients.optional)}
                  </Text>
                )}
              </XStack>
              <Paragraph fontSize={14}>{ingredient.comment}</Paragraph>
            </View>
          );
        })}
      </View>
    </View>
  );
};
