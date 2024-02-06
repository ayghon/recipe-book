import { StorageKeys } from '@constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage } from 'zustand/esm/middleware';
import { persist } from 'zustand/middleware';

export enum StructureType {
  List = 'list',
  Card = 'card',
  SimplifiedList = 'simplified-list',
}

interface AppConfigStore {
  homeStructureType: StructureType;
  changeStructureType: (type: StructureType) => void;
}

export const useAppConfigStore = create<AppConfigStore>()(
  persist(
    (set) => ({
      changeStructureType: (type) => set(() => ({ homeStructureType: type })),
      homeStructureType: StructureType.Card,
    }),
    { name: StorageKeys.AppConfig, storage: createJSONStorage(() => AsyncStorage) },
  ),
);
