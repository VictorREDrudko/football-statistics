import { worldCupLogo1934 } from '@/shared/assets'
import { TournamentInfo } from '../../types'
import { finalStageMatches1934 } from '../final-stage/finalStageMatches1934'
import { backgroundWorldCup1934_1, backgroundWorldCup1934_2 } from '@/shared/assets/backgrounds'

export const worldCup1934: TournamentInfo = {
  id: '2-world-cup',
  title: '1934 FIFA World Cup',
  date: '27 May - 10 June 1934',
  logo: worldCupLogo1934,
  background: [backgroundWorldCup1934_1, backgroundWorldCup1934_2],
  hostCountry: ['Italy'],
  finalStage: finalStageMatches1934,
  qualification: [],
}

