import { createSlice } from '@reduxjs/toolkit'

import { HistoryData } from '../types'
import {
  backgroundHistoryPageDark,
  backgroundHistoryPageLight,
} from '@/shared/assets'

const initialState: HistoryData = {
  en: {
    title: 'Football History',
    info: [
      '1848 The Cambridge football rules',
      '1850s Many clubs were created',
      '1857 Codes of rules Sheffield Football Club',
      '1863 The first set of rules of The Football Association',
      '1872 The first official international football match and create oldest football competition is the Football Association Cup',
      '1888 Was formed the first Football League',
      '1904 Was formed FIFA',
      '1930 The first FIFA World Cup',
    ],
  },
  ru: {
    title: 'История футбола',
    info: [
      '1848 Кембриджские футбольные правила',
      '1850е Создание множества клубов',
      '1857 Кодекс правил футбольного клуба «Шеффилд»',
      '1863 Первый свод правил Футбольной ассоциации',
      '1872 Первый официальный международный футбольный матч и создание старейшего футбольного турнира — Кубка Футбольной ассоциации',
      '1888 Создание первой Футбольной лиги',
      '1904 Создание ФИФА',
      '1930 Первый чемпионат мира ФИФА',
    ],
  },
  background: {
    dark: backgroundHistoryPageDark,
    light: backgroundHistoryPageLight,
  },
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
})

export default historySlice.reducer
