import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { fetchList, FetchList } from '@redux/actions';
import { GITHUB_LINK } from '@constants/general';
import LogoIcon from '@icons/LogoIcon';
import ListItem from '@components/data_entry/ListItem';
import Header from '@layout/Header';

import './Home.less';

interface StateProps {
  list: IItem[];
}

interface DispatchProps {
  fetchList: FetchList;
}

type IProps = StateProps & DispatchProps;

const Home: React.FC<IProps> = ({ list, fetchList }) => {
  const [fetching, setFetching] = useState(true);
  const { t } = useTranslation('homeScreen');

  useEffect(() => {
    (async () => {
      await setFetching(true);

      try {
        await fetchList();
      } catch (error) {
        // console.log(error)
      }

      setFetching(false);
    })();
  }, [fetchList]);

  return (
    <>
      <Header />
      <div className="home">
        <Card
          className="home__card"
          title={t('title')}
          extra={
            <a className="home__link" href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
              <LogoIcon fill="#3f51b5" /> {t('githubLink')}
            </a>
          }
        >
          {fetching ? (
            <p>{t('loading')}</p>
          ) : (
            list.map((item: IItem) => <ListItem key={item.id} item={item.name} />)
          )}
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = ({ list }: IReducerStates): StateProps => ({
  list
});

const MapDispatchToProps = { fetchList };

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Home);
