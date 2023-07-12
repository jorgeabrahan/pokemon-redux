import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1
    }
  }
})

export const { increment } = pokemonSlice.actions

export default pokemonSlice.reducer
