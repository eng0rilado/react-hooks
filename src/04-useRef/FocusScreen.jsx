import React, { useRef } from 'react'

export const FocusScreen = () => {

    const reference = useRef()

    const onClickBtn = () => {
        // document.querySelector('input').select()
        reference.current.select();

    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={reference}
                type="text"
                placeholder='Ingrese su nombre'
                className="form-control"
            />

            <button
                className="btn btn-primary mt-2"
                onClick={onClickBtn} >
                Set Focus
            </button>
        </>
    )
}
