import { EmptyHomeMessage, HomeHeader } from '@components';
import { StructureType, useAppConfigStore, useRecipeStore } from '@providers';
import { Recipe, Routes } from '@types';
import { ContentContainer, RecipeCard } from '@ui';
import { getPath } from '@utils';
import { useRouter } from 'expo-router';
import { Dimensions, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HEADER_HEIGHT = 99;
const CONTENT_HEIGHT = Dimensions.get('window').height - HEADER_HEIGHT;

const itemHeightByStructureType: Record<StructureType, number> = {
  [StructureType.Card]: 200,
  [StructureType.List]: 55,
  [StructureType.SimplifiedList]: 47,
};

const getInitialNumToRenderByStructureType = (structureType: StructureType): number => {
  const itemHeight = itemHeightByStructureType[structureType];

  return Math.ceil(CONTENT_HEIGHT / itemHeight);
};

export default function HomeScreen() {
  const { push } = useRouter();
  const { bottom } = useSafeAreaInsets();
  const { recipes } = useRecipeStore();
  const { homeStructureType } = useAppConfigStore();

  const itemHeight = itemHeightByStructureType[homeStructureType];
  const initialNumToRender = getInitialNumToRenderByStructureType(homeStructureType);

  const onRecipePress = (id: string) => {
    push(getPath(Routes.RecipeView, { id }));
  };

  const handleItemLayout = (_: ArrayLike<Recipe> | null | undefined, index: number) => ({
    index,
    length: itemHeight,
    offset: itemHeight * index,
  });

  return (
    <>
      <HomeHeader />
      <ContentContainer>
        <FlatList
          getItemLayout={handleItemLayout}
          initialNumToRender={initialNumToRender}
          ListEmptyComponent={EmptyHomeMessage}
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
          renderItem={({ item }) => (
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
