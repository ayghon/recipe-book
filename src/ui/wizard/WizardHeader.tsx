import { FC } from 'react';
import { Text, View } from 'tamagui';

import { WizardStepper, WizardStepperProps } from './stepper';

type WizardHeaderProps = WizardStepperProps & {
  title?: string;
};

export const WizardHeader: FC<WizardHeaderProps> = ({ title, stepLength, position }) => {
  return (
    <View rowGap={16}>
      <WizardStepper stepLength={stepLength} position={position} />
      <Text alignSelf="center" fontSize={20} fontWeight="800" marginBottom={16}>
        {title}
      </Text>
    </View>
  );
};
