import { worldCupLogo1938 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import { backgroundWorldCup1938_2 } from '@/shared/assets/backgrounds'
import { finalStageMatches1938 } from '../final-stage/finalStageMatches1938'
import {
  worldCupLogoForCard1938,
  worldCupLogoWithoutBackground1938,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1938: ChampionshipInfo = {
  id: '3-world-cup',
  title: '1938 FIFA World Cup',
  date: '4-19 June 1938',
  logo: {
    forCard: worldCupLogoForCard1938,
    origin: worldCupLogo1938,
    withoutBackground: worldCupLogoWithoutBackground1938,
  },
  background: [backgroundWorldCup1938_2],
  hostCountry: ['France'],
  finalStage: finalStageMatches1938,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
