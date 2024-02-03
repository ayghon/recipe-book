import * as Crypto from 'expo-crypto';
import { create } from 'zustand';

type WizardStep<TData> = {
  id: string;
  isActive: boolean;
  data?: TData;
};

type WizardOptions = {
  canGoBack: boolean;
};

interface WizardState<TData> {
  steps: WizardStep<TData>[];
  activeStepIndex: number;
  isLastStep: boolean;
  lastStepIndex: number;
  initialise: (steps: Omit<WizardStep<TData>, 'isActive' | 'id'>[]) => void;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (index: number) => void;
  options: WizardOptions;
}

export const useWizardStore = create<WizardState<any>>()((set) => ({
  activeStepIndex: 0,
  goToStep: (index) =>
    set((state) => {
      if (index >= state.lastStepIndex) {
        return {
          activeStepIndex: state.lastStepIndex,
          isLastStep: true,
          options: {
            canGoBack: true,
          },
        };
      }

      return {
        activeStepIndex: index,
        isLastStep: false,
        options: {
          canGoBack: index > 0,
        },
        steps: state.steps.reduce<WizardStep<any>[]>((acc, it, i) => {
          if (i === index) {
            return [...acc, { ...it, isActive: true }];
          }
          return [...acc, { ...it, isActive: false }];
        }, []),
      };
    }),
  initialise: (steps) =>
    set(() => {
      if (steps.length < 2) {
        throw new Error('Wizard.store: steps must have 2 items minimum');
      }

      return {
        lastStepIndex: steps.length - 1,
        steps: steps.reduce<WizardStep<any>[]>((acc, it, i) => {
          const id = Crypto.randomUUID();

          if (i === 0) {
            return [...acc, { ...it, id, isActive: true }];
          }
          return [...acc, { ...it, id, isActive: false }];
        }, []),
      };
    }),
  isLastStep: false,
  lastStepIndex: 0,
  nextStep: () =>
    set((state) => {
      if (state.activeStepIndex === state.lastStepIndex) {
        return {
          isLastStep: true,
          options: {
            canGoBack: state.activeStepIndex > 0,
          },
        };
      }

      const nextActiveStepIndex = state.activeStepIndex + 1;

      return {
        activeStepIndex: nextActiveStepIndex,
        isLastStep: nextActiveStepIndex === state.lastStepIndex,
        options: {
          canGoBack: nextActiveStepIndex > 0,
        },
        steps: changeActiveStepIndex<any>(state.steps, nextActiveStepIndex),
      };
    }),
  options: {
    canGoBack: false,
  },
  previousStep: () =>
    set((state) => {
      if (state.activeStepIndex === 0) {
        return {
          options: {
            canGoBack: false,
          },
        };
      }

      const nextActiveStepIndex = state.activeStepIndex - 1;

      return {
        activeStepIndex: nextActiveStepIndex,
        isLastStep: nextActiveStepIndex === state.lastStepIndex,
        options: {
          canGoBack: nextActiveStepIndex > 0,
        },
        steps: changeActiveStepIndex<any>(state.steps, nextActiveStepIndex),
      };
    }),
  steps: [],
}));

const changeActiveStepIndex = <TData>(steps: WizardStep<TData>[], nextActiveStepIndex: number) =>
  steps.reduce<WizardStep<TData>[]>((acc, it, i) => {
    if (i === nextActiveStepIndex) {
      return [...acc, { ...it, isActive: true }];
    }

    return [...acc, { ...it, isActive: false }];
  }, []);
