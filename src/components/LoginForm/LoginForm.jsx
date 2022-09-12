import { useState } from 'react';
import TextField from 'components/TextField';
import { fields } from 'components/TextField/fields';
import s from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hendleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const dataUser = {
      email,
      password,
    };

    onSubmit(dataUser);

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={hendleSubmit}>
      <TextField value={email} onChange={hendleInputChange} {...fields.email} />
      <TextField
        value={password}
        onChange={hendleInputChange}
        {...fields.password}
      />
      <button type="submit" className={s.login}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
