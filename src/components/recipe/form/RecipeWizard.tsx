import { yupResolver } from '@hookform/resolvers/yup';
import { i18nKeys } from '@i18n';
import { useWizardStore } from '@providers';
import { useHeaderHeight } from '@react-navigation/elements';
import { Recipe } from '@types';
import { WizardHeader } from '@ui';
import { FC, ReactNode, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'tamagui';

import { RecipeIntroSection } from './components/RecipeIntroSection';
import { SummarySection } from './components/SummarySection';
import { WizardFooter } from './components/WizardFooter';
import { IngredientsSection } from './ingredients/IngredientsSection';
import { RecipeFormValues } from './recipe.types';
import { useRecipeFormValidationSchema } from './recipe.validation';
import { StepsSection } from './steps/StepsSection';

type RecipeWizardProps = {
  onSubmit: (values: RecipeFormValues) => void;
  data?: Recipe;
};

export const RecipeWizard: FC<RecipeWizardProps> = ({ onSubmit, data }) => {
  const { t } = useTranslation();
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
    shouldFocusError: false,
  });

  const { activeStepIndex, steps, initialise, reset, goToStep } = useWizardStore();

  useEffect(() => {
    initialise([
      { component: <RecipeIntroSection />, title: ' ' },
      {
        component: <IngredientsSection />,
        title: t(i18nKeys.components.recipe_form.ingredients_section.title),
      },
      {
        component: <StepsSection />,
        title: t(i18nKeys.components.recipe_form.steps_section.title),
      },
      {
        component: <SummarySection />,
        nextButtonTitle: data
          ? t(i18nKeys.components.recipe_form.button.modify)
          : t(i18nKeys.components.recipe_form.button.add),
        title: t(i18nKeys.components.recipe_form.summary_section.title),
      },
    ]);

    return () => {
      reset();
    };
  }, []);

  // redirect to step on error
  useEffect(() => {
    const { title, ingredients, steps } = methods.formState.errors;
    if (title) {
      goToStep(0);
    } else if (ingredients) {
      goToStep(1);
    } else if (steps) {
      goToStep(2);
    }
  }, [methods.formState.errors]);

  return (
    <FormProvider {...methods}>
      <WizardHeader
        title={steps[activeStepIndex]?.data?.title}
        position={activeStepIndex + 1}
        stepLength={steps.length}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.select({ android: headerHeight + 8, ios: headerHeight })}
        behavior={Platform.select({ android: 'height', ios: 'padding' })}
      >
        <ScrollView
          height="100%"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {steps[activeStepIndex]?.data?.component as ReactNode}
        </ScrollView>
        <WizardFooter onFinish={methods.handleSubmit(onSubmit)} />
      </KeyboardAvoidingView>
    </FormProvider>
  );
};
