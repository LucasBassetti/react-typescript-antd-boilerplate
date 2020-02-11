import { Dispatch } from 'redux';

export const FETCH_LIST_REQUEST: 'fetch_list_request' = 'fetch_list_request';
export const FETCH_LIST_SUCCESS: 'fetch_list_success' = 'fetch_list_success';
export const FETCH_LIST_FAILURE: 'fetch_list_failure' = 'fetch_list_failure';

export type DispatchFetchList = () => (dispatch: Dispatch) => Promise<void>;

export const fetchList: DispatchFetchList = () => async dispatch =>
  new Promise(
    (resolve, reject): void => {
      dispatch({
        type: FETCH_LIST_REQUEST,
        payload: { resolve, reject }
      });
    }
  );
