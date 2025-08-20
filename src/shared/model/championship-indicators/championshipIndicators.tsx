import {
  attendanceIcon,
  dateIcon,
  goalIcon,
  hostCountryIcon,
  matchesIcon,
  positionIcon,
  scorerIcon,
  teamsIcon,
} from '@/shared/assets/iconIndicate'
import { ChampionshipIndicators, Indicator } from './types'

const nationalChampionshipIndicators: Indicator[] = [
  { icon: hostCountryIcon, indicator: 'Host countries:' },
  { icon: dateIcon, indicator: 'Dates:' },
  { icon: positionIcon, indicator: 'Final positions:' },
  { icon: teamsIcon, indicator: 'Teams:' },
  { icon: matchesIcon, indicator: 'Matches played:' },
  { icon: goalIcon, indicator: 'Goals scored:' },
  { icon: attendanceIcon, indicator: 'Attendance:' },
  { icon: scorerIcon, indicator: 'Top scorer(s):' },
]

export const championshipIndicators: ChampionshipIndicators = {
  'world-cup': nationalChampionshipIndicators,
}
