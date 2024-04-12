import { RecipeFormValues } from '@components';
import { EditImageButton, EditImageButtonVariant, TextAreaField } from '@ui';
import * as ImagePicker from 'expo-image-picker';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Text, View, XStack } from 'tamagui';

import { MoveButton } from './MoveButton';
import { DeleteButton } from '../../components/DeleteButton';

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
  const { watch } = useFormContext<RecipeFormValues>();

  const image = watch(`steps.${index}.image`);

  return (
    <XStack columnGap={8}>
      <Text fontSize={16}>{index + 1}.</Text>
      <View flex={1}>
        <XStack>
          <TextAreaField name={`steps.${index}.explanation`} isRequired />
          <View rowGap={10}>
            <MoveButton onPress={() => handleMoveUp(index)} direction="upward" />
            <DeleteButton onPress={() => handleRemoveStep(index)} />
            <MoveButton onPress={() => handleMoveDown(index)} direction="downward" />
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
