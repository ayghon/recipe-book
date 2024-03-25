import { FC } from 'react';
import { ListItem } from 'tamagui';

import { SlideView } from './SlideView';
import { RecipeCardByStucture } from '../recipe.types';

export const RecipeCardSimplifiedList: FC<RecipeCardByStucture> = ({ onPress, title }) => {
  return (
    <SlideView>
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
    </SlideView>
  );
};
