import { combineReducers } from 'redux';
import contactsReducer from './items/phone-book-items-slice';
import filterReducer from './filter/phoneBookFilter-reducer';
import authReducer from './auth/auth-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
