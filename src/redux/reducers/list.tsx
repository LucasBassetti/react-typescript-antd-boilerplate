import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from '../actions';

interface State {
  data: string[];
  fetching: boolean;
};

interface Props {
  type: string;
  payload: any;
};

const INITIAL_STATE: State = { data: [], fetching: true };

export default (state = INITIAL_STATE, { type, payload }: Props) => {
  switch (type) {
    case FETCH_LIST_REQUEST:
      return { ...state, fetching: true };
    case FETCH_LIST_SUCCESS:
      return { ...state, fetching: false, data: payload };
    case FETCH_LIST_FAILURE:
      return { ...state, fetching: false, error: payload };
    default:
      return state;
  }
};
