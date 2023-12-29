import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import { Pressable } from 'react-native';
import { Image, useTheme, View } from 'tamagui';

type EditImageButtonProps = {
  onPress: () => void;
  sourceUri?: string;
};

export const EditImageButton: FC<EditImageButtonProps> = ({ onPress, sourceUri }) => {
  const theme = useTheme();

  if (sourceUri) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({
          opacity: pressed ? 0.8 : undefined,
        })}
      >
        <Image height={100} width={100} resizeMode="cover" source={{ uri: sourceUri }} />
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.8 : undefined,
      })}
    >
      <View width={100} height={100} backgroundColor={theme.gray8.val} borderRadius={5}>
        <View alignItems="center" flex={1} justifyContent="center">
          <MaterialIcons name="edit" size={32} />
        </View>
      </View>
    </Pressable>
  );
};
