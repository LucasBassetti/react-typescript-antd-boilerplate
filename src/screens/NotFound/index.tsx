import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Card, Input, Button } from 'antd';

type Props = {
  fetching: boolean;
};

const NotFound = (props: Props) => {
  return (
    <>
      <div className="home">Page Not Found</div>
    </>
  );
};

export default NotFound;
