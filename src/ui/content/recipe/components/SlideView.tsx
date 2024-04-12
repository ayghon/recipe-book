import { FC, PropsWithChildren } from 'react';
import Animated, { FadeInUp } from 'react-native-reanimated';

export const SlideView: FC<PropsWithChildren> = ({ children }) => {
  return <Animated.View entering={FadeInUp}>{children}</Animated.View>;
};
