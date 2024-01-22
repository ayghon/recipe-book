import { i18nKeys } from '@i18n';
import { IngredientSection, MeasurementUnit } from '@types';
import { Dot } from '@ui';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph, Text, useTheme, View, XStack } from 'tamagui';

type RecipeIngredientsProps = {
  ingredients: IngredientSection[];
};

export const RecipeIngredients: FC<RecipeIngredientsProps> = ({ ingredients }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View rowGap="$4">
      <Text fontSize={16} fontWeight="800">
        {t(i18nKeys.components.recipe_form.ingredients_section.title)}
      </Text>
      <View>
        {ingredients.map((ingredient, index) => (
          <View key={ingredient.title ?? `${ingredient.items.length}-${index}`}>
            {ingredient.title && (
              <Text fontSize={16} fontWeight="800" marginVertical="$4">
                {ingredient.title}
              </Text>
            )}

            <View rowGap="$2">
              {ingredient.items.map((item) => {
                const isAsNeeded = item.measureUnit === MeasurementUnit.AsNeeded;

                return (
                  <View key={item.name}>
                    <XStack alignItems="center" columnGap="$2">
                      <Dot />
                      {!isAsNeeded && (
                        <Text fontSize={16}>
                          {!item.countEnd ? item.countStart : `${item.countStart}-${item.countEnd}`}
                        </Text>
                      )}
                      {!isAsNeeded && (
                        <Text fontSize={16}>
                          {t(i18nKeys.common.measure_unit[item.measureUnit])}
                        </Text>
                      )}
                      <Text fontSize={16}>{item.name}</Text>
                      {isAsNeeded && (
                        <Text fontSize={16}>{t(i18nKeys.common.measure_unit.as_needed)}</Text>
                      )}
                      {item.isOptional && (
                        <Text fontSize={16} color={theme.gray11.val}>
                          {t(i18nKeys.recipe.view.ingredients.optional)}
                        </Text>
                      )}
                    </XStack>
                    <Paragraph fontSize={14}>{item.comment}</Paragraph>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
