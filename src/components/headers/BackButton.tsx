import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { FC } from 'react';
import { getTokens, View } from 'tamagui';

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
    <View justifyContent="center">
      <Link href="..">
        <MaterialIcons size={24} name="arrow-back-ios" color={tintColor} />
      </Link>
    </View>
  );
};
