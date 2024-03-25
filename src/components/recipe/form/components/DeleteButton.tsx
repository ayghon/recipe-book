import { MaterialIcons } from '@expo/vector-icons';
import { AnimatedScaleView } from '@ui';
import { FC } from 'react';
import { useTheme } from 'tamagui';

type DeleteButtonProps = {
  onPress: () => void;
};

export const DeleteButton: FC<DeleteButtonProps> = ({ onPress }) => {
  const theme = useTheme();

  return (
    <AnimatedScaleView style={{ alignSelf: 'center' }}>
      <MaterialIcons
        name="delete"
        suppressHighlighting
        size={24}
        color={theme.red9.val}
        onPress={onPress}
      />
    </AnimatedScaleView>
  );
};
