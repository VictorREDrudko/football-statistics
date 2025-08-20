import { worldCupLogo1958 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import { backgroundWorldCup1958_1 } from '@/shared/assets/backgrounds'
import { finalStageMatches1958 } from '../final-stage/finalStageMatches1958'
import {
  worldCupLogoForCard1958,
  worldCupLogoWithoutBackground1958,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1958: ChampionshipInfo = {
  id: '6-world-cup',
  title: '1958 FIFA World Cup',
  date: '8-29 June 1958',
  logo: {
    forCard: worldCupLogoForCard1958,
    origin: worldCupLogo1958,
    withoutBackground: worldCupLogoWithoutBackground1958,
  },
  background: [backgroundWorldCup1958_1],
  hostCountry: ['Sweden'],
  finalStage: finalStageMatches1958,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
