import { FC, PropsWithChildren, ReactNode } from 'react';
import { View, YStack } from 'tamagui';

type ContentContainerProps = PropsWithChildren<{ header?: ReactNode }>;

export const ContentContainer: FC<ContentContainerProps> = ({ children, header }) => {
  if (header) {
    return (
      <YStack marginHorizontal={16} rowGap={16}>
        {header}
        {children}
      </YStack>
    );
  }

  return (
    <View margin={16} flex={1}>
      {children}
    </View>
  );
};
