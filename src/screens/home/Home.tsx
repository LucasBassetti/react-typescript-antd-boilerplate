import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import { fetchList } from '../../redux/actions';
import { GITHUB_LINK } from '../../constants/general';
import LogoIcon from '../../shared/icons/LogoIcon';
import ListItem from '../../shared/components/data_entry/list_item/ListItem';
import Header from '../../layout/header/Header';

import './Home.less';

interface Props {
  fetching: boolean;
  list: string[];
  fetchList: Function;
  history: any;
}

const Home = ({ fetching, list, fetchList, history }: Props) => {
  const { t } = useTranslation('homeScreen');

  useEffect(() => {
    const fetchData = async () => {
      await fetchList();
    };

    fetchData();
  }, []);

  const onLogout = () => {
    history.push('/');
  };
  return (
    <>
      <Header />
      <div className="home">
        <Card
          className="home__card"
          title={t('title')}
          extra={
            <a className="home__link" href={GITHUB_LINK} target="_blank">
              <LogoIcon fill="#3f51b5" /> {t('githubLink')}
            </a>
          }
        >
          {fetching ? <p>{t('loading')}</p> : list.map(item => <ListItem key={item} item={item} />)}
          <Button type="danger">button</Button>
          <Button type="primary" onClick={onLogout}>
            Logout
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
)(Home);
