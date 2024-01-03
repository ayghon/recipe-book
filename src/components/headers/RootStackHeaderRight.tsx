import { MaterialIcons } from '@expo/vector-icons';
import { Routes } from '@types';
import { Link } from 'expo-router';
import { XStack } from 'tamagui';

import { headerStyles } from './header.styles';

export const RootStackHeaderRight = () => {
  return (
    <XStack columnGap="$2" marginEnd="$2">
      <Link asChild href={Routes.RecipeCreate}>
        <MaterialIcons style={headerStyles.icon} name="add" size={24} />
      </Link>
      <Link asChild href={Routes.Settings}>
        <MaterialIcons style={headerStyles.icon} name="settings" size={24} />
      </Link>
    </XStack>
  );
};
