import { MaterialIcons } from '@expo/vector-icons';
import { Routes, SearchParamList } from '@types';
import { getPath } from '@utils';
import { Link, useLocalSearchParams } from 'expo-router';

export const ViewRecipeHeaderRight = () => {
  const { id } = useLocalSearchParams<SearchParamList<Routes.RecipeView>>();

  if (!id) {
    return null;
  }

  return (
    <Link asChild href={getPath(Routes.RecipeEdit, { id })}>
      <MaterialIcons name="edit" size={24} />
    </Link>
  );
};
