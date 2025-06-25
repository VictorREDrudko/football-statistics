import { worldCupLogo1970 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { finalStageMatches1970 } from '../final-stage/finalStageMatches1970'
import { backgroundWorldCup1970_1, backgroundWorldCup1970_2 } from '@/shared/assets/backgrounds'

export const worldCup1970: TournamentInfo = {
  id: '9-world-cup',
  title: '1970 FIFA World Cup',
  date: '31 May - 21 June 1970',
  logo: worldCupLogo1970,
  background: [backgroundWorldCup1970_1, backgroundWorldCup1970_2],
  hostCountry: ['Mexico'],
  finalStage: finalStageMatches1970,
  qualification: [],
}
