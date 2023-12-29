import { i18nKeys } from '@i18n';
import { Step } from '@types';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph, Text, View } from 'tamagui';

type RecipeStepsProps = {
  steps: Step[];
};

export const RecipeSteps: FC<RecipeStepsProps> = ({ steps }) => {
  const { t } = useTranslation();

  return (
    <View rowGap="$4">
      <Text fontSize={16} fontWeight="800">
        {t(i18nKeys.components.recipe_form.steps_section.title)}
      </Text>
      <View rowGap="$4">
        {steps.map((step, index) => (
          <Paragraph key={step.explanation} fontSize={16}>
            {index + 1}.{'  '}
            {step.explanation}
          </Paragraph>
        ))}
      </View>
    </View>
  );
};
