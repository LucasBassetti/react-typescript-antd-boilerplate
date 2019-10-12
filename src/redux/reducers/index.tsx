import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import list from './list';

export default (history: History) =>
  combineReducers<IReducerStates>({
    list,
    router: connectRouter(history)
  });
