import { FC } from 'react';
import { ListItem, useTheme } from 'tamagui';

import { SlideView } from './SlideView';
import { Image } from '../../../content/Image';
import { RecipeCardByStucture } from '../recipe.types';

export const RecipeCardList: FC<RecipeCardByStucture> = ({ image, title, onPress }) => {
  const theme = useTheme();

  return (
    <SlideView>
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
    </SlideView>
  );
};
