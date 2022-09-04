import { createStore } from 'redux';
import rootReducer from './rootReducer';
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import items from './phone-book-reducer';

// const store = configureStore({
//   reducer: {
//     items,
//   },
// });

// export default store;
