import { RecipeFormValues } from '@components';
import { i18nKeys } from '@i18n';
import { Ingredient, MeasurementUnit } from '@types';
import { GradientButton, GradientButtonVariant } from '@ui';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { Text, useTheme, View } from 'tamagui';

import { IngredientItem } from './IngredientItem';

export const IngredientsSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { fields, append, remove } = useFieldArray<RecipeFormValues, 'ingredients'>({
    name: 'ingredients',
  });
  const {
    formState: { errors },
    watch,
  } = useFormContext<RecipeFormValues>();
  const sectionError = errors.ingredients?.message;

  const handleAddIngredient = () => {
    const ingredient: Ingredient = {
      measureUnit: MeasurementUnit.Piece,
      name: '',
    };
    append(ingredient);
  };

  const handleRemoveIngredient = (itemIndex: number) => {
    if (!watch(`ingredients.${itemIndex}.name`)) {
      return remove(itemIndex);
    }

    Alert.alert(
      t(i18nKeys.components.recipe_form.ingredients_section.ingredients.alert.delete.title),
      t(i18nKeys.components.recipe_form.ingredients_section.ingredients.alert.delete.description),
      [
        {
          style: 'cancel',
          text: t(i18nKeys.common.no),
        },
        {
          onPress: () => remove(itemIndex),
          style: 'destructive',
          text: t(i18nKeys.common.yes),
        },
      ],
    );
  };

  return (
    <View rowGap={16}>
      <Text fontWeight="800" fontSize={20}>
        {t(i18nKeys.components.recipe_form.ingredients_section.title)}
      </Text>
      <View rowGap={12}>
        {fields.map(({ id }, index) => (
          <IngredientItem key={id} index={index} handleRemoveIngredient={handleRemoveIngredient} />
        ))}
      </View>
      <Text height={18} fontSize={14} color={theme.red9.val}>
        {sectionError}
      </Text>
      <GradientButton variant={GradientButtonVariant.Border} onPress={handleAddIngredient}>
        {t(i18nKeys.components.recipe_form.ingredients_section.ingredients.button)}
      </GradientButton>
    </View>
  );
};
