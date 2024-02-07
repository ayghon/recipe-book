import { i18nKeys } from '@i18n';
import { EditImageButton, EditImageButtonVariant, TextField } from '@ui';
import * as ImagePicker from 'expo-image-picker';
import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'tamagui';

import { RecipeFormValues } from '../recipe.types';

export const RecipeIntroSection: FC = () => {
  const { t } = useTranslation();
  const {
    setValue,
    formState: { defaultValues },
  } = useFormContext<RecipeFormValues>();
  const [image, setImage] = useState(defaultValues?.image ?? '');

  const onEditImagePress = async (result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled && result.assets[0]) {
      const selectedImage = result.assets[0].uri;
      setValue('image', selectedImage);
      setImage(selectedImage);
    }
  };

  return (
    <View rowGap={32}>
      <View alignItems="center">
        <EditImageButton
          variant={EditImageButtonVariant.Full}
          sourceUri={image}
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
