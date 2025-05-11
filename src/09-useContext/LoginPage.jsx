import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);


    return (
        <>
            <h1>LoginPage</h1>
            <pre>{JSON.stringify(user)}</pre>
            <button 
                className="btn btn-primary"
                onClick={() => setUser({id:123, name:"Gory", email:"diego@yo.com"})}>
                Establecer Usuario
            </button>
        </>
    )
}
