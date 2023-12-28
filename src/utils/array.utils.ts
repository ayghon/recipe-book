export const swapItemsInArray = <TItem>(array: TItem[], indexA: number, indexB: number) => {
  const list = array;

  const b = list[indexB];
  list[indexB] = list[indexA];
  list[indexA] = b;

  return list;
};
