import { RecipeFormValues } from '@components';
import { i18nKeys } from '@i18n';
import { useWizardStore } from '@providers';
import { GradientButton, GradientButtonVariant } from '@ui';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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
    <XStack marginBottom={bottom} justifyContent="space-between" columnGap={32} marginTop={16}>
      {canGoBack ? (
        <GradientButton
          containerStyle={{ flex: 1 }}
          variant={GradientButtonVariant.Border}
          onPress={previousStep}
        >
          Previous
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
