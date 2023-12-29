import { useRecipeStore } from '@providers';
import { Routes, SearchParamList } from '@types';
import { ContentContainer } from '@ui';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Paragraph, ScrollView, Text, View, XStack, YStack } from 'tamagui';

export default function ViewRecipeScreen() {
  const { back, canGoBack } = useRouter();
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
      <ScrollView>
        <YStack rowGap="$4">
          <Text>{title}</Text>
          {image && <Image source={{ height: 80, uri: image, width: 80 }} />}
          <Text fontSize={16}>Ingredients:</Text>
          {ingredients.map((ingredient, index) => (
            <YStack key={ingredient.title ?? index}>
              <Text>{ingredient.title}</Text>
              {ingredient.items.map((item) => (
                <View key={item.name} rowGap="$2">
                  <XStack columnGap="$4">
                    <Text>
                      {!item.countEnd ? item.countStart : `${item.countStart}-${item.countEnd}`}
                    </Text>
                    <Text>{item.measureUnit}</Text>
                    <Text>{item.name}</Text>
                  </XStack>
                  <Text>Optional: {item.isOptional ? 'yes' : 'no'}</Text>
                  <Paragraph>{item.comment}</Paragraph>
                </View>
              ))}
            </YStack>
          ))}
          {steps.map((step, index) => (
            <XStack key={step.explanation} columnGap="$4">
              <Text>{index + 1}.</Text>
              <Text>{step.explanation}</Text>
            </XStack>
          ))}
        </YStack>
      </ScrollView>
    </ContentContainer>
  );
}
