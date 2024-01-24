import { MaterialIcons } from '@expo/vector-icons';
import { MediaTypeOptions, useCameraPermissions } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { FC } from 'react';
import { Pressable } from 'react-native';
import { useTheme, View } from 'tamagui';

import { Image } from '../content';

type EditImageButtonProps = {
  onPress: (result: ImagePicker.ImagePickerResult) => void;
  sourceUri?: string;
};

export const EditImageButton: FC<EditImageButtonProps> = ({ onPress, sourceUri }) => {
  const theme = useTheme();
  const [permission, requestPermission] = useCameraPermissions();

  const handlePress = async () => {
    // has not granted photo permission
    // can ask permission
    if (!permission?.granted && permission?.canAskAgain) {
      const { granted } = await requestPermission();

      // take photo
      if (granted) {
        const result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1, 1],
          mediaTypes: MediaTypeOptions.Images,
          quality: 1,
        });

        return onPress(result);
      }
    }

    if (permission?.granted) {
      // take photo
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        mediaTypes: MediaTypeOptions.Images,
        quality: 1,
      });

      return onPress(result);
    }

    // choose photo in media library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    onPress(result);
  };

  if (sourceUri) {
    return (
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => ({
          opacity: pressed ? 0.8 : undefined,
        })}
      >
        <Image rounded height={100} width={100} source={sourceUri} />
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={handlePress}
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
