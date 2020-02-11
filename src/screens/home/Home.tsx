import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'antd';
import { fetchList } from '@redux/actions';
import { GITHUB_LINK } from '@constants/general';
import LogoIcon from '@icons/LogoIcon';
import ListItem from '@components/data_entry/ListItem';
import Header from '@layout/header';

import './Home.less';

type Props = {};

const Home: React.FC<Props> = () => {
  const { t } = useTranslation('homeScreen');
  const [fetching, setFetching] = useState(true);
  const list = useSelector((state: IReducerStates) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await setFetching(true);

      try {
        await dispatch(fetchList());
      } catch (error) {
        // console.log(error)
      }

      setFetching(false);
    })();
  }, [dispatch]);

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

export default Home;
