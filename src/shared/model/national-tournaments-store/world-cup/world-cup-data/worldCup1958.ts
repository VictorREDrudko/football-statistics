import { worldCupLogo1958 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { backgroundWorldCup1958_1 } from '@/shared/assets/backgrounds'
import { finalStageMatches1958 } from '../final-stage/finalStageMatches1958'

export const worldCup1958: TournamentInfo = {
  id: '6-world-cup',
  title: '1958 FIFA World Cup',
  date: '8-29 June 1958',
  logo: worldCupLogo1958,
  background: [backgroundWorldCup1958_1],
  hostCountry: ['Sweden'],
  finalStage: finalStageMatches1958,
  qualification: [],
}
