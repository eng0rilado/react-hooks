import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementCounter = useCallback(
        (value) => {
            // setCounter(counter + 1); //Counter está también memorizado, hay que usar callback de useState
            setCounter((counter) => counter + value);
        },
        [],
    )

    // const incrementCounter = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>UseCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementCounter} />
        </>
    )
}
