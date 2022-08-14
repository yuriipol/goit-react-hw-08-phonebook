import s from './PhoneBookList.module.css';

const PhoneBookList = ({ phoneList, onDeletePhoneListItem }) => {
  return (
    <ul className={s.list}>
      {phoneList.map(({ id, name, number }) => (
        <li key={id} className={s.phoneBookListItem}>
          <p className={s.nameText}>{name}</p>
          <p className={s.phoneNumber}>{number}</p>
          <button
            className={s.buttonDelete}
            onClick={() => onDeletePhoneListItem(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhoneBookList;
