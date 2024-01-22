import { RecipeFormValues } from '@components';
import { MaterialIcons } from '@expo/vector-icons';
import { i18nKeys } from '@i18n';
import { Step } from '@types';
import { TextAreaField } from '@ui';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { Button, Text, useTheme, View, XStack, YStack } from 'tamagui';

export const RecipeStepsSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { fields, append, remove, swap } = useFieldArray({ name: 'steps' });
  const {
    formState: { errors },
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

  return (
    <View rowGap={16}>
      <Text fontWeight="800" fontSize={20}>
        {t(i18nKeys.components.recipe_form.steps_section.title)}
      </Text>
      {fields.map(({ id }, index) => (
        <XStack key={id} width="100%" columnGap={8}>
          <Text fontSize={16}>{index + 1}.</Text>
          <TextAreaField name={`steps.${index}.explanation`} isRequired />
          <YStack rowGap={10}>
            <MaterialIcons
              name="arrow-upward"
              size={24}
              color={theme.gray9.val}
              onPress={() => handleMoveUp(index)}
            />
            <MaterialIcons
              name="delete"
              size={24}
              color={theme.red9.val}
              onPress={() => handleRemoveStep(index)}
            />
            <MaterialIcons
              name="arrow-downward"
              size={24}
              color={theme.gray9.val}
              onPress={() => handleMoveDown(index)}
            />
          </YStack>
        </XStack>
      ))}
      <Text height={18} fontSize={14} color={theme.red9.val}>
        {sectionError}
      </Text>
      <Button bordered={2} onPress={handleAddStep}>
        {t(i18nKeys.components.recipe_form.steps_section.button)}
      </Button>
    </View>
  );
};
