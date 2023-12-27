import { MaterialIcons } from '@expo/vector-icons';
import { Routes } from '@types';
import { Link } from 'expo-router';
import { XStack } from 'tamagui';

export const RootStackHeaderRight = () => {
  return (
    <XStack marginEnd="$8" columnGap="$4">
      <Link asChild href={Routes.RecipeCreate}>
        <MaterialIcons name="add" size={24} />
      </Link>
      <Link asChild href={Routes.Settings}>
        <MaterialIcons name="more-vert" size={24} />
      </Link>
    </XStack>
  );
};
