import { worldCupLogo1982 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import {
  backgroundWorldCup1982_1,
  backgroundWorldCup1982_2,
  backgroundWorldCup1982_3,
} from '@/shared/assets/backgrounds'
import { finalStageMatches1982 } from '../final-stage/finalStageMatches1982'
import {
  worldCupLogoForCard1982,
  worldCupLogoWithoutBackground1982,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model'

export const worldCup1982: ChampionshipInfo = {
  id: '12-world-cup',
  title: '1982 FIFA World Cup',
  date: '13 June - 11 July 1982',
  logo: {
    forCard: worldCupLogoForCard1982,
    origin: worldCupLogo1982,
    withoutBackground: worldCupLogoWithoutBackground1982,
  },
  background: [
    backgroundWorldCup1982_1,
    backgroundWorldCup1982_2,
    backgroundWorldCup1982_3,
  ],
  hostCountry: ['Spain'],
  finalStage: finalStageMatches1982,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
