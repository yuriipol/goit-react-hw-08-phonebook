import { useEffect } from 'react';
import PhoneBookList from '../../components/PhoneBookList/PhoneBookList';
import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  addItems,
} from 'redux/items/phone-book-items-operations';
import { addFilter } from 'redux/filter/phoneBookFilter-actions';
import { getContactsList } from 'redux/items/phone-book-items-selector';
import { getFilter } from 'redux/filter/phoneBookFilter-selector';

const ContactsPage = () => {
  const { loading } = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const phoneList = useSelector(store => {
    const filteredContact = store.contacts.items.filter(item =>
      item.name.toLowerCase().includes(store.filter.toLocaleLowerCase())
    );
    return filteredContact;
  });

  const onAddContact = data => {
    const action = addItems(data);
    dispatch(action);
  };

  const onDelContact = id => {
    const action = deleteContacts(id);
    dispatch(action);
    // dispatch(fetchContacts());
  };

  const onChangeFilter = event => {
    const action = addFilter(event.currentTarget.value);
    dispatch(action);
  };
  return (
    <div>
      <Form onSubmit={onAddContact} />
      <Filter value={filter} onChange={onChangeFilter} />
      {loading && <p>...Loading</p>}
      <PhoneBookList
        phoneList={phoneList}
        onDeletePhoneListItem={onDelContact}
      />
    </div>
  );
};

export default ContactsPage;
