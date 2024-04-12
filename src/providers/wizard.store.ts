import * as Crypto from 'expo-crypto';
import { create } from 'zustand';

export type BaseData = {
  title?: string;
  nextButtonTitle?: string;
  [x: string]: unknown;
};

type WizardStep = {
  id: string;
  isActive: boolean;
  data?: BaseData;
};

type WizardActions = {
  initialise: (stepsData: BaseData[]) => void;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (index: number) => void;
  reset: () => void;
};

type WizardValues = {
  steps: WizardStep[];
  activeStepIndex: number;
  isLastStep: boolean;
  lastStepIndex: number;
  canGoBack: boolean;
  isDataInitialised: boolean;
};

type WizardState = WizardActions & WizardValues;

const initialState: WizardValues = {
  activeStepIndex: 0,
  canGoBack: false,
  isDataInitialised: false,
  isLastStep: false,
  lastStepIndex: 0,
  steps: [],
};

export const useWizardStore = create<WizardState>()((set) => ({
  ...initialState,
  goToStep: (index) =>
    set((state) => {
      if (index >= state.lastStepIndex) {
        return {
          activeStepIndex: state.lastStepIndex,
          canGoBack: true,
          isLastStep: true,
        };
      }

      return {
        activeStepIndex: index,
        canGoBack: index > 0,
        isLastStep: false,
        steps: state.steps.reduce<WizardStep[]>((acc, it, i) => {
          if (i === index) {
            return [...acc, { ...it, isActive: true }];
          }
          return [...acc, { ...it, isActive: false }];
        }, []),
      };
    }),
  initialise: (stepsData) =>
    set(() => {
      if (stepsData.length < 2) {
        throw new Error('Wizard.store: wizard must have 2 steps minimum');
      }

      return {
        isDataInitialised: true,
        lastStepIndex: stepsData.length - 1,
        steps: stepsData.reduce<WizardStep[]>((acc, it, i) => {
          const id = Crypto.randomUUID();

          if (i === 0) {
            return [...acc, { data: it, id, isActive: true }];
          }
          return [...acc, { data: it, id, isActive: false }];
        }, []),
      };
    }),
  nextStep: () =>
    set((state) => {
      if (state.activeStepIndex === state.lastStepIndex) {
        return {
          canGoBack: state.activeStepIndex > 0,
          isLastStep: true,
        };
      }

      const nextActiveStepIndex = state.activeStepIndex + 1;

      return {
        activeStepIndex: nextActiveStepIndex,
        canGoBack: nextActiveStepIndex > 0,
        isLastStep: nextActiveStepIndex === state.lastStepIndex,
        steps: changeActiveStepIndex(state.steps, nextActiveStepIndex),
      };
    }),
  previousStep: () =>
    set((state) => {
      if (state.activeStepIndex === 0) {
        return {
          canGoBack: false,
        };
      }

      const nextActiveStepIndex = state.activeStepIndex - 1;

      return {
        activeStepIndex: nextActiveStepIndex,
        canGoBack: nextActiveStepIndex > 0,
        isLastStep: nextActiveStepIndex === state.lastStepIndex,
        steps: changeActiveStepIndex(state.steps, nextActiveStepIndex),
      };
    }),
  reset: () => set(initialState),
}));

const changeActiveStepIndex = (steps: WizardStep[], nextActiveStepIndex: number) =>
  steps.reduce<WizardStep[]>((acc, it, i) => {
    if (i === nextActiveStepIndex) {
      return [...acc, { ...it, isActive: true }];
    }

    return [...acc, { ...it, isActive: false }];
  }, []);
