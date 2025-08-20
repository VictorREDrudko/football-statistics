import { worldCupLogo1986 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import {
  backgroundWorldCup1986_1,
  backgroundWorldCup1986_2,
  backgroundWorldCup1986_3,
} from '@/shared/assets/backgrounds'
import { finalStageMatches1986 } from '../final-stage/finalStageMatches1986'
import {
  worldCupLogoForCard1986,
  worldCupLogoWithoutBackground1986,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1986: ChampionshipInfo = {
  id: '13-world-cup',
  title: '1986 FIFA World Cup',
  date: '31 May - 29 June 1986',
  logo: {
    forCard: worldCupLogoForCard1986,
    origin: worldCupLogo1986,
    withoutBackground: worldCupLogoWithoutBackground1986,
  },
  background: [
    backgroundWorldCup1986_1,
    backgroundWorldCup1986_2,
    backgroundWorldCup1986_3,
  ],
  hostCountry: ['Mexico'],
  finalStage: finalStageMatches1986,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
