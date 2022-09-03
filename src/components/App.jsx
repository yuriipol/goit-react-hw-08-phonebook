import { useState, useEffect } from 'react';
import PhoneBookList from './PhoneBookList';
import Form from './Form';
import Filter from './Filter';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, delContact } from '../redux/phone-book-actions';

function App() {
  const [filter, setFilter] = useState('');

  const phoneList = useSelector(store => {
    const filteredContact = store.filter(item =>
      item.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filteredContact;
  });
  console.log(phoneList);
  const dispatch = useDispatch();

  const onAddContact = data => {
    const action = addContact(data);
    dispatch(action);
  };
  const onDelContact = id => {
    const action = delContact(id);
    dispatch(action);
  };
  // const [phoneList, setPhoneList] = useState(() => {
  //   return (
  //     JSON.parse(localStorage.getItem('phoneList')) ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  //   );
  // });

  // const formSubmitHendler = (name, number) => {
  //   const phoneBookListItem = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };
  //   if (phoneList.find(item => item.name === phoneBookListItem.name)) {
  //     return alert(`${phoneBookListItem.name}  is olrady in contacts`);
  //   }
  //   setPhoneList([phoneBookListItem, ...phoneList]);
  // };

  // const deletePhoneListItem = phoneListId => {
  //   setPhoneList(
  //     phoneList.filter(phoneListItem => phoneListItem.id !== phoneListId)
  //   );
  // };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  // const getVisibleFilter = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return phoneList.filter(item =>
  //     item.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  useEffect(() => {
    // console.log('Записываем в локалСтораже');
    localStorage.setItem('phoneList', JSON.stringify(phoneList));
  }, [phoneList]);

  // const filteredPhoneBookList = getVisibleFilter();

  return (
    <>
      <Form onSubmit={onAddContact} />

      <Filter value={filter} onChange={changeFilter} />
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
