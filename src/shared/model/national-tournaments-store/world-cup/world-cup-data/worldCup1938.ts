import { worldCupLogo1938 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { backgroundWorldCup1938_2 } from '@/shared/assets/backgrounds'
import { finalStageMatches1938 } from '../final-stage/finalStageMatches1938'

export const worldCup1938: TournamentInfo = {
  id: '3-world-cup',
  title: '1938 FIFA World Cup',
  date: '4-19 June 1938',
  logo: worldCupLogo1938,
  background: [backgroundWorldCup1938_2],
  hostCountry: ['France'],
  finalStage: finalStageMatches1938,
  qualification: [],
}
