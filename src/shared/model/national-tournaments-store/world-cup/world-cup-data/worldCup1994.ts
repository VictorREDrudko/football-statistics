import { worldCupLogo1994 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { finalStageMatches1994 } from '../final-stage/finalStageMatches1994'
import { backgroundWorldCup1994_1, backgroundWorldCup1994_2 } from '@/shared/assets/backgrounds'

export const worldCup1994: TournamentInfo = {
  id: '15-world-cup',
  title: '1994 FIFA World Cup',
  date: '17 June- 17 July 1994',
  logo: worldCupLogo1994,
  background: [backgroundWorldCup1994_1, backgroundWorldCup1994_2],
  hostCountry: ['United States'],
  finalStage: finalStageMatches1994,
  qualification: [],
}
