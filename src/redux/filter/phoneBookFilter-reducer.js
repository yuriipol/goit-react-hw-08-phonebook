import { ADD_FILTER } from './phoneBookFilter-types';

const initialStore = '';

const filterReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_FILTER:
      return payload;
    default:
      return store;
  }
};
export default filterReducer;
