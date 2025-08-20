import { worldCupLogo2006 } from '@/shared/assets'
import {
  backgroundWorldCup2006_1,
  backgroundWorldCup2006_2,
} from '@/shared/assets/backgrounds'
import { finalStageMatches2006 } from '../final-stage/finalStageMatches2006'
import {
  worldCupLogoForCard2006,
  worldCupLogoWithoutBackground2006,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'
import { ChampionshipInfo } from '../../types'

export const worldCup2006: ChampionshipInfo = {
  id: '18-world-cup',
  title: '2006 FIFA World Cup',
  date: '9 June - 9 July 2006',
  logo: {
    forCard: worldCupLogoForCard2006,
    origin: worldCupLogo2006,
    withoutBackground: worldCupLogoWithoutBackground2006,
  },
  background: [backgroundWorldCup2006_1, backgroundWorldCup2006_2],
  hostCountry: ['Germany'],
  finalStage: finalStageMatches2006,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
