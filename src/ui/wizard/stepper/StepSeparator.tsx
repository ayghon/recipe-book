import { FC } from 'react';
import { getTokens, useWindowDimensions, View } from 'tamagui';

import { MAX } from './stepper.constants';

type StepSeparatorProps = {
  index: number;
  step: number;
};

export const StepSeparator: FC<StepSeparatorProps> = ({ index, step }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      position="absolute"
      top={0}
      marginStart={((width - 32) / (MAX / step)) * index - 4}
      backgroundColor={getTokens().color.background.val}
      width={8}
      height={11}
    />
  );
};
