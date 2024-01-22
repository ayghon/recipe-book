import { RecipeFormValues } from '@components';
import { MaterialIcons } from '@expo/vector-icons';
import { i18nKeys } from '@i18n';
import { TextField } from '@ui';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, useTheme, View, XStack } from 'tamagui';

import { IngredientsSection } from './IngredientsSection';

type IngredientsItemSectionProps = {
  id: string;
  index: number;
  onDeletePress: () => void;
};

export const IngredientsItemSection: FC<IngredientsItemSectionProps> = ({
  id,
  onDeletePress,
  index,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = useFormContext<RecipeFormValues>();
  const sectionError = errors.ingredients?.[index]?.items?.message;

  return (
    <View key={id} borderWidth={1} borderColor={theme.gray8.val} padding={16}>
      <XStack width="100%" columnGap={8}>
        <TextField
          label={t(i18nKeys.components.recipe_form.ingredients_section.input.title.label)}
          placeholder={t(
            i18nKeys.components.recipe_form.ingredients_section.input.title.placeholder,
          )}
          name={`ingredients.${index}.title`}
        />
        <MaterialIcons name="delete" size={24} color={theme.red9.val} onPress={onDeletePress} />
      </XStack>
      <Text height={18} fontSize={14} color={theme.red9.val}>
        {sectionError}
      </Text>
      <IngredientsSection index={index} />
    </View>
  );
};
