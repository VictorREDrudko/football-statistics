import { worldCupLogo1974 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { finalStageMatches1974 } from '../final-stage/finalStageMatches1974'
import {
  backgroundWorldCup1974_1,
  backgroundWorldCup1974_2,
  backgroundWorldCup1974_3,
} from '@/shared/assets/backgrounds'

export const worldCup1974: TournamentInfo = {
  id: '10-world-cup',
  title: '1974 FIFA World Cup',
  date: '13 June - 7 July 1974',
  logo: worldCupLogo1974,
  background: [backgroundWorldCup1974_1, backgroundWorldCup1974_2, backgroundWorldCup1974_3],
  hostCountry: ['Germany'],
  finalStage: finalStageMatches1974,
  qualification: [],
}
