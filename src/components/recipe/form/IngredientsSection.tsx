import { MaterialIcons } from '@expo/vector-icons';
import { i18nKeys } from '@i18n';
import { Ingredient, MeasurementUnit } from '@types';
import { SelectField, SwitchField, TextAreaField, TextField } from '@ui';
import { FC } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { Button, Separator, Text, useTheme, View, XStack, YStack } from 'tamagui';

import { CountInputGroup } from './CountInputGroup';
import { RecipeFormValues } from './RecipeForm';

type IngredientSectionProps = {
  index: number;
};

export const IngredientsSection: FC<IngredientSectionProps> = ({ index }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { watch } = useFormContext<RecipeFormValues>();
  const { fields, append, remove } = useFieldArray<RecipeFormValues, `ingredients.${number}.items`>(
    {
      name: `ingredients.${index}.items`,
    },
  );

  const handleAddIngredient = () => {
    const ingredient: Ingredient = {
      measureUnit: MeasurementUnit.Piece,
      name: '',
    };
    append(ingredient);
  };

  const handleRemoveIngredient = (itemIndex: number) => {
    if (!watch(`ingredients.${index}.items.${itemIndex}.name`)) {
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
          onPress: () => remove(index),
          style: 'destructive',
          text: t(i18nKeys.common.yes),
        },
      ],
    );
  };

  return (
    <View rowGap="$4">
      <View rowGap="$3">
        {fields.map(({ id }, itemIndex) => (
          <YStack columnGap="$4" rowGap="$4" key={id}>
            <XStack flex={1} columnGap="$2">
              <Text fontSize={16}>{itemIndex + 1}.</Text>
              <TextField
                label={t(
                  i18nKeys.components.recipe_form.ingredients_section.ingredients.input.name.label,
                )}
                placeholder={t(
                  i18nKeys.components.recipe_form.ingredients_section.ingredients.input.name
                    .placeholder,
                )}
                name={`ingredients.${index}.items.${itemIndex}.name`}
                isRequired
              />
              <MaterialIcons
                name="delete"
                size={24}
                color={theme.red9.val}
                onPress={() => handleRemoveIngredient(itemIndex)}
              />
            </XStack>
            <YStack>
              <SelectField
                label={t(
                  i18nKeys.components.recipe_form.ingredients_section.ingredients.input.measure_unit
                    .label,
                )}
                isRequired
                name={`ingredients.${index}.items.${itemIndex}.measureUnit`}
                items={measureUnitItems}
              />
              <CountInputGroup index={index} itemIndex={itemIndex} />
            </YStack>
            <SwitchField
              label={t(
                i18nKeys.components.recipe_form.ingredients_section.ingredients.input.is_optional
                  .label,
              )}
              name={`ingredients.${index}.items.${itemIndex}.isOptional`}
            />
            <TextAreaField
              placeholder={t(
                i18nKeys.components.recipe_form.ingredients_section.ingredients.input.comment
                  .placeholder,
              )}
              label={t(
                i18nKeys.components.recipe_form.ingredients_section.ingredients.input.comment.label,
              )}
              name={`ingredients.${index}.items.${itemIndex}.comment`}
            />
            <Separator marginBottom="$4" borderColor={theme.gray8.val} />
          </YStack>
        ))}
      </View>
      <Button bordered={2} onPress={handleAddIngredient}>
        {t(i18nKeys.components.recipe_form.ingredients_section.ingredients.button)}
      </Button>
    </View>
  );
};

const measureUnitItems = Object.entries(i18nKeys.common.measure_unit)
  .map(([key, value]) => ({
    name: value,
    value: key,
  }))
  .sort((a, b) => (a.name < b.name ? -1 : 1));
