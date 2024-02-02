import { yupResolver } from '@hookform/resolvers/yup';
import { i18nKeys } from '@i18n';
import { useHeaderHeight } from '@react-navigation/elements';
import { Recipe } from '@types';
import { EditImageButton, TextField } from '@ui';
import * as ImagePicker from 'expo-image-picker';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView, View } from 'tamagui';

import { FormFooter } from './FormFooter';
import { IngredientsSection } from './ingredients/IngredientsSection';
import { useRecipeFormValidationSchema } from './recipe.validation';
import { StepsSection } from './steps/StepsSection';

export type RecipeFormValues = Omit<Recipe, 'id'>;

type RecipeFormProps = {
  data?: Recipe;
  onSubmit: (values: RecipeFormValues) => void;
};

export const RecipeForm: FC<RecipeFormProps> = ({ data, onSubmit }) => {
  const { t } = useTranslation();
  const [image, setImage] = useState(data?.image ?? '');
  const headerHeight = useHeaderHeight();
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

  const onEditImagePress = async (result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled && result.assets[0]) {
      const selectedImage = result.assets[0].uri;
      methods.setValue('image', selectedImage);
      setImage(selectedImage);
    }
  };

  return (
    <FormProvider {...methods}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={headerHeight + 16}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          height="100%"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View rowGap={16}>
            <View alignItems="center">
              <EditImageButton sourceUri={image} onPress={onEditImagePress} />
            </View>

            <TextField
              name="title"
              autoFocus
              isRequired
              placeholder={t(i18nKeys.components.recipe_form.input.placeholder)}
            />

            <View rowGap={32}>
              {/* INGREDIENTS SECTION */}
              <IngredientsSection />

              {/* STEPS SECTION */}
              <StepsSection />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <FormFooter
        onPress={methods.handleSubmit(onSubmit)}
        label={
          data
            ? t(i18nKeys.components.recipe_form.button.modify)
            : t(i18nKeys.components.recipe_form.button.add)
        }
      />
    </FormProvider>
  );
};
