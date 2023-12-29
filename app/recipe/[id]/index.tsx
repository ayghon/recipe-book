import { RecipeHeader, RecipeIngredients, RecipeSteps } from '@components';
import { useRecipeStore } from '@providers';
import { Routes, SearchParamList } from '@types';
import { ContentContainer } from '@ui';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, Separator, useTheme, View } from 'tamagui';

export default function ViewRecipeScreen() {
  const { back, canGoBack } = useRouter();
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();
  const { id } = useLocalSearchParams<SearchParamList<Routes.RecipeView>>();
  const { getById } = useRecipeStore();

  if (!id && canGoBack()) {
    return back();
  }

  const recipe = getById(id ?? '');

  if (!recipe && canGoBack()) {
    return back();
  }

  const { image = '', ingredients = [], title = '', steps = [] } = recipe ?? {};

  return (
    <ContentContainer>
      <ScrollView
        marginBottom={bottom}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View rowGap="$4">
          {/* HEADER */}
          <RecipeHeader title={title} image={image} />

          <Separator borderColor={theme.gray8.val} />

          {/* INGREDIENTS */}
          <RecipeIngredients ingredients={ingredients} />

          <Separator borderColor={theme.gray8.val} />

          {/* STEPS */}
          <RecipeSteps steps={steps} />
        </View>
      </ScrollView>
    </ContentContainer>
  );
}
