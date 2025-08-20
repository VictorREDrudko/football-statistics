import { worldCupLogo1990 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import { finalStageMatches1990 } from '../final-stage/finalStageMatches1990'
import {
  backgroundWorldCup1990_1,
  backgroundWorldCup1990_2,
} from '@/shared/assets/backgrounds'
import {
  worldCupLogoForCard1990,
  worldCupLogoWithoutBackground1990,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1990: ChampionshipInfo = {
  id: '14-world-cup',
  title: '1990 FIFA World Cup',
  date: '8 June - 8 July 1990',
  logo: {
    forCard: worldCupLogoForCard1990,
    origin: worldCupLogo1990,
    withoutBackground: worldCupLogoWithoutBackground1990,
  },
  background: [backgroundWorldCup1990_1, backgroundWorldCup1990_2],
  hostCountry: ['Italy'],
  finalStage: finalStageMatches1990,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
