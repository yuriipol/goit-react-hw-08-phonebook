import React from 'react';
import { Component } from 'react';
import PhoneBookList from './PhoneBookList';

class App extends Component {
  state = {
    phoneList: [
      {
        id: 'is-1',
        name: 'Polupan Yurii',
        telNumber: '097-686-32-42',
        complited: true,
      },
      {
        id: 'is-2',
        name: 'Polupan Inna',
        telNumber: '095-506-53-07',
        complited: false,
      },
      {
        id: 'is-3',
        name: 'Chergin Yurii',
        telNumber: '098-633-12-72',
        complited: false,
      },
    ],
  };
  deletePhoneListItem = phoneListId => {
    this.setState(prevState => ({
      phoneList: prevState.phoneList.filter(
        phoneListItem => phoneListItem.id !== phoneListId
      ),
    }));
  };

  render() {
    const { phoneList } = this.state;
    return (
      <>
        <h1>Contacts:</h1>
        <PhoneBookList
          phoneList={phoneList}
          onDeletePhoneListItem={this.deletePhoneListItem}
        />
      </>
    );
  }
}
export default App;
