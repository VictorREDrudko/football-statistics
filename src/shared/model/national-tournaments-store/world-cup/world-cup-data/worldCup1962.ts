import { worldCupLogo1962 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { backgroundWorldCup1962_2 } from '@/shared/assets/backgrounds'
import { finalStageMatches1962 } from '../final-stage/finalStageMatches1962'

export const worldCup1962: TournamentInfo = {
  id: '7-world-cup',
  title: '1962 FIFA World Cup',
  date: '30 May - 17 June 1962',
  logo: worldCupLogo1962,
  background: [backgroundWorldCup1962_2],
  hostCountry: ['Chile'],
  finalStage: finalStageMatches1962,
  qualification: [],
}
