import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const HomePage = () => {

    const {user} = useContext(UserContext);
    

    return (
        <>
            <h1>HomePage <small>{user?.name}</small></h1>
            <pre>{JSON.stringify(user)}</pre>
        </>
    )
}
