import { useState, useEffect } from 'react';
// import { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneBookList from './PhoneBookList';
import Form from './Form';
import Filter from './Filter';

function App() {
  const [phoneList, setPhoneList] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('phoneList')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const formSubmitHendler = (name, number) => {
    const phoneBookListItem = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (phoneList.find(item => item.name === phoneBookListItem.name)) {
      return alert(`${phoneBookListItem.name}  is olrady in contacts`);
    }
    setPhoneList([phoneBookListItem, ...phoneList]);
  };

  const deletePhoneListItem = phoneListId => {
    setPhoneList(
      phoneList.filter(phoneListItem => phoneListItem.id !== phoneListId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleFilter = () => {
    const normalizedFilter = filter.toLowerCase();

    return phoneList.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    // console.log('Записываем в локалСтораже');
    localStorage.setItem('phoneList', JSON.stringify(phoneList));
  }, [phoneList]);

  const filteredPhoneBookList = getVisibleFilter();

  return (
    <>
      <Form onSubmit={formSubmitHendler} />

      <Filter value={filter} onChange={changeFilter} />
      <PhoneBookList
        phoneList={filteredPhoneBookList}
        onDeletePhoneListItem={deletePhoneListItem}
      />
    </>
  );
}

export default App;
