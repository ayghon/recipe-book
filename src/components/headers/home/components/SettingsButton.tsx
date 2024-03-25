import { MaterialIcons } from '@expo/vector-icons';
import { Routes } from '@types';
import { Link } from 'expo-router';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { getTokens } from 'tamagui';

import { headerStyles } from '../../header.styles';

export const SettingsButton = () => {
  const rotateSharedValue = useSharedValue(0);
  const scaleSharedValue = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: rotateSharedValue.value + 'deg' }, { scale: scaleSharedValue.value }],
  }));

  const handleSettingsPress = () => {
    rotateSharedValue.value = withRepeat(withTiming(rotateSharedValue.value + 90), 2, true);
    scaleSharedValue.value = withRepeat(withTiming(scaleSharedValue.value - 0.2), 2, true);
  };

  return (
    <Animated.View onTouchStart={handleSettingsPress} style={animatedStyle}>
      <Link suppressHighlighting asChild href={Routes.Settings}>
        <MaterialIcons
          color={getTokens().color.textLight.val}
          style={headerStyles.icon}
          name="settings"
          size={24}
        />
      </Link>
    </Animated.View>
  );
};
