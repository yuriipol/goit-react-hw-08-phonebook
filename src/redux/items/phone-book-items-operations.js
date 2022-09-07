import { getContacts, delContacts } from '../../shared/api';
import * as actions from './phone-book-items-actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    dispatch(actions.fetchContactsRequest());
    try {
      const data = await getContacts();
      dispatch(actions.fetchContactsSucces(data));
    } catch (error) {
      dispatch(actions.fetchContactsError(error));
    }
  };
  return func;
};

export const deleteContacts = id => {
  const func = async dispatch => {
    dispatch(actions.delContactRequest());
    try {
      const data = await delContacts(id);
      dispatch(actions.delContactSucces(data.id));
    } catch (error) {
      dispatch(actions.delContactError(error));
    }
  };
  return func;
};
