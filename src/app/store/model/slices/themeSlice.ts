import { createSlice } from '@reduxjs/toolkit'
import { ThemeMode } from '../types'

const initialState: ThemeMode = {
  mode: 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
