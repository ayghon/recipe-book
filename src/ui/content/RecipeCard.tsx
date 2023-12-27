import { FC } from 'react';
import { Card, CardProps, Image, Text, useTheme } from 'tamagui';

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
        <Image
          backgroundColor={theme.color8.val}
          width="100%"
          height={300}
          borderRadius="$2"
          source={{
            uri: image,
          }}
          alignSelf="center"
          resizeMode="cover"
        />
      </Card.Background>
      <Card.Footer backgroundColor={theme.background?.val}>
        <Text padding="$4">{title}</Text>
      </Card.Footer>
    </Card>
  );
};
