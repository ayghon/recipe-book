import { FC } from 'react';
import { Image, Text, useWindowDimensions, View } from 'tamagui';

type RecipeHeaderProps = {
  title: string;
  image?: string;
};

export const RecipeHeader: FC<RecipeHeaderProps> = ({ image, title }) => {
  const { height } = useWindowDimensions();

  return (
    <View rowGap="$4">
      {image && <Image height={height / 5} source={{ uri: image }} />}
      <Text fontSize={18} textAlign="center" fontWeight="800">
        {title}
      </Text>
    </View>
  );
};
