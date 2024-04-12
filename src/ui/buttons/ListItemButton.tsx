import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Text, useTheme, XStack } from 'tamagui';

import { PressableOpacity } from './PressableOpacity';

type ListItemButtonProps = {
  onPress: () => void;
  children: string;
  endLabel?: string;
};

export const ListItemButton: FC<ListItemButtonProps> = ({ onPress, children, endLabel }) => {
  const theme = useTheme();

  const sv = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: sv.value,
      },
    ],
  }));

  const handlePress = () => {
    sv.value = withRepeat(withTiming(sv.value + 5), 2, true);
    onPress();
  };

  return (
    <PressableOpacity onPress={handlePress}>
      <XStack
        borderRadius={5}
        paddingVertical={20}
        paddingHorizontal={16}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontWeight="800" fontSize={16}>
          {children}
        </Text>
        <XStack alignItems="center" columnGap={8}>
          <Text fontSize={14} color={theme.color9.val}>
            {endLabel}
          </Text>
          <Animated.View style={animatedStyle}>
            <MaterialIcons name="keyboard-arrow-right" size={24} />
          </Animated.View>
        </XStack>
      </XStack>
    </PressableOpacity>
  );
};
