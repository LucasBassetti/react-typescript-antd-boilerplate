import { FETCH_LIST_SUCCESS } from '../actions';

type Props = {
  type: string;
  payload: IItem[];
}

const INITIAL_STATE: IItem[] = [];

export default (state = INITIAL_STATE, { type, payload }: Props) => {
  switch (type) {
    case FETCH_LIST_SUCCESS:
      return payload;
    default:
      return state;
  }
};
