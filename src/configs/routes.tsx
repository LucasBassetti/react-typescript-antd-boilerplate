import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import AsyncComponent from './AsyncComponent';
import store, { history } from '../redux/store';

const Home = AsyncComponent(() => import('../screens/home/Home'));

const publicPaths = [{ exact: true, path: '/', component: Home }];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {publicRoutes}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </ConnectedRouter>
  </Provider>
);
