import { Routes } from '@types';
import { ContentContainer } from '@ui';
import { getPath } from '@utils';
import { Link } from 'expo-router';
import { Text, View } from 'tamagui';

export default function HomeScreen() {
  return (
    <ContentContainer>
      <View alignItems="center" justifyContent="center">
        <Link href={getPath(Routes.RecipeView, { id: '123' })}>
          <Text>View Recipe 123</Text>
        </Link>
        <Link href={getPath(Routes.RecipeEdit, { id: '456' })}>
          <Text>Edit Recipe 456</Text>
        </Link>
      </View>
    </ContentContainer>
  );
}
