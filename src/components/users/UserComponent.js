import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/actions/users';
import UserCard from './UserCard'

const UserComponent = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    useEffect(() => {
        dispatch(getUsers([
            {
                id: 1,
                name: "Mahmudul Hasan Dip",
                company: {
                    name: 'UCB',
                    catchPhrase: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
                }
            }
        ]))
    }, [])
    return (
        <>
            { users.length > 0 && users.map((user) =>  <UserCard user={user} key={user.id} /> )}
            {users.length === 0 && <p>No user is available.</p>}
        </>
    )
}

export default UserComponent
