import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { MediaTypeOptions, useCameraPermissions } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { FC } from 'react';
import { Button, getTokens, useTheme, useWindowDimensions, View } from 'tamagui';

import { PressableOpacity } from './PressableOpacity';
import { Image } from '../content';

export enum EditImageButtonVariant {
  Full = 'full',
  Minimal = 'minimal',
}

type EditImageButtonProps = {
  onPress: (result: ImagePicker.ImagePickerResult) => void;
  sourceUri?: string;
  variant?: EditImageButtonVariant;
};

export const EditImageButton: FC<EditImageButtonProps> = ({
  onPress,
  sourceUri,
  variant = EditImageButtonVariant.Full,
}) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
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

  const size =
    variant === EditImageButtonVariant.Full
      ? { height: 200, width: width - 32 }
      : { height: 100, width: 100 };
  const iconPosition =
    variant === EditImageButtonVariant.Full
      ? {
          bottom: 5,
          right: 5,
        }
      : {
          bottom: -5,
          right: -10,
        };

  if (sourceUri) {
    return (
      <PressableOpacity style={{ alignSelf: 'center' }} onPress={handlePress}>
        <View
          position="absolute"
          {...iconPosition}
          zIndex={2}
          backgroundColor={getTokens().color.primary.val}
          borderRadius={100}
          padding={8}
        >
          <MaterialIcons name="edit" size={24} color={getTokens().color.textDark.val} />
        </View>
        <Image rounded {...size} source={sourceUri} />
      </PressableOpacity>
    );
  }

  if (variant === EditImageButtonVariant.Minimal) {
    return (
      <Button bordered={2} size="$3" alignSelf="flex-start" onPress={handlePress}>
        Choose an image
        <MaterialCommunityIcons name="image-outline" size={24} />
      </Button>
    );
  }

  return (
    <PressableOpacity onPress={handlePress}>
      <View {...size} backgroundColor={theme.gray8.val} borderRadius={5}>
        <View alignItems="center" flex={1} justifyContent="center">
          <MaterialIcons name="edit" size={32} />
        </View>
      </View>
    </PressableOpacity>
  );
};
