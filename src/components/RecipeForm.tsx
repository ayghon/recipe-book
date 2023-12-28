import { i18nKeys } from '@i18n';
import { Recipe } from '@types';
import { EditImageButton, TextField } from '@ui';
import * as ImagePicker from 'expo-image-picker';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, YStack } from 'tamagui';

export type RecipeFormValues = {
  title: string;
  image?: string;
};

type RecipeFormProps = {
  data?: Recipe;
  onSubmit: (values: RecipeFormValues) => void;
};

export const RecipeForm: FC<RecipeFormProps> = ({ data, onSubmit }) => {
  const { t } = useTranslation();
  const [image, setImage] = useState(data?.image ?? '');

  const methods = useForm<RecipeFormValues>({
    defaultValues: {
      image: data?.image ?? '',
      title: data?.title ?? '',
    },
  });

  const onEditImagePress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      const selectedImage = result.assets[0].uri;
      methods.setValue('image', selectedImage);
      setImage(selectedImage);
    }
  };

  return (
    <FormProvider {...methods}>
      <YStack rowGap="$4">
        <YStack alignItems="center">
          <EditImageButton sourceUri={image} onPress={onEditImagePress} />
        </YStack>
        <TextField
          name="title"
          isRequired
          placeholder={t(i18nKeys.components.recipe_form.input.placeholder)}
        />
        <Button onPress={methods.handleSubmit(onSubmit)}>
          {data
            ? t(i18nKeys.components.recipe_form.button.modify)
            : t(i18nKeys.components.recipe_form.button.add)}
        </Button>
      </YStack>
    </FormProvider>
  );
};
