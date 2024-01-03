import { RecipeForm, RecipeFormValues } from '@components';
import { useRecipeStore } from '@providers';
import { ContentContainer } from '@ui';
import { useRouter } from 'expo-router';

export default function CreateRecipeScreen() {
  const { add } = useRecipeStore();
  const { back } = useRouter();

  const onSubmit = (values: RecipeFormValues) => {
    add(values);
    back();
  };

  return (
    <ContentContainer>
      <RecipeForm onSubmit={onSubmit} />
    </ContentContainer>
  );
}
