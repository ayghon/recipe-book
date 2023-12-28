import { ViewRecipeHeaderRight, RootStackHeaderRight } from '@components';
import { i18nKeys } from '@i18n';
import { AppProvider } from '@providers';
import { Routes } from '@types';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function RootLayout() {
  return (
    <AppProvider>
      <RootStack />
    </AppProvider>
  );
}

const RootStack = () => {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack.Screen
        name={Routes.Home}
        options={{
          headerRight: RootStackHeaderRight,
          title: t(i18nKeys.home.header.title),
        }}
      />
      <Stack.Screen
        name={Routes.Settings}
        options={{
          title: t(i18nKeys.settings.header.title),
        }}
      />
      <Stack.Screen
        name={Routes.RecipeCreate}
        options={{
          title: t(i18nKeys.recipe.create.header.title),
        }}
      />
      <Stack.Screen
        name={Routes.RecipeEdit}
        options={{
          title: t(i18nKeys.recipe.edit.header.title),
        }}
      />
      <Stack.Screen
        name={Routes.RecipeView}
        options={{
          headerRight: ViewRecipeHeaderRight,
          headerTitle: '',
          title: '',
        }}
      />
    </Stack>
  );
};
