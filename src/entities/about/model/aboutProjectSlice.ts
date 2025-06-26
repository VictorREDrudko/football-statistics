import { createSlice } from '@reduxjs/toolkit'
import { projectLogo } from '@/shared/assets'
import statisticsIconPath from '../assets/statistics-icon.png'
import viewIconPath from '../assets/view-icon.png'
import thinkIconPath from '../assets/think-icon.png'
import { AboutProjectData } from './types'

const initialState: AboutProjectData = {
  title: 'Football is Life',
  text: [
    "The app 'Football is Life' is your personal football analytics hub",
    'It features detailed statistics on matches, club performances, and national teams, along with a unique option to create your own rankings based on their results',
    'You can analyze data, compare teams, and shape your own perspective on the football world.',
    "It's the perfect tool for those who love not just watching the game but truly understanding its dynamics!",
  ],
  iconsPath: [projectLogo, statisticsIconPath, viewIconPath, thinkIconPath],
}

export const aboutProjectSlice = createSlice({
  name: 'about-project',
  initialState,
  reducers: {},
})

export default aboutProjectSlice.reducer
