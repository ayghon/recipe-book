import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { FC } from 'react';
import { getTokens } from 'tamagui';

export enum GradientVariant {
  Primary = 'primary',
}

type GradientContainerProps = Omit<LinearGradientProps, 'colors'> & {
  variant?: GradientVariant;
};

export const GradientContainer: FC<GradientContainerProps> = ({
  variant = GradientVariant.Primary,
  ...props
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={colorsByVariant[variant]}
      {...props}
    />
  );
};

const primaryColors = [
  getTokens().color.primaryLight.val,
  getTokens().color.primary.val,
  getTokens().color.primaryDark.val,
];

const colorsByVariant: Record<GradientVariant, string[]> = {
  [GradientVariant.Primary]: primaryColors,
};
