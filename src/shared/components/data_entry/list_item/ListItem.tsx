import React from 'react';

import './ListItem.less';

interface Props {
  item: string;
}

const ListItem = ({ item }: Props) => <p className="list-item">{item}</p>;

export default ListItem;
