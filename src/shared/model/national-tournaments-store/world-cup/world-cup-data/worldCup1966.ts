import { worldCupLogo1966 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { backgroundWorldCup1966_1, backgroundWorldCup1966_2 } from '@/shared/assets/backgrounds'
import { finalStageMatches1966 } from '../final-stage/finalStageMatches1966'

export const worldCup1966: TournamentInfo = {
  id: '8-world-cup',
  title: '1966 FIFA World Cup',
  date: '11-30 July 1966',
  logo: worldCupLogo1966,
  background: [backgroundWorldCup1966_1, backgroundWorldCup1966_2],
  hostCountry: ['England'],
  finalStage: finalStageMatches1966,
  qualification: [],
}
