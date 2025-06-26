import { worldCupLogo2002 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { backgroundWorldCup2002_1, backgroundWorldCup2002_2 } from '@/shared/assets/backgrounds'
import { finalStageMatches1982 } from '../final-stage/finalStageMatches1982'

export const worldCup2002: TournamentInfo = {
  id: '12-world-cup',
  title: '2002 FIFA World Cup',
  date: '31 May - 30 June 2002',
  logo: worldCupLogo2002,
  background: [backgroundWorldCup2002_1, backgroundWorldCup2002_2],
  hostCountry: ['Korea Republic', 'Japan'],
  finalStage: finalStageMatches1982,
  qualification: [],
}
