type APIFetchList = () => Promise<IItem[]>;

export const fetchList: APIFetchList = async () => {
  const list: IItem[] = await new Promise(resolve => {
    setTimeout(() => {
      resolve([{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }, { id: 3, name: 'item3' }]);
    }, 1000);
  });

  return list;
};
