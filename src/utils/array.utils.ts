export const swapItemsInArray = <TItem>(
  array: TItem[],
  indexA: number,
  indexB: number,
): TItem[] => {
  const list = array;

  const b = list[indexB];
  list[indexB] = list[indexA];
  list[indexA] = b;

  return list;
};

export const removeItemFromArray = <TItem>(index: number, array: TItem[]): TItem[] => {
  const start = array.slice(0, index) ?? [];
  const end = array.slice(index + 1) ?? [];

  return [...start, ...end];
};
