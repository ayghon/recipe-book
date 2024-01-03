import { RecipeFormValues } from '@components';
import { StorageKeys } from '@constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '@types';
import { swapItemsInArray } from '@utils';
import * as Crypto from 'expo-crypto';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface RecipeState {
  recipes: Recipe[];
  getById: (id: string) => Recipe | undefined;
  add: (recipeFormValues: RecipeFormValues) => void;
  remove: (id: string) => void;
  modify: (modifiedRecipe: Recipe) => void;
  move: (id: string, fromIndex: number, toIndex: number) => void;
}

export const useRecipeStore = create<RecipeState>()(
  persist(
    (set, get) => ({
      add: (recipeFormValues) =>
        set((state) => {
          const uniqueId = Crypto.randomUUID();
          const recipe: Recipe = { id: uniqueId, ...recipeFormValues };

          return {
            recipes: [...state.recipes, recipe],
          };
        }),
      getById: (id) => {
        return get().recipes.find((s) => s.id === id);
      },
      modify: (modifiedRecipe) =>
        set((state) => {
          const recipes = state.recipes.map((item) =>
            item.id === modifiedRecipe.id ? modifiedRecipe : item,
          );

          return {
            recipes,
          };
        }),
      move: (id, fromIndex, toIndex) =>
        set((state) => {
          const recipes = swapItemsInArray(state.recipes, fromIndex, toIndex);

          return {
            recipes,
          };
        }),
      recipes: [],
      remove: (id) =>
        set((state) => {
          const recipes = state.recipes.filter((item) => item.id !== id);

          return {
            recipes,
          };
        }),
    }),
    {
      name: StorageKeys.Recipes,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
