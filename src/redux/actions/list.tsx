export const FETCH_LIST_REQUEST: 'FETCH_LIST_REQUEST' = 'FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS: 'FETCH_LIST_SUCCESS' = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE: 'FETCH_LIST_FAILURE' = 'FETCH_LIST_FAILURE';

export const fetchList = (): Function => (dispatch: Function): Promise<void> =>
  new Promise(
    (resolve: Function, reject: Function): void => {
      dispatch({
        type: FETCH_LIST_REQUEST,
        payload: { resolve, reject }
      });
    }
  );
