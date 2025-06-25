import { worldCupLogo1986 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import {
  backgroundWorldCup1986_1,
  backgroundWorldCup1986_2,
  backgroundWorldCup1986_3,
} from '@/shared/assets/backgrounds'
import { finalStageMatches1986 } from '../final-stage/finalStageMatches1986'

export const worldCup1986: TournamentInfo = {
  id: '13-world-cup',
  title: '1986 FIFA World Cup',
  date: '31 May - 29 June 1986',
  logo: worldCupLogo1986,
  background: [backgroundWorldCup1986_1, backgroundWorldCup1986_2, backgroundWorldCup1986_3],
  hostCountry: ['Mexico'],
  finalStage: finalStageMatches1986,
  qualification: [],
}
