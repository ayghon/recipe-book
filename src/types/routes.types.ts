export enum Routes {
  Home = 'index',
  Settings = 'settings',
  RecipeCreate = 'recipe/create',
  RecipeView = 'recipe/[id]/index',
  RecipeEdit = 'recipe/[id]/edit',
}

export type ParamList = {
  [Routes.Home]: undefined;
  [Routes.Settings]: undefined;
  [Routes.RecipeCreate]: undefined;
  [Routes.RecipeView]: {
    id: string;
  };
  [Routes.RecipeEdit]: {
    id: string;
  };
};

export type SearchParamList<TRoute extends Routes> = ParamList[TRoute];
