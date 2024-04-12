import { FC, PropsWithChildren } from 'react';
import { View } from 'tamagui';

export const ContentContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View margin={16} flex={1}>
      {children}
    </View>
  );
};
