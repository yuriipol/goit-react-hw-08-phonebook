import { combineReducers } from 'redux';
import contactsReducer from './items/phone-book-items-slice';
import filterReducer from './filter/phoneBookFilter-reducer';
import authReducer from './auth/auth-slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
