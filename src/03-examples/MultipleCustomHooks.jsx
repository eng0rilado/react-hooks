import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessages';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {


  const {counter, increment, decrement} = useCounter(1);
  const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Información de Pokemón </h1>
      <hr />
      {
        isLoading
          ? (
            <LoadingMessage />
          )
          : (
            <PokemonCard id={counter} 
                        name={data.name} 
                        sprites={[
                          data.sprites.front_default,
                          data.sprites.front_shiny,
                          data.sprites.back_default,
                          data.sprites.back_shiny,
                        ]}/>
            )
      }
      {
        hasError && (
          <div className="alert alert-danger text-center">
            Error al cargar la información
          </div>
        )
      }

      <button onClick={() => counter > 1 ? decrement() : null } className="btn btn-primary">Anterior</button>
      <button onClick={() => increment() } className="btn btn-primary">Siguiente</button>
    </>
  )
}
