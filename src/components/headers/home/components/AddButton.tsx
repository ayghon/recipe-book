import { MaterialIcons } from '@expo/vector-icons';
import { Routes } from '@types';
import { AnimatedScaleView } from '@ui';
import { Link } from 'expo-router';
import { getTokens } from 'tamagui';

import { headerStyles } from '../../header.styles';

export const AddButton = () => {
  return (
    <AnimatedScaleView>
      <Link suppressHighlighting asChild href={Routes.RecipeCreate}>
        <MaterialIcons
          selectionColor="red"
          color={getTokens().color.textLight.val}
          style={headerStyles.icon}
          name="add"
          size={24}
        />
      </Link>
    </AnimatedScaleView>
  );
};
