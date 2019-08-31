import { createBrowserHistory, History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducers';
import sagas from './sagas';

const history: History = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware(history), thunk, sagaMiddleware];

const store = createStore(createRootReducer(history), compose(applyMiddleware(...middleware)));

sagaMiddleware.run(sagas);

export { history };

export default store;
