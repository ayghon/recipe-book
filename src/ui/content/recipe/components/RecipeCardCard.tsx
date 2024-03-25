import { FC } from 'react';
import { Card, Text, useTheme, View } from 'tamagui';

import { SlideView } from './SlideView';
import { Image } from '../../../content/Image';
import { RecipeCardByStucture } from '../recipe.types';

export const RecipeCardCard: FC<RecipeCardByStucture> = ({ image, title, onPress }) => {
  const theme = useTheme();

  return (
    <SlideView>
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
    </SlideView>
  );
};
