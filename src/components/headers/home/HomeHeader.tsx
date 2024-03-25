import { StructureType, useAppConfigStore } from '@providers';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XStack } from 'tamagui';

import { AddButton } from './components/AddButton';
import { SettingsButton } from './components/SettingsButton';
import { SwitchStructureButton } from '../../home';

export const HomeHeader = () => {
  const { top } = useSafeAreaInsets();
  const { changeStructureType, homeStructureType } = useAppConfigStore();

  return (
    <XStack
      paddingHorizontal={16}
      columnGap={8}
      paddingTop={Platform.select({ android: top + 12, ios: top })}
    >
      <XStack flex={1}>
        <SwitchStructureButton
          onChange={(value) => changeStructureType(value as StructureType)}
          value={homeStructureType}
        />
      </XStack>
      <XStack flex={1} justifyContent="flex-end">
        <AddButton />
        <SettingsButton />
      </XStack>
    </XStack>
  );
};
