import { createSlice } from '@reduxjs/toolkit'
import {
  backgroundStartPageDark,
  backgroundStartPageLight,
  bigLogoDark,
  bigLogoLight,
} from '@/shared/assets'
import { StartPageData } from '../types'

const initialState: StartPageData = {
  en: {
    title: 'football is life',
    subtitle: 'This project is about football',
    text: 'Where Stats Tell the Real Story...',
  },
  ru: {
    title: 'футбол - жизнь',
    subtitle: 'Это проект о футболе',
    text: 'Где статистика рассказывает реальную историю...',
  },
  backgroundPath: {
    dark: backgroundStartPageDark,
    light: backgroundStartPageLight,
  },
  logoPath: {
    dark: bigLogoDark,
    light: bigLogoLight,
  },
}

export const startPageSlice = createSlice({
  name: 'start-page',
  initialState,
  reducers: {},
})

export default startPageSlice.reducer
