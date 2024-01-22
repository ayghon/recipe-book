import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import { Text, useTheme, XStack } from 'tamagui';

import { PressableOpacity } from './PressableOpacity';

type ListItemButtonProps = {
  onPress: () => void;
  children: string;
  endLabel?: string;
};

export const ListItemButton: FC<ListItemButtonProps> = ({ onPress, children, endLabel }) => {
  const theme = useTheme();

  return (
    <PressableOpacity onPress={onPress}>
      <XStack
        borderRadius={5}
        paddingVertical="$4.5"
        paddingHorizontal="$3.5"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontWeight="800" fontSize={16}>
          {children}
        </Text>
        <XStack alignItems="center" columnGap="$2">
          <Text fontSize={14} color={theme.color9.val}>
            {endLabel}
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} />
        </XStack>
      </XStack>
    </PressableOpacity>
  );
};
