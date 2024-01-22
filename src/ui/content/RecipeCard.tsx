import { FC } from 'react';
import { Card, CardProps, Text, useTheme, View } from 'tamagui';

import { Image } from './Image';

type RecipeCardProps = { image?: string; title: string; onPress: () => void } & CardProps;

export const RecipeCard: FC<RecipeCardProps> = ({ image, title, onPress, ...rest }) => {
  const theme = useTheme();

  return (
    <Card
      onPress={onPress}
      elevate
      size="$4"
      bordered
      width="100%"
      height={200}
      borderRadius="$2"
      {...rest}
    >
      <Card.Background>
        {image ? (
          <View width="100%" alignSelf="center">
            <Image
              backgroundColor={theme.color8.val}
              width="100%"
              height={300}
              rounded
              source={image}
            />
          </View>
        ) : (
          <View height={300} width="100%" borderRadius="$2" backgroundColor={theme.color8.val} />
        )}
      </Card.Background>
      <Card.Footer backgroundColor={theme.background?.val}>
        <Text padding="$4">{title}</Text>
      </Card.Footer>
    </Card>
  );
};
