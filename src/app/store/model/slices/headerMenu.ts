import { createSlice } from '@reduxjs/toolkit'
import { HeaderMenu } from '../types'
import { PATH } from '@/shared/constants'

const initialState: HeaderMenu = {
  en: [
    { title: 'About', path: PATH.about },
    { title: 'Tournaments', path: PATH.tournaments },
    { title: 'National teams', path: PATH.teams },
    { title: 'Clubs', path: PATH.clubs },
  ],
  ru: [
    { title: 'О проекте', path: PATH.about },
    { title: 'Турниры', path: PATH.tournaments },
    { title: 'Сборные команды', path: PATH.teams },
    { title: 'Клубы', path: PATH.clubs },
  ],
}

export const headerMenuSlice = createSlice({
  name: 'header-menu',
  initialState,
  reducers: {},
})

export default headerMenuSlice.reducer
