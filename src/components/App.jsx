import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneBookList from './PhoneBookList';
import Form from './Form';
import Filter from './Filter';

class App extends Component {
  state = {
    phoneList: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmitHendler = data => {
    // console.log(data);
    const { phoneList } = this.state;
    const phoneBookListItem = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    if (phoneList.find(item => item.name === phoneBookListItem.name)) {
      return alert(`${phoneBookListItem.name}  is olrady in contacts`);
    }
    this.setState(prevState => ({
      phoneList: [phoneBookListItem, ...prevState.phoneList],
    }));
  };

  deletePhoneListItem = phoneListId => {
    this.setState(prevState => ({
      phoneList: prevState.phoneList.filter(
        phoneListItem => phoneListItem.id !== phoneListId
      ),
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleFilter = () => {
    const { phoneList, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return phoneList.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };
  componentDidMount() {
    const phoneList = localStorage.getItem('phoneList');
    const parsePhoneList = JSON.parse(phoneList);
    if (parsePhoneList) {
      this.setState({
        phoneList: parsePhoneList,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.phoneList !== prevState.phoneList) {
      localStorage.setItem('phoneList', JSON.stringify(this.state.phoneList));
    }
  }

  render() {
    const { filter } = this.state;

    const filteredPhoneBookList = this.getVisibleFilter();

    return (
      <>
        <Form onSubmit={this.formSubmitHendler} />

        <Filter value={filter} onChange={this.changeFilter} />
        <PhoneBookList
          phoneList={filteredPhoneBookList}
          onDeletePhoneListItem={this.deletePhoneListItem}
        />
      </>
    );
  }
}
export default App;
