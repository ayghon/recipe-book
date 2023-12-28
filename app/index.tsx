import { useRecipeStore } from '@providers';
import { Routes } from '@types';
import { ContentContainer, RecipeCard } from '@ui';
import { getPath } from '@utils';
import { useRouter } from 'expo-router';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { push } = useRouter();
  const { bottom } = useSafeAreaInsets();
  const { recipes } = useRecipeStore();

  const onRecipePress = (id: string) => {
    push(getPath(Routes.RecipeView, { id }));
  };

  return (
    <ContentContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={recipes}
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
