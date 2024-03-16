import { RecipeFormValues, RecipeWizard } from '@components';
import { i18nKeys } from '@i18n';
import { useRecipeStore } from '@providers';
import { Recipe, Routes, SearchParamList } from '@types';
import { ContentContainer } from '@ui';
import { useGoBackOrGoHome } from '@utils';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';

export default function EditRecipeScreen() {
  const backOrGoHome = useGoBackOrGoHome();
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<SearchParamList<Routes.RecipeEdit>>();
  const { getById, modify } = useRecipeStore();

  if (!id) {
    return backOrGoHome();
  }

  const data: Recipe | undefined = getById(id);

  if (!data) {
    return backOrGoHome();
  }

  const onSubmit = (values: RecipeFormValues) => {
    Alert.alert(
      t(i18nKeys.recipe.edit.alert.modify.title),
      t(i18nKeys.recipe.edit.alert.modify.description),
      [
        {
          style: 'cancel',
          text: t(i18nKeys.common.no),
        },
        {
          onPress: () => {
            modify({ ...data, ...values });
            backOrGoHome();
          },
          text: t(i18nKeys.common.yes),
        },
      ],
    );
  };

  return (
    <ContentContainer>
      <RecipeWizard onSubmit={onSubmit} data={data} />
    </ContentContainer>
  );
}
