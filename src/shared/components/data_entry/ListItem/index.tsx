import React from 'react';

import './styles.less';

type Props = {
  item: string;
}

const ListItem:  React.FC<Props> = ({ item }) => <p className="list-item">{item}</p>;

export default ListItem;
