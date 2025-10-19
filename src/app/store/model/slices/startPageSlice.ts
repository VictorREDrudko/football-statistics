import { createSlice } from '@reduxjs/toolkit'
import { backgroundStartPage } from '@/shared/assets'
import { StartPageData } from '../types'

const initialState: StartPageData = {
  title: 'football is life',
  text: 'This project is about football',
  backgroundPath: backgroundStartPage,
}

export const startPageSlice = createSlice({
  name: 'start-page',
  initialState,
  reducers: {},
})

export default startPageSlice.reducer
