import { Routes, SearchParamList } from '@types';
import { useRouter } from 'expo-router';

export const getPath = (route: Routes, params?: SearchParamList<typeof route>) => {
  if (!params) {
    return route.replace('/index', '');
  }

  return Object.entries(params)
    .reduce<string>((acc, [key, value]) => {
      return acc.replace(`[${key}]`, value);
    }, route)
    .replace('/index', '');
};

export const useGoBackOrGoHome = () => {
  const { canGoBack, replace, back } = useRouter();

  return () => {
    if (canGoBack()) {
      back();
      return null;
    }

    replace('/');
    return null;
  };
};
