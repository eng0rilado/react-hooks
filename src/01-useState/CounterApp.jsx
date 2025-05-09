import React, { useState } from 'react'


export const CounterApp = () => {

  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  });

  const add = () => {

    // setCounter({
    //     ...counter, // Para no copiar todo el objeto por cada clave
    //     counter1: counter1 + 1,
    // });

    //Función equivalente con callback
    setCounter(counter => {
        return {
            ...counter,
            counter1: counter.counter1 + 1
        }
    })
  }




  const {counter1, counter2, counter3} = counter;

  return (
    <>
        <h3>Counter1: {counter1}</h3>
        <h3>Counter2: {counter2}</h3>
        <h3>Counter3: {counter3}</h3>
        <hr/>
        <button className="btn" onClick={add}> +1 </button>
    </>
  )
}
