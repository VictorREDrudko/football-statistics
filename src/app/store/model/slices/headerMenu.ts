import { createSlice } from '@reduxjs/toolkit'
import { HeaderMenu } from '../types'
import { PATH } from '@/shared/constants'

const initialState: HeaderMenu = [
  { title: 'About', path: PATH.about },
  { title: 'Tournaments', path: PATH.tournaments },
  { title: 'National teams', path: PATH.teams },
  { title: 'Clubs', path: PATH.clubs },
]

export const headerMenuSlice = createSlice({
  name: 'header-menu',
  initialState,
  reducers: {},
})

export default headerMenuSlice.reducer
