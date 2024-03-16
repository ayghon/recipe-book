import { useFonts } from 'expo-font';
import { FC, PropsWithChildren } from 'react';
import { Spinner, XStack } from 'tamagui';

export const FontsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return (
      <XStack flex={1} justifyContent="center" alignItems="center">
        <Spinner color="$primary" size="large" />
      </XStack>
    );
  }

  return children;
};
