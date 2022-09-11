import RegisterForm from 'components/RegisterForm';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSignUp = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h2>Register page</h2>
      <RegisterForm onSubmit={onSignUp} />
    </div>
  );
};

export default RegisterPage;
