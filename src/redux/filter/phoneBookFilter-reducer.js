// import { ADD_FILTER } from './phoneBookFilter-types';
import { createReducer } from '@reduxjs/toolkit';
import { addFilter } from './phoneBookFilter-actions';

const filterReducer = createReducer('', {
  [addFilter]: (store, { _, payload }) => payload,
});

export default filterReducer;

// const initialStore = '';

// const filterReducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case ADD_FILTER: //addFilter.type
//       return payload;
//     default:
//       return store;
//   }
// };
// export default filterReducer;
