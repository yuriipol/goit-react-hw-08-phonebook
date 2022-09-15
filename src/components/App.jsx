import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrent } from 'redux/auth/auth-operations';

import Header from './Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
    // console.log('hello');
  }, [dispatch]);
  return (
    <div className="container">
      <Header />
    </div>
  );
}
export default App;
