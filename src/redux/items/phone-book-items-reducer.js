import { createReducer, combineReducers } from '@reduxjs/toolkit';

import * as actions from './phone-book-items-actions';

const itemsReducer = createReducer([], {
  [actions.fetchContactsSucces]: (_, { payload }) => payload,
});
const loadingReducer = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSucces]: () => false,
  [actions.fetchContactsError]: () => false,
});
const errorReducer = createReducer(null, {
  [actions.fetchContactsRequest]: () => null,
  [actions.fetchContactsError]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});

// const initialStore = {
//   items: [],
//   loading: false,
//   error: null,
// };
// const contactsReducer = createReducer(initialStore, {
//   [actions.fetchContactsRequest]: store => {
//     store.loading = true;
//   },
//   [actions.fetchContactsSucces]: (store, { payload }) => {
//     store.items = payload;
//     store.loading = true;
//   },
//   [actions.addContactError]: store => {
//     store.error = error;
//     sessionStorage.loading = false;
//   },
// });

export default contactsReducer;
