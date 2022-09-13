import { Route, Routes, NavLink } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';

import style from './Header.module.css';

const Home = lazy(() => import('../Home/Home'));
const NotFound = lazy(() => import('../NotFound/NotFound'));
const RegisterPage = lazy(() => import('../../pages/registerPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

const getClassName = ({ isActive }) => {
  return isActive ? `${style.active} ${style.headerNav}` : style.headerNav;
};

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <nav className="nav">
          <NavLink to="/" className={getClassName}>
            Home
          </NavLink>
          <NavLink to="/register" className={getClassName}>
            Register
          </NavLink>
          <NavLink to="/login" className={getClassName}>
            Login
          </NavLink>
          <NavLink to="/contacts" className={getClassName}>
            Contacts
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Header;
