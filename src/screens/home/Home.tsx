import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { GITHUB_LINK } from '../../constants';
import { fetchList } from '../../redux/actions';
import { LogoIcon } from '../../shared';
import { Header } from '../../layout';

import './Home.less';

type Props = {
  fetching: boolean;
  list: string[];
  fetchList: Function;
};

const Home = ({ fetching, list, fetchList }: Props) => {
  const { t } = useTranslation('homeScreen');

  useEffect(() => {
    const fetchData = async () => {
      await fetchList();
    };

    fetchData();
  }, []);

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
          {fetching ? (
            <p>{t('loading')}</p>
          ) : (
            list.map(item => (
              <p key={item} className="home__item">
                {item}
              </p>
            ))
          )}
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
