import s from './PhoneBookList.module.css';
import PropTypes from 'prop-types';

const PhoneBookList = ({ phoneList, onDeletePhoneListItem }) => {
  // console.log(phoneList);
  return (
    <ul className={s.list}>
      {phoneList.map(({ id, name, phone }) => (
        <li key={id} className={s.phoneBookListItem}>
          <p className={s.nameText}>{name}</p>
          <p className={s.phoneNumber}>{phone}</p>
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

PhoneBookList.propTypes = {
  phoneList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDeletePhoneListItem: PropTypes.func,
};
