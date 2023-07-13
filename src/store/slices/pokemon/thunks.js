import { pokemonApi } from '../../../api/pokemonApi'
import { loadPokemons, setPokemons } from './pokemonSlice'

export const getPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(loadPokemons()) // changes pokemon state loading property to be true
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))
  }
}
