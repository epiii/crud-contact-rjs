import React from 'react';
import UserForm from '../../components/UserForm';
import UserList from '../../components/UserList';
// import styles from './Counter.module.css';

export function User() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <UserForm />
      <UserList />
    </>

  );
}
