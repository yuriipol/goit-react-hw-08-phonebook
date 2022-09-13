import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  return (
    <div>
      <span className={s.userName}>{name}</span>
      <button className={s.logout}>Logout</button>
    </div>
  );
};

export default UserMenu;
