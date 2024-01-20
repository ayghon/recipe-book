import { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, View } from 'tamagui';

type FormFooterProps = {
  onPress: () => void;
  label: string;
};

export const FormFooter: FC<FormFooterProps> = ({ onPress, label }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View marginTop={16} marginBottom={bottom}>
      <Button color="white" backgroundColor="$primary" onPress={onPress}>
        {label}
      </Button>
    </View>
  );
};
