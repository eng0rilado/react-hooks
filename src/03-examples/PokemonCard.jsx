import React from 'react'

export const PokemonCard = ({ id, name, sprites = {} }) => {



    return (
        <section style={{ height: 200 }}>
            <h2 className="text-capitalize">
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
