import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import LoginForm from 'components/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = data => {
    dispatch(login(data));
  };
  return (
    <div>
      <h2>Login page</h2>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
