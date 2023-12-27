import { Routes, SearchParamList } from '@types';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'tamagui';

export default function EditRecipeScreen() {
  const { id } = useLocalSearchParams<SearchParamList<Routes.RecipeEdit>>();

  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text>Edit {id}</Text>
    </View>
  );
}
