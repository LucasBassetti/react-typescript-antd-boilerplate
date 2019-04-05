export const fetchList = async (): Promise<string[]> => {
  const list: string[] = await new Promise(resolve => {
    setTimeout(() => {
      resolve(['item1', 'item2', 'item3']);
    }, 1000);
  });

  return list;
};
