import { useEffect, useState } from 'react';
import PhoneBookList from '../../components/PhoneBookList/PhoneBookList';
import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import Modal from 'components/Modal';
import FormChangeContact from 'components/FormChangeContact';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  addItems,
} from 'redux/items/phone-book-items-operations';
import { addFilter } from 'redux/filter/phoneBookFilter-actions';
import { getContactsList } from 'redux/items/phone-book-items-selector';
import { getFilter } from 'redux/filter/phoneBookFilter-selector';

import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [findContact, setFindContact] = useState({});
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
  // console.log(phoneList);

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

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const findIdContact = event => {
    const searchContact = phoneList.find(
      contact => contact.id.toString() === event.currentTarget.id
    );
    setFindContact(searchContact);
    // console.log(searchContact);
    toggleModal();
  };
  return (
    <div>
      <Form onSubmit={onAddContact} />
      <Filter value={filter} onChange={onChangeFilter} />
      {loading && <p>...Loading</p>}
      <PhoneBookList
        phoneList={phoneList}
        onDeletePhoneListItem={onDelContact}
        onClick={findIdContact}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <h2 className={s.title__change}>CHANGE CONTACT</h2>
          <div className={s.contact}>
            <p className={s.contact__name}>Name: {findContact.name}</p>
            <p className={s.contact__name}>Tel: {findContact.number}</p>
          </div>
          <button
            type="button"
            onClick={toggleModal}
            className={s.modal__close}
          >
            close
          </button>
          <FormChangeContact onClose={toggleModal} findContact={findContact} />
        </Modal>
      )}
    </div>
  );
};

export default ContactsPage;
