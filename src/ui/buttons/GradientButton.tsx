import { FC, ReactNode } from 'react';
import { Pressable } from 'react-native';
import { getTokens, Text } from 'tamagui';

import { GradientContainer } from '../containers';

export enum GradientButtonVariant {
  Border = 'border',
  Primary = 'default',
}

type GradientButtonProps = {
  onPress: () => void;
  children: string | ReactNode;
  variant?: GradientButtonVariant;
};

export const GradientButton: FC<GradientButtonProps> = ({
  onPress,
  children,
  variant = GradientButtonVariant.Primary,
}) => {
  const pressedStyle =
    variant === GradientButtonVariant.Border ? defaultVariantStyle : defaultVariantPressedStyle;
  const regularStyle =
    variant === GradientButtonVariant.Primary ? defaultVariantStyle : borderVariantStyle;

  return (
    <GradientContainer style={{ borderRadius: 5 }}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? pressedStyle.backgroundColor : regularStyle.backgroundColor,
            borderRadius: 5,
            margin: 4,
          },
        ]}
      >
        {({ pressed }) => (
          <Text
            color={pressed ? pressedStyle.color : regularStyle.color}
            padding={12}
            textAlign="center"
            fontWeight="800"
            textTransform="uppercase"
          >
            {children}
          </Text>
        )}
      </Pressable>
    </GradientContainer>
  );
};

const borderVariantStyle = {
  backgroundColor: getTokens().color.background.val,
  color: getTokens().color.primary.val,
};
const defaultVariantStyle = {
  backgroundColor: 'transparent',
  color: getTokens().color.textDark.val,
};
const defaultVariantPressedStyle = {
  backgroundColor: getTokens().color.primary.val,
  color: getTokens().color.textDark.val,
};
