import { FC, PropsWithChildren } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  StyleProps,
} from 'react-native-reanimated';

type AnimatedScaleViewProps = PropsWithChildren<{
  scale?: number;
  style?: StyleProps;
}>;

export const useScaleAnimation = (scale = -0.5) => {
  const sharedValue = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: sharedValue.value }],
  }));

  const startAnimation = () => {
    sharedValue.value = withRepeat(withTiming(sharedValue.value + scale), 2, true);
  };

  return { animatedStyle, startAnimation };
};

export const AnimatedScaleView: FC<AnimatedScaleViewProps> = ({
  style,
  children,
  scale = -0.5,
}) => {
  const { animatedStyle, startAnimation } = useScaleAnimation(scale);

  return (
    <Animated.View onTouchStart={startAnimation} style={[animatedStyle, style]}>
      {children}
    </Animated.View>
  );
};
