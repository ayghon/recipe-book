import { Routes, SearchParamList } from '@types';

export const getPath = (route: Routes, params?: SearchParamList<typeof route>) => {
  if (!params) {
    return route;
  }

  return Object.entries(params)
    .reduce<string>((acc, [key, value]) => {
      return acc.replace(`[${key}]`, value);
    }, route)
    .replace('/index', '');
};
