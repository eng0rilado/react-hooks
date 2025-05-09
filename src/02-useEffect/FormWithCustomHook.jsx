import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const {email, username, password, formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const {username, email, password} = formState;

    useEffect(() => {
        console.log('UseEffect initialized');
    }, []);

    useEffect(() => {
        console.log('formState changed');
    }, [formState]);

    useEffect(() => {
        console.log('email changed');
    }, [email]);





    return (
        <>
            <h1>Form con custom hook</h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="diego@yo.com"
                name="email"
                value={email}
                onChange={onInputChange} />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange} />

            {
                username === 'engorilado' && <Message />
            }

            <button onClick={ onResetForm } className='btn btn-danger'> Borrar </button>
        </>
    )
}