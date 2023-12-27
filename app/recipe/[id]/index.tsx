import { Routes, SearchParamList } from '@types';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'tamagui';

export default function ViewRecipeScreen() {
  const { id } = useLocalSearchParams<SearchParamList<Routes.RecipeView>>();
  const { setOptions } = useNavigation();

  useEffect(() => {
    const recipeTitle = `View ${id}`;

    setOptions({
      headerTitle: recipeTitle,
    });
  }, [id]);

  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text>View {id}</Text>
    </View>
  );
}
