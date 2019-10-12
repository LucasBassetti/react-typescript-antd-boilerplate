import { FETCH_LIST_SUCCESS } from '../actions';

interface IProps {
  type: string;
  payload: IItem[];
}

const INITIAL_STATE: IItem[] = [];

export default (state = INITIAL_STATE, { type, payload }: IProps) => {
  switch (type) {
    case FETCH_LIST_SUCCESS:
      return payload;
    default:
      return state;
  }
};
