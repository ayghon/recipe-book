import { GradientButton } from '@ui';
import { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'tamagui';

type FormFooterProps = {
  onPress: () => void;
  label: string;
};

export const FormFooter: FC<FormFooterProps> = ({ onPress, label }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View marginTop={16} marginBottom={bottom}>
      <GradientButton onPress={onPress}>{label}</GradientButton>
    </View>
  );
};
