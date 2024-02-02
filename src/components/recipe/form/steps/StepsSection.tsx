import { RecipeFormValues } from '@components';
import { i18nKeys } from '@i18n';
import { Step } from '@types';
import { GradientButton, GradientButtonVariant } from '@ui';
import * as ImagePicker from 'expo-image-picker';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { Text, useTheme, View } from 'tamagui';

import { StepItem } from './StepItem';

export const StepsSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { fields, append, remove, swap } = useFieldArray<{ steps: Step[] }>({
    name: 'steps',
  });
  const {
    formState: { errors },
    setValue,
  } = useFormContext<RecipeFormValues>();
  const sectionError = errors.steps?.message;

  const handleAddStep = () => {
    append({ explanation: '' });
  };

  const handleRemoveStep = (index: number) => {
    if (!(fields[index] as Step & { id: string }).explanation) {
      return remove(index);
    }

    Alert.alert(
      t(i18nKeys.components.recipe_form.steps_section.alert.delete.title),
      t(i18nKeys.components.recipe_form.steps_section.alert.delete.description),
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

  const handleMoveUp = (index: number) => {
    if (!fields[index - 1]?.id) {
      swap(index, fields.length - 1);
    } else {
      swap(index, index - 1);
    }
  };

  const handleMoveDown = (index: number) => {
    if (!fields[index + 1]?.id) {
      swap(index, 0);
    } else {
      swap(index, index + 1);
    }
  };

  const onChooseImagePress = async (index: number, result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled && result.assets[0]) {
      const selectedImage = result.assets[0].uri;
      setValue(`steps.${index}.image`, selectedImage);
    }
  };

  return (
    <View rowGap={16}>
      <Text fontWeight="800" fontSize={20}>
        {t(i18nKeys.components.recipe_form.steps_section.title)}
      </Text>
      <View rowGap={24}>
        {fields.map(({ id }, index) => (
          <StepItem
            handleMoveDown={handleMoveDown}
            handleMoveUp={handleMoveUp}
            handleRemoveStep={handleRemoveStep}
            onChooseImagePress={onChooseImagePress}
            key={id}
            index={index}
          />
        ))}
      </View>
      <Text height={18} fontSize={14} color={theme.red9.val}>
        {sectionError}
      </Text>
      <GradientButton variant={GradientButtonVariant.Border} onPress={handleAddStep}>
        {t(i18nKeys.components.recipe_form.steps_section.button)}
      </GradientButton>
    </View>
  );
};
