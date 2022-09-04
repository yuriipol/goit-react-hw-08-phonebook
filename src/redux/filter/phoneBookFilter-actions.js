import { ADD_FILTER } from './phoneBookFilter-types';

export const addFilter = payload => {
  return {
    type: ADD_FILTER,
    payload,
  };
};
