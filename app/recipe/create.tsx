import { RecipeFormValues, RecipeWizard } from '@components';
import { useRecipeStore } from '@providers';
import { ContentContainer } from '@ui';
import { useGoBackOrGoHome } from '@utils';

export default function CreateRecipeScreen() {
  const { add } = useRecipeStore();
  const backOrGoHome = useGoBackOrGoHome();

  const onSubmit = (values: RecipeFormValues) => {
    add(values);
    backOrGoHome();
  };

  return (
    <ContentContainer>
      <RecipeWizard onSubmit={onSubmit} />
    </ContentContainer>
  );
}
