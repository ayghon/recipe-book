import { MaterialIcons } from '@expo/vector-icons';
import { AnimatedScaleView } from '@ui';
import { Link } from 'expo-router';
import { FC } from 'react';
import { getTokens } from 'tamagui';

type BackButtonProps = {
  canGoBack: boolean;
  tintColor?: string;
};

export const BackButton: FC<BackButtonProps> = ({
  canGoBack,
  tintColor = getTokens().color.primary.val,
}) => {
  if (!canGoBack) {
    return null;
  }

  return (
    <AnimatedScaleView scale={-0.9} style={{ justifyContent: 'center' }}>
      <Link suppressHighlighting href="..">
        <MaterialIcons size={24} name="arrow-back-ios" color={tintColor} />
      </Link>
    </AnimatedScaleView>
  );
};
