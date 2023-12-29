import { useInitI18n } from '@i18n';
import { DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FC, PropsWithChildren } from 'react';
import { getTokens, TamaguiProvider } from 'tamagui';

import { FontsProvider } from './fonts.provider';
import config from '../../tamagui.config';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: getTokens().color.primary.val,
  },
};

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useInitI18n();

  if (isLoading) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <FontsProvider>
        <ThemeProvider value={theme}>
          <StatusBar style="auto" />
          {children}
        </ThemeProvider>
      </FontsProvider>
    </TamaguiProvider>
  );
};
