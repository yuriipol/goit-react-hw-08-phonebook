import s from './PhoneBookList.module.css';
import PropTypes from 'prop-types';

const PhoneBookList = ({ phoneList, onDeletePhoneListItem, onClick }) => {
  // console.log(phoneList);
  return (
    <ul className={s.list}>
      {phoneList.map(({ id, name, number }) => (
        <li key={id} id={id} className={s.phoneBookListItem} onClick={onClick}>
          <p className={s.nameText}>{name}</p>
          <p className={s.phoneNumber}>{number}</p>
          <button
            className={s.buttonDelete}
            onClick={() => onDeletePhoneListItem(id)}
          >
            remove
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
      number: PropTypes.string.isRequired,
    })
  ),
  onDeletePhoneListItem: PropTypes.func,
};
