import { Image } from '@ui';
import { FC } from 'react';
import { Text, useWindowDimensions, View } from 'tamagui';

type RecipeHeaderProps = {
  title: string;
  image?: string;
};

export const RecipeHeader: FC<RecipeHeaderProps> = ({ image, title }) => {
  const { height } = useWindowDimensions();

  return (
    <View rowGap={16}>
      {image && <Image rounded width="auto" height={height / 5} source={image} />}
      <Text fontSize={18} textAlign="center" fontWeight="800">
        {title}
      </Text>
    </View>
  );
};
