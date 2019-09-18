import React from 'react';
import { Switch, Route, BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import AsyncComponent from './AsyncComponent';
import store, { history } from '../redux/store';

console.log(process.env)

const Home = AsyncComponent(() => import('../screens/home/Home'));
const Login = AsyncComponent(() => import('../screens/login'));
const NotFound = AsyncComponent(() => import('../screens/NotFound'));

const publicPaths = [
  { exact: true, path: '/', component: Login },
  { exact: true, path: '/home', component: Home }
];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          {publicRoutes}
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);
