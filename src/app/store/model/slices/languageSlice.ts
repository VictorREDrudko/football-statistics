import { createSlice } from '@reduxjs/toolkit'
import { LanguageMode } from '../types'

const initialState: LanguageMode = {
  mode: 'en',
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.mode = state.mode === 'en' ? 'ru' : 'en'
    },
  },
})

export const { toggleLanguage } = languageSlice.actions
export default languageSlice.reducer
