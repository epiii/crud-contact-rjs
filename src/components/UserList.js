import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../features/user/userSlice';
import UserCard from './UserCard'

function UserList() {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <>
            {users && users.map(user => (
                <UserCard />
            ))}
        </>
    )
}

export default UserList