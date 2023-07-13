import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

export const PokemonApp = () => {
  const dispatch = useDispatch()
  const { page, pokemons, isLoading } = useSelector((store) => store.pokemons)

  const handleNextPage = () => dispatch(getPokemons(page))

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      {isLoading && <p>Loading...</p>}
      <hr />
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      {!isLoading && (
        <p>
          {(page - 1) * 10} - {page * 10}
        </p>
      )}
      <button disabled={isLoading} onClick={handleNextPage}>
        next
      </button>
    </>
  )
}
