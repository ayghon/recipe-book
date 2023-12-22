import { useInitI18n } from '@i18n';
import { StatusBar } from 'expo-status-bar';
import { FC, PropsWithChildren } from 'react';
import { TamaguiProvider } from 'tamagui';

import { FontsProvider } from './fonts.provider';
import config from '../../tamagui.config';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useInitI18n();

  if (isLoading) {
    // TODO show SplashScreen
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <FontsProvider>
        <StatusBar style="auto" />
        {children}
      </FontsProvider>
    </TamaguiProvider>
  );
};
