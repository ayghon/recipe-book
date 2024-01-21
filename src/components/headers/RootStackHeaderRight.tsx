import { MaterialIcons } from '@expo/vector-icons';
import { Routes } from '@types';
import { Link } from 'expo-router';
import { getTokens, XStack } from 'tamagui';

import { headerStyles } from './header.styles';

export const RootStackHeaderRight = () => {
  return (
    <XStack columnGap="$2">
      <Link asChild href={Routes.RecipeCreate}>
        <MaterialIcons
          color={getTokens().color.textDark.val}
          style={headerStyles.icon}
          name="add"
          size={24}
        />
      </Link>
      <Link asChild href={Routes.Settings}>
        <MaterialIcons
          color={getTokens().color.textDark.val}
          style={headerStyles.icon}
          name="settings"
          size={24}
        />
      </Link>
    </XStack>
  );
};
