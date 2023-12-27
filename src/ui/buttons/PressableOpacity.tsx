import { FC } from 'react';
import { Pressable, PressableProps, ViewProps } from 'react-native';

type PressableOpacityProps = Omit<PressableProps, 'style'> & { style?: ViewProps['style'] };

export const PressableOpacity: FC<PressableOpacityProps> = ({ style, children, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : undefined,
        },
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};
