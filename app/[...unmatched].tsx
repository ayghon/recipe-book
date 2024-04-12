import { i18nKeys } from '@i18n';
import { AppProvider } from '@providers';
import { ContentContainer } from '@ui';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'tamagui';

type UnmatchedSearchParams = {
  unmatched: string[];
};

export default function Unmatched() {
  const { t } = useTranslation();
  const { unmatched = [] } = useLocalSearchParams<UnmatchedSearchParams>();
  const unmatchedPath = unmatched.length ? `/${unmatched.join('/')}` : undefined;

  useEffect(() => {
    console.warn(`Path ${unmatchedPath} does not exist`);
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerTitle: '' }} />
      <AppProvider>
        <ContentContainer>
          <View alignItems="center" justifyContent="center" flex={0.75}>
            <Text fontSize={18}>{t(i18nKeys.unmatched.title.no_path)}</Text>
          </View>
        </ContentContainer>
      </AppProvider>
    </>
  );
}
