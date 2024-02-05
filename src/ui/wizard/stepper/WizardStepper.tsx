import { FC } from 'react';
import { getTokens, Progress } from 'tamagui';

import { StepSeparator } from './StepSeparator';
import { MAX } from './stepper.constants';

export type WizardStepperProps = {
  stepLength: number;
  position: number;
};

export const WizardStepper: FC<WizardStepperProps> = ({ position, stepLength }) => {
  const step = Math.ceil(MAX / stepLength);
  const value = Math.ceil(position * step);
  const numberOfSeparators = Math.ceil(MAX / step) - 1;

  return (
    <>
      <Progress borderRadius={5} value={value} max={MAX}>
        <Progress.Indicator
          borderRadius={0}
          backgroundColor={getTokens().color.primaryLight.val}
          animation="medium"
        />
      </Progress>
      {Array.from({ length: numberOfSeparators }).map((_, i) => (
        <StepSeparator key={i + 1} step={step} index={i + 1} />
      ))}
    </>
  );
};
