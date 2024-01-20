import { FC, PropsWithChildren, ReactNode } from 'react';
import { View, YStack } from 'tamagui';

type ContentContainerProps = PropsWithChildren<{ header?: ReactNode }>;

export const ContentContainer: FC<ContentContainerProps> = ({ children, header }) => {
  if (header) {
    return (
      <YStack marginHorizontal="$4" rowGap="$4">
        {header}
        {children}
      </YStack>
    );
  }

  return (
    <View margin="$4" flex={1}>
      {children}
    </View>
  );
};
