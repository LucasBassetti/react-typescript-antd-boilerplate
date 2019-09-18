import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Card, Input, Button } from 'antd';
import { fetchList } from '../../redux/actions';
import Header from '../../layout/header/Header';
import '../home/Home.less';

type Props = {
  fetching: boolean;
  list: string[];
  fetchList: Function;
  history: any;
};

const Login = (props: Props) => {
  const { t } = useTranslation('homeScreen');
  const handleLogin = () => {
    props.history.push('/home');
  };
  return (
    <>
      <Header />
      <div className="home">
        <Card className="home__card" title={t('title')}>
          <Input placeholder="username" className="home__input" />
          <Input placeholder="password" />
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button>
        </Card>
      </div>
    </>
  );
};

function mapStateToProps({ list }: any) {
  return {
    list: list.data,
    fetching: list.fetching
  };
}

export default connect(
  mapStateToProps,
  { fetchList }
)(Login);
