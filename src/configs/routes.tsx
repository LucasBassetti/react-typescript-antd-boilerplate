import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import AsyncComponent from './AsyncComponent';
import store, { history } from '../redux/store';

const Home = AsyncComponent(() => import('../screens/home/Home'));

const publicPaths = [{ path: '', component: Home }];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={Home} />
        {publicRoutes}
      </Route>
    </Router>
    {/* <Route component={NotFound} /> */}
  </Provider>
);
