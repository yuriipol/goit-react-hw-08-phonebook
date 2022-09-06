import { getContacts } from '../../shared/api';
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
