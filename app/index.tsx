import { HomeHeader } from '@components';
import { useAppConfigStore, useRecipeStore } from '@providers';
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
  const { homeStructureType } = useAppConfigStore();

  const onRecipePress = (id: string) => {
    push(getPath(Routes.RecipeView, { id }));
  };

  return (
    <>
      <HomeHeader />
      <ContentContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={recipes}
          style={{
            height: '100%',
            marginBottom: bottom,
          }}
          keyExtractor={({ id }) => id}
          contentContainerStyle={{
            gap: 12,
          }}
          renderItem={({ item, index }) => (
            <RecipeCard
              type={homeStructureType}
              onPress={() => onRecipePress(item.id)}
              title={item.title}
              image={item.image}
            />
          )}
        />
      </ContentContainer>
    </>
  );
}
