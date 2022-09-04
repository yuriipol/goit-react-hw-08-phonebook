import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import { ADD_CONTACT, DEL_CONTACT } from './phone-book-items-types';

export const addContact = createAction('phoneBook/addContact', data => {
  return {
    payload: { ...data, id: nanoid() },
  };
});
export const delContact = createAction('phoneBook/delContact');

// export const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: { ...payload, id: nanoid() },
//   };
// };
// export const delContact = payload => {
//   return {
//     type: DEL_CONTACT,
//     payload,
//   };
// };
