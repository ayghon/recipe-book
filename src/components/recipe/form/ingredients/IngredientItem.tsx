import { MaterialIcons } from '@expo/vector-icons';
import { i18nKeys } from '@i18n';
import { SelectField, SwitchField, TextAreaField, TextField } from '@ui';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Separator, Text, useTheme, View, XStack } from 'tamagui';

import { CountInputGroup } from './CountInputGroup';

type IngredientItemProps = {
  index: number;
  handleRemoveIngredient: (index: number) => void;
};

export const IngredientItem: FC<IngredientItemProps> = ({ index, handleRemoveIngredient }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View columnGap={16} rowGap={16}>
      <XStack flex={1} columnGap={8}>
        <Text fontSize={16}>{index + 1}.</Text>
        <TextField
          label={t(
            i18nKeys.components.recipe_form.ingredients_section.ingredients.input.name.label,
          )}
          placeholder={t(
            i18nKeys.components.recipe_form.ingredients_section.ingredients.input.name.placeholder,
          )}
          name={`ingredients.${index}.name`}
          isRequired
        />
        <MaterialIcons
          style={{ alignSelf: 'center' }}
          name="delete"
          size={24}
          color={theme.red9.val}
          onPress={() => handleRemoveIngredient(index)}
        />
      </XStack>
      <View paddingHorizontal={20} rowGap={16}>
        <SelectField
          label={t(
            i18nKeys.components.recipe_form.ingredients_section.ingredients.input.measure_unit
              .label,
          )}
          isRequired
          name={`ingredients.${index}.measureUnit`}
          items={measureUnitItems}
        />
        <CountInputGroup index={index} itemIndex={index} />
      </View>

      <View paddingHorizontal={20} rowGap={16}>
        <SwitchField
          label={t(
            i18nKeys.components.recipe_form.ingredients_section.ingredients.input.is_optional.label,
          )}
          name={`ingredients.${index}.isOptional`}
        />
        <TextAreaField
          placeholder={t(
            i18nKeys.components.recipe_form.ingredients_section.ingredients.input.comment
              .placeholder,
          )}
          label={t(
            i18nKeys.components.recipe_form.ingredients_section.ingredients.input.comment.label,
          )}
          name={`ingredients.${index}.comment`}
        />
      </View>
      <Separator marginBottom={16} borderColor={theme.gray8.val} />
    </View>
  );
};

const measureUnitItems = Object.entries(i18nKeys.common.measure_unit)
  .map(([key, value]) => ({
    name: value,
    value: key,
  }))
  .sort((a, b) => (a.name < b.name ? -1 : 1));
