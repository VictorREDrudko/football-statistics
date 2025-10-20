import { createSlice } from '@reduxjs/toolkit'
import { AboutProjectData } from '../types'
import {
  statisticsIconPathDark,
  statisticsIconPathLight,
  viewIconPathDark,
  viewIconPathLight,
  thinkIconPathDark,
  thinkIconPathLight,
  historyIconPathDark,
  historyIconPathLight,
  backgroundAboutProjectDark,
  backgroundAboutProjectLight,
  headerLogo,
} from '@/shared/assets'

const initialState: AboutProjectData = {
  en: {
    title: 'Football is Life',
    text: [
      "The app 'Football is Life' is your personal football analytics hub.",
      'It features detailed statistics on matches, club performances, and national teams, along with a unique option to create your own rankings based on their results',
      'You can analyze data, compare teams, and shape your own perspective on the football world.',
      "It's the perfect tool for those who love not just watching the game but truly understanding its dynamics!",
    ],
    link: 'Show about football history ...',
  },
  ru: {
    title: 'Футбол - жизнь',
    text: [
      'Приложение «Футбол — жизнь» — ваш персональный центр футбольной аналитики',
      'Приложение предоставляет подробную статистику матчей, турниров, клубов и сборных, а также уникальную возможность создавать собственные рейтинги на основе их результатов',
      'Вы можете анализировать данные, сравнивать команды и формировать собственное видение футбольного мира.',
      'Это идеальный инструмент для тех, кто любит не просто смотреть игру, но и по-настоящему понимать её динамику!',
    ],
    link: 'Посмотреть о футбольной истории ...',
  },
  iconsPath: {
    projectLogo: {
      dark: headerLogo.projectLogo.dark,
      light: headerLogo.projectLogo.light,
    },
    statisticsIcon: {
      dark: statisticsIconPathDark,
      light: statisticsIconPathLight,
    },
    viewIcon: { dark: viewIconPathDark, light: viewIconPathLight },
    thinkIcon: { dark: thinkIconPathDark, light: thinkIconPathLight },
    historyIcon: { dark: historyIconPathDark, light: historyIconPathLight },
  },
  background: {
    dark: backgroundAboutProjectDark,
    light: backgroundAboutProjectLight,
  },
}

export const aboutProjectSlice = createSlice({
  name: 'about-project',
  initialState,
  reducers: {},
})

export default aboutProjectSlice.reducer
