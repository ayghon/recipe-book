import { RecipeFormValues } from '@components';
import { i18nKeys } from '@i18n';
import { useWizardStore } from '@providers';
import { GradientButton, GradientButtonVariant } from '@ui';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, XStack } from 'tamagui';

type WizardFooterProps = {
  onFinish: () => void;
};

export const WizardFooter: FC<WizardFooterProps> = ({ onFinish }) => {
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();
  const { canGoBack, isLastStep, nextStep, steps, activeStepIndex, previousStep } =
    useWizardStore();
  const {
    formState: { isDirty },
  } = useFormContext<RecipeFormValues>();

  if (steps.length === 0) {
    return null;
  }

  const defaultNextStepLabel = isLastStep
    ? t(i18nKeys.components.recipe_form.wizard.footer.button.finish)
    : t(i18nKeys.components.recipe_form.wizard.footer.button.next);
  const customNextStepLabel = steps[activeStepIndex]?.data?.nextButtonTitle;

  return (
    <XStack
      marginBottom={Platform.select({ android: bottom + 16, ios: bottom - 8 })}
      justifyContent="space-between"
      columnGap={32}
      marginTop={8}
    >
      {canGoBack ? (
        <GradientButton
          containerStyle={{ flex: 1 }}
          variant={GradientButtonVariant.Border}
          onPress={previousStep}
        >
          {t(i18nKeys.components.recipe_form.wizard.footer.button.previous)}
        </GradientButton>
      ) : (
        <View flex={1} />
      )}
      <GradientButton
        isDisabled={isLastStep && !isDirty}
        containerStyle={{ flex: 1 }}
        onPress={isLastStep ? onFinish : nextStep}
      >
        {customNextStepLabel ?? defaultNextStepLabel}
      </GradientButton>
    </XStack>
  );
};
