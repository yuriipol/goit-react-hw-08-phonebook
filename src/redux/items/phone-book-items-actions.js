import { nanoid } from 'nanoid';
import { ADD_CONTACT, DEL_CONTACT } from './phone-book-items-types';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: { ...payload, id: nanoid() },
  };
};
export const delContact = payload => {
  return {
    type: DEL_CONTACT,
    payload,
  };
};

// import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const addContact = createAction('phone-book/addContact', (name, number) => ({
//   payload: {
//     id: nanoid(),
//     name: name,
//     number: number,
//   },
// }));

// const actions = { addContact };
// export default actions;
