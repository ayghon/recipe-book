import { Step } from '@types';
import { FC } from 'react';
import { Image, Text, XStack, YStack } from 'tamagui';

export const StepItem: FC<Step & { index: number }> = ({ index, explanation, image }) => {
  return (
    <YStack rowGap="$2" width="100%">
      <XStack columnGap="$2">
        <Text fontSize={16}>{index + 1}.</Text>
        <Text fontSize={16}>{explanation}</Text>
      </XStack>
      {image && <Image alignSelf="center" source={{ uri: image }} height={100} width={100} />}
    </YStack>
  );
};
