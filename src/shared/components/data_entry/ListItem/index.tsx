import React from 'react';

import './styles.less';

interface IProps {
  item: string;
}

const ListItem:  React.FC<IProps> = ({ item }) => <p className="list-item">{item}</p>;

export default ListItem;
