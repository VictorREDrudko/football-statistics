import { worldCupLogo1990 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { finalStageMatches1990 } from '../final-stage/finalStageMatches1990'
import { backgroundWorldCup1990_1, backgroundWorldCup1990_2 } from '@/shared/assets/backgrounds'

export const worldCup1990: TournamentInfo = {
  id: '14-world-cup',
  title: '1990 FIFA World Cup',
  date: '8 June - 8 July 1990',
  logo: worldCupLogo1990,
  background: [backgroundWorldCup1990_1, backgroundWorldCup1990_2],
  hostCountry: ['Italy'],
  finalStage: finalStageMatches1990,
  qualification: [],
}
