import { StructureType } from '@providers';
import { FC } from 'react';
import { Card, ListItem, Text, useTheme, View } from 'tamagui';

import { Image } from './Image';

type RecipeCardProps = {
  image?: string;
  title: string;
  onPress: () => void;
  type?: StructureType;
};

export const RecipeCard: FC<RecipeCardProps> = ({
  image,
  type = StructureType.Card,
  title,
  onPress,
}) => {
  const theme = useTheme();

  if (type === StructureType.SimplifiedList) {
    return (
      <ListItem
        elevate
        padding={0}
        hoverTheme
        pressTheme
        onPress={onPress}
        borderRadius={5}
        paddingStart={16}
      >
        <ListItem.Text paddingVertical={12} paddingHorizontal={8}>
          {title}
        </ListItem.Text>
      </ListItem>
    );
  }

  if (type === StructureType.List) {
    return (
      <ListItem
        elevate
        padding={0}
        hoverTheme
        pressTheme
        onPress={onPress}
        borderRadius={5}
        icon={<Image backgroundColor={theme.color8.val} width={60} height="100%" source={image} />}
      >
        <ListItem.Text paddingVertical={16} paddingHorizontal={8}>
          {title}
        </ListItem.Text>
      </ListItem>
    );
  }

  return (
    <Card onPress={onPress} elevate height={200} borderRadius={5}>
      <Card.Background>
        <View width="100%" alignSelf="center">
          <Image
            backgroundColor={theme.color8.val}
            width="100%"
            height={300}
            rounded
            source={image}
          />
        </View>
      </Card.Background>
      <Card.Footer backgroundColor={theme.background?.val}>
        <Text padding={16}>{title}</Text>
      </Card.Footer>
    </Card>
  );
};
