import { yupResolver } from '@hookform/resolvers/yup';
import { i18nKeys } from '@i18n';
import { Recipe } from '@types';
import { EditImageButton, TextField } from '@ui';
import * as ImagePicker from 'expo-image-picker';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ScrollView, View, YStack } from 'tamagui';

import { RecipeIngredientSectionSection } from './RecipeIngredientSectionSection';
import { RecipeStepsSection } from './RecipeStepsSection';
import { useRecipeFormValidationSchema } from './recipe.validation';

export type RecipeFormValues = Omit<Recipe, 'id'>;

type RecipeFormProps = {
  data?: Recipe;
  onSubmit: (values: RecipeFormValues) => void;
};

export const RecipeForm: FC<RecipeFormProps> = ({ data, onSubmit }) => {
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();
  const [image, setImage] = useState(data?.image ?? '');

  const validationSchema = useRecipeFormValidationSchema();
  const methods = useForm<RecipeFormValues>({
    criteriaMode: 'all',
    defaultValues: {
      image: data?.image ?? '',
      ingredients: data?.ingredients ?? [],
      steps: data?.steps ?? [],
      title: data?.title ?? '',
    },
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver<RecipeFormValues>(validationSchema),
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
      <ScrollView
        height="100%"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <YStack rowGap="$4">
          <YStack alignItems="center">
            <EditImageButton sourceUri={image} onPress={onEditImagePress} />
          </YStack>

          <TextField
            name="title"
            isRequired
            placeholder={t(i18nKeys.components.recipe_form.input.placeholder)}
          />

          <View rowGap="$8">
            {/* INGREDIENTS SECTION */}
            <RecipeIngredientSectionSection />

            {/* STEPS SECTION */}
            <RecipeStepsSection />
          </View>
        </YStack>
        <Button
          marginTop="$8"
          marginBottom={bottom}
          bordered={2}
          color="white"
          backgroundColor="$primary"
          onPress={methods.handleSubmit(onSubmit)}
        >
          {data
            ? t(i18nKeys.components.recipe_form.button.modify)
            : t(i18nKeys.components.recipe_form.button.add)}
        </Button>
      </ScrollView>
    </FormProvider>
  );
};
