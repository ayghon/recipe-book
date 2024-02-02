import { RecipeFormValues } from '@components';
import { i18nKeys } from '@i18n';
import { MeasurementUnit } from '@types';
import { NumberField } from '@ui';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { XStack } from 'tamagui';

type CountInputGroupProps = {
  itemIndex: number;
  index: number;
};

export const CountInputGroup: FC<CountInputGroupProps> = ({ itemIndex, index }) => {
  const { t } = useTranslation();
  const { watch } = useFormContext<RecipeFormValues>();

  if (watch(`ingredients.${itemIndex}.measureUnit`) === MeasurementUnit.AsNeeded) {
    return null;
  }

  return (
    <XStack columnGap={8}>
      <NumberField
        label={t(
          i18nKeys.components.recipe_form.ingredients_section.ingredients.input.count_start.label,
        )}
        placeholder="3"
        name={`ingredients.${itemIndex}.countStart`}
        isRequired
      />
      <NumberField
        label={t(
          i18nKeys.components.recipe_form.ingredients_section.ingredients.input.count_end.label,
        )}
        placeholder="4"
        name={`ingredients.${itemIndex}.countEnd`}
      />
    </XStack>
  );
};
