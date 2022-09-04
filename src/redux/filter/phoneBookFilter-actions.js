// import { ADD_FILTER } from './phoneBookFilter-types';
import { createAction } from '@reduxjs/toolkit';

export const addFilter = createAction('phoneBook/addFilter');

// export const addFilter = payload => {
//   return {
//     type: ADD_FILTER,
//     payload,
//   };
// };
