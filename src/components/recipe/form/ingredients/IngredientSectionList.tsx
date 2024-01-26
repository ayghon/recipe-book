import { RecipeFormValues } from '@components';
import { i18nKeys } from '@i18n';
import { IngredientSection } from '@types';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { Button, Text, useTheme, View } from 'tamagui';

import { IngredientSectionItem } from './IngredientSectionItem';

export const IngredientSectionList = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { fields, append, remove } = useFieldArray({ name: 'ingredients' });
  const {
    formState: { errors },
  } = useFormContext<RecipeFormValues>();
  const sectionError = errors.ingredients?.message;

  const handleAddSection = () => {
    append({ items: [], title: '' });
  };

  const handleRemoveSection = (index: number) => {
    if (
      !(fields[index] as IngredientSection & { id: string }).items.length &&
      !(fields[index] as IngredientSection & { id: string }).title
    ) {
      return remove(index);
    }

    Alert.alert(
      t(i18nKeys.components.recipe_form.ingredients_section.alert.delete.title),
      t(i18nKeys.components.recipe_form.ingredients_section.alert.delete.description),
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
    <View rowGap={16}>
      <Text fontWeight="800" fontSize={20}>
        {t(i18nKeys.components.recipe_form.ingredients_section.title)}
      </Text>
      {fields.map(({ id }, index) => (
        <IngredientSectionItem
          index={index}
          id={id}
          key={id}
          onDeletePress={() => handleRemoveSection(index)}
        />
      ))}
      <Text height={18} fontSize={14} color={theme.red9.val}>
        {sectionError}
      </Text>
      <Button bordered={2} onPress={handleAddSection}>
        {t(i18nKeys.components.recipe_form.ingredients_section.button)}
      </Button>
    </View>
  );
};
