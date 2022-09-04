import { ADD_CONTACT, DEL_CONTACT } from './phone-book-types';

const initialStore = {
  items: JSON.parse(localStorage.getItem('phoneList')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const reducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      console.log(payload);
      const newItems = [payload, ...store.items];
      return { ...store, items: newItems };
    case DEL_CONTACT:
      const result = store.items.filter(item => item.id !== payload);
      return { ...store, items: result };
    default:
      return store;
  }
};
export default reducer;
// import { createReducer } from '@reduxjs/toolkit';
// import actions from './phone-book-actions';
// import { combineReducers } from 'redux';

// const items = createReducer([], {
//   [actions.addContact]: (state, { payload }) => [payload, ...state],
// });
// export default combineReducers({ items });
