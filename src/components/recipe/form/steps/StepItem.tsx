import { RecipeFormValues } from '@components';
import { MaterialIcons } from '@expo/vector-icons';
import { EditImageButton, EditImageButtonVariant, TextAreaField } from '@ui';
import * as ImagePicker from 'expo-image-picker';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Text, useTheme, View, XStack } from 'tamagui';

type StepItemProps = {
  index: number;
  handleMoveUp: (index: number) => void;
  handleRemoveStep: (index: number) => void;
  handleMoveDown: (index: number) => void;
  onChooseImagePress: (index: number, result: ImagePicker.ImagePickerResult) => void;
};

export const StepItem: FC<StepItemProps> = ({
  index,
  handleMoveUp,
  handleRemoveStep,
  handleMoveDown,
  onChooseImagePress,
}) => {
  const theme = useTheme();
  const { watch } = useFormContext<RecipeFormValues>();

  const image = watch(`steps.${index}.image`);

  return (
    <XStack columnGap={8}>
      <Text fontSize={16}>{index + 1}.</Text>
      <View flex={1}>
        <XStack>
          <TextAreaField name={`steps.${index}.explanation`} isRequired />
          <View rowGap={10}>
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
          </View>
        </XStack>
        <EditImageButton
          onPress={(value) => onChooseImagePress(index, value)}
          variant={EditImageButtonVariant.Minimal}
          sourceUri={image}
        />
      </View>
    </XStack>
  );
};
