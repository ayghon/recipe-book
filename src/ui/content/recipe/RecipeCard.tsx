import { StructureType } from '@providers';
import { FC } from 'react';
import Animated from 'react-native-reanimated';

import { RecipeCardCard } from './components/RecipeCardCard';
import { RecipeCardList } from './components/RecipeCardList';
import { RecipeCardSimplifiedList } from './components/RecipeCardSimplifiedList';
import { RecipeCardProps } from './recipe.types';
import { useScaleAnimation } from '../../animations';

export const RecipeCard: FC<RecipeCardProps> = ({
  image,
  type = StructureType.Card,
  title,
  onPress,
}) => {
  const { animatedStyle, startAnimation } = useScaleAnimation(-0.2);

  const handlePress = () => {
    startAnimation();
    onPress();
  };

  switch (type) {
    case StructureType.SimplifiedList:
      return (
        <Animated.View style={animatedStyle}>
          <RecipeCardSimplifiedList title={title} onPress={handlePress} />
        </Animated.View>
      );
    case StructureType.List:
      return (
        <Animated.View style={animatedStyle}>
          <RecipeCardList title={title} onPress={handlePress} image={image} />
        </Animated.View>
      );
    case StructureType.Card:
    default:
      return (
        <Animated.View style={animatedStyle}>
          <RecipeCardCard onPress={handlePress} title={title} image={image} />
        </Animated.View>
      );
  }
};
