import { useEffect } from 'react';
import PhoneBookList from './PhoneBookList';
import Form from './Form';
import Filter from './Filter';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  addItems,
} from 'redux/items/phone-book-items-operations';
import { addFilter } from 'redux/filter/phoneBookFilter-actions';
import { getContactsList } from '../redux/items/phone-book-items-selector';
import { getFilter } from '../redux/filter/phoneBookFilter-selector';

function App() {
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
  };

  const onChangeFilter = event => {
    const action = addFilter(event.currentTarget.value);
    dispatch(action);
  };

  return (
    <>
      <Form onSubmit={onAddContact} />

      <Filter value={filter} onChange={onChangeFilter} />
      {loading && <p>...Loading</p>}
      <PhoneBookList
        phoneList={phoneList}
        onDeletePhoneListItem={onDelContact}
      />
    </>
  );
}

export default App;

/*
?? 1. Создай хранилище с configureStore()
?? 2. Создай действия сохранения и удаления контакта, а также обновления фильтра. Используй функцию createAction().
?? 3. Создай редюсеры контактов и фильтра. Используй функцию createReducer() или createSlice().
?? 4. Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки react-redux.
*/
