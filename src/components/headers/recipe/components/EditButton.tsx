import { MaterialIcons } from '@expo/vector-icons';
import { Routes, SearchParamList } from '@types';
import { AnimatedScaleView } from '@ui';
import { getPath } from '@utils';
import { Link, useLocalSearchParams } from 'expo-router';
import { getTokens } from 'tamagui';

import { headerStyles } from '../../header.styles';

export const EditButton = () => {
  const { id } = useLocalSearchParams<SearchParamList<Routes.RecipeView>>();

  if (!id) {
    return null;
  }

  return (
    <AnimatedScaleView>
      <Link suppressHighlighting asChild href={getPath(Routes.RecipeEdit, { id })}>
        <MaterialIcons
          color={getTokens().color.textLight.val}
          style={headerStyles.icon}
          name="edit"
          size={24}
        />
      </Link>
    </AnimatedScaleView>
  );
};
