import React, { useLayoutEffect, useRef } from 'react'

export const PokemonCard = ({ id, name, sprites = {} }) => {

    const h2Ref = useRef()

    useLayoutEffect(() => {
        console.log("Me ejecuto cada vez que cambia el nombre después de renderizar el componente");
        const { height, width } = h2Ref.current.getBoundingClientRect();

        console.log({ height, width });
        //   return () => {
        //     second
        //   };
    }, [name])

    return (
        <section style={{ height: 200 }}>
            <h2 ref={h2Ref} className="text-capitalize">
                #{id} - {name}
            </h2>
            <div>
                {
                    sprites.map((sprite) => {
                        return (
                            <img
                                key={sprite}
                                src={sprite}
                                alt={name}
                                className="img-fluid"
                            />
                        )
                    })

                }
            </div >
        </section >
    )

}
