import { Routes } from '@types';
import { ContentContainer, RecipeCard } from '@ui';
import { getPath, recipesMocks } from '@utils';
import { Link, useRouter } from 'expo-router';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'tamagui';

export default function HomeScreen() {
  const { push } = useRouter();
  const { bottom } = useSafeAreaInsets();

  const onRecipePress = (id: string) => {
    push(getPath(Routes.RecipeView, { id }));
  };

  return (
    <ContentContainer>
      <Link href={getPath(Routes.RecipeEdit, { id: '456' })}>
        <Text>Edit Recipe 456</Text>
      </Link>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={recipesMocks}
        style={{
          height: '100%',
          marginBottom: bottom,
        }}
        keyExtractor={({ title }) => title}
        renderItem={({ item, index }) => (
          <RecipeCard
            onPress={() => onRecipePress(item.id)}
            title={item.title}
            image={item.image}
            marginTop={index !== 0 ? '$4' : undefined}
          />
        )}
      />
    </ContentContainer>
  );
}
