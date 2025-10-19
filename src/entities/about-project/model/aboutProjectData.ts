import { headerLogo } from '@/shared/assets'
import { AboutProjectData } from './types'
import { statisticsIcon, viewIcon, thinkIcon, historyIcon } from '../assets'

export const aboutProjectData: AboutProjectData = {
  title: 'Football is Life',
  text: [
    "The app 'Football is Life' is your personal football analytics hub",
    'It features detailed statistics on matches, club performances, and national teams, along with a unique option to create your own rankings based on their results',
    'You can analyze data, compare teams, and shape your own perspective on the football world.',
    "It's the perfect tool for those who love not just watching the game but truly understanding its dynamics!",
  ],
  iconsPath: {
    projectLogo: headerLogo.projectLogo.dark,
    statisticsIcon,
    viewIcon,
    thinkIcon,
    historyIcon,
  },
}
