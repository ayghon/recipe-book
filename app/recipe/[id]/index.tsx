import { RecipeView } from '@components';
import { useRecipeStore } from '@providers';
import { Routes, SearchParamList } from '@types';
import { ContentContainer } from '@ui';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'tamagui';

export default function ViewRecipeScreen() {
  const { back, canGoBack } = useRouter();
  const { bottom } = useSafeAreaInsets();
  const { id } = useLocalSearchParams<SearchParamList<Routes.RecipeView>>();
  const { getById } = useRecipeStore();

  if (!id && canGoBack()) {
    back();
    return null;
  }

  const recipe = getById(id ?? '');

  if (!recipe && canGoBack()) {
    back();
    return null;
  }

  const { image = '', ingredients = [], title = '', steps = [] } = recipe ?? {};

  return (
    <ContentContainer>
      <ScrollView
        marginBottom={bottom}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <RecipeView title={title} ingredients={ingredients} steps={steps} image={image} />
      </ScrollView>
    </ContentContainer>
  );
}
