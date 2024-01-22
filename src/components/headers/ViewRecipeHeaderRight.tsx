import { MaterialIcons } from '@expo/vector-icons';
import { i18nKeys } from '@i18n';
import { useRecipeStore } from '@providers';
import { Routes, SearchParamList } from '@types';
import { getPath } from '@utils';
import { Link, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { getTokens, XStack } from 'tamagui';

import { headerStyles } from './header.styles';

export const ViewRecipeHeaderRight = () => {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<SearchParamList<Routes.RecipeView>>();
  const { remove } = useRecipeStore();

  if (!id) {
    return null;
  }

  const onDeletePress = () => {
    Alert.alert(
      t(i18nKeys.recipe.view.alert.delete.title),
      t(i18nKeys.recipe.view.alert.delete.description),
      [
        {
          style: 'cancel',
          text: t(i18nKeys.common.no),
        },
        {
          onPress: () => {
            remove(id);
          },
          style: 'destructive',
          text: t(i18nKeys.common.yes),
        },
      ],
    );
  };

  return (
    <XStack columnGap={4}>
      <Link asChild href={getPath(Routes.RecipeEdit, { id })}>
        <MaterialIcons
          color={getTokens().color.textDark.val}
          style={headerStyles.icon}
          name="edit"
          size={24}
        />
      </Link>
      <MaterialIcons
        color={getTokens().color.textDark.val}
        style={headerStyles.icon}
        onPress={onDeletePress}
        name="delete"
        size={24}
      />
    </XStack>
  );
};
