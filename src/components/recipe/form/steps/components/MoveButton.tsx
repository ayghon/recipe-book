import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'tamagui';

type MoveButtonProps = {
  onPress: () => void;
  direction: 'upward' | 'downward';
};

export const MoveButton: FC<MoveButtonProps> = ({ onPress, direction }) => {
  const theme = useTheme();

  const sv = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: sv.value }],
  }));

  const handlePress = () => {
    sv.value = withRepeat(withTiming(sv.value + (direction === 'downward' ? 8 : -8)), 2, true);
    onPress();
  };

  return (
    <Animated.View style={animatedStyle}>
      <MaterialIcons
        suppressHighlighting
        name={`arrow-${direction}`}
        size={24}
        color={theme.gray9.val}
        onPress={handlePress}
      />
    </Animated.View>
  );
};
