import { MaterialIcons } from '@expo/vector-icons';
import { StructureType, useAppConfigStore } from '@providers';
import { Routes } from '@types';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTokens, XStack } from 'tamagui';

import { headerStyles } from './header.styles';
import { SwitchStructureButton } from '../home';

export const HomeHeader = () => {
  const { top } = useSafeAreaInsets();
  const { changeStructureType, homeStructureType } = useAppConfigStore();

  return (
    <XStack paddingHorizontal={16} columnGap={8} paddingTop={top}>
      <XStack flex={1}>
        <SwitchStructureButton
          onChange={(value) => changeStructureType(value as StructureType)}
          value={homeStructureType}
        />
      </XStack>
      <XStack flex={1} justifyContent="flex-end">
        <Link asChild href={Routes.RecipeCreate}>
          <MaterialIcons
            color={getTokens().color.textLight.val}
            style={headerStyles.icon}
            name="add"
            size={24}
          />
        </Link>
        <Link asChild href={Routes.Settings}>
          <MaterialIcons
            color={getTokens().color.textLight.val}
            style={headerStyles.icon}
            name="settings"
            size={24}
          />
        </Link>
      </XStack>
    </XStack>
  );
};
