import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../features/user/userSlice';
import UserCard from './UserCard';

function UserList() {
    const users = useSelector(selectUsers);

    return (
        <>
            {users && users.map(user => (
                <UserCard />
            ))}
        </>
    )
}

export default UserList