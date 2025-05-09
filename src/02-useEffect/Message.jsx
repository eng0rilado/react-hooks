import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coordenadas, setCoordenadas] = useState({x:0, y:0});

    const {x, y} = coordenadas;

    const onMouseMove = ({x, y}) => {
        const coords = {x, y};
        setCoordenadas(coords);
        console.log(coords);
    }

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);

    
    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coordenadas)}
        </>
    )
}
