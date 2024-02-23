import { i18nKeys } from '@i18n';
import { EditImageButton, EditImageButtonVariant, TextField } from '@ui';
import * as ImagePicker from 'expo-image-picker';
import { FC } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'tamagui';

export const RecipeIntroSection: FC = () => {
  const { t } = useTranslation();
  const {
    field: { value, onChange },
  } = useController({ name: 'image' });

  const onEditImagePress = async (result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled && result.assets[0]) {
      const selectedImage = result.assets[0].uri;
      onChange(selectedImage);
    }
  };

  return (
    <View rowGap={32}>
      <View alignItems="center">
        <EditImageButton
          variant={EditImageButtonVariant.Full}
          sourceUri={value}
          onPress={onEditImagePress}
        />
      </View>

      <TextField
        name="title"
        autoFocus
        isRequired
        placeholder={t(i18nKeys.components.recipe_form.input.placeholder)}
      />
    </View>
  );
};
