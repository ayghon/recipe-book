import { useInitI18n } from '@i18n';
import { DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { FC, PropsWithChildren, useEffect } from 'react';
import { getTokens, TamaguiProvider } from 'tamagui';

import config from '../../tamagui.config';

SplashScreen.preventAutoHideAsync();

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: getTokens().color.background.val,
    border: getTokens().color.border.val,
    card: getTokens().color.card.val,
    primary: getTokens().color.primary.val,
    text: getTokens().color.textDark.val,
  },
};

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  const { isLoading } = useInitI18n();

  useEffect(() => {
    if (!isLoading && loaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoading, loaded]);

  if (isLoading || !loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <ThemeProvider value={theme}>
        <StatusBar style="dark" />
        {children}
      </ThemeProvider>
    </TamaguiProvider>
  );
};
