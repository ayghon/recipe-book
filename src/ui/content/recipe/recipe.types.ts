import { StructureType } from '@providers';

export type RecipeCardProps = {
  image?: string;
  title: string;
  onPress: () => void;
  type?: StructureType;
};

export type RecipeCardByStucture = Omit<RecipeCardProps, 'type'>;
