import { useEffect } from 'react';
import PhoneBookList from './PhoneBookList';
import Form from './Form';
import Filter from './Filter';

import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  delContact,
} from '../redux/items/phone-book-items-actions';
import { addFilter } from 'redux/filter/phoneBookFilter-actions';
import { getContacts } from '../redux/items/phone-book-items-selector';
import { getFilter } from '../redux/filter/phoneBookFilter-selector';

function App() {
  const ArrContacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const phoneList = useSelector(store => {
    const filteredContact = store.items.filter(item =>
      item.name.toLowerCase().includes(store.filter.toLocaleLowerCase())
    );
    return filteredContact;
  });

  const onAddContact = data => {
    const { name, number } = data;
    if (
      ArrContacts.find(item => item.name === name || item.number === number)
    ) {
      return alert(`Такое имя ${name} или номер ${number} есть в контактах!`);
    }
    const action = addContact(data);
    dispatch(action);
  };
  const onDelContact = id => {
    const action = delContact(id);
    dispatch(action);
  };

  const onChangeFilter = event => {
    const action = addFilter(event.currentTarget.value);
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem('phoneList', JSON.stringify(phoneList));
  }, [phoneList]);

  return (
    <>
      <Form onSubmit={onAddContact} />

      <Filter value={filter} onChange={onChangeFilter} />
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
