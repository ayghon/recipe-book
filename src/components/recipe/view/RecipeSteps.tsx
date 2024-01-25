import { i18nKeys } from '@i18n';
import { Step } from '@types';
import { Image } from '@ui';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph, Text, useWindowDimensions, View } from 'tamagui';

type RecipeStepsProps = {
  steps: Step[];
};

export const RecipeSteps: FC<RecipeStepsProps> = ({ steps }) => {
  const { t } = useTranslation();
  const { height, width } = useWindowDimensions();

  return (
    <View rowGap={16}>
      <Text fontSize={16} fontWeight="800">
        {t(i18nKeys.components.recipe_form.steps_section.title)}
      </Text>
      <View rowGap={16}>
        {steps.map((step, index) => (
          <View key={step.explanation} rowGap={16}>
            <Paragraph fontSize={16}>
              {index + 1}.{'  '}
              {step.explanation}
            </Paragraph>
            {step.image && (
              <View alignSelf="center">
                <Image rounded height={height / 5} width={width} source={step.image} />
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};
