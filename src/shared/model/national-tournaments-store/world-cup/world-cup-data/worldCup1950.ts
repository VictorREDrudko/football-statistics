import { worldCupLogo1950 } from '@/shared/assets'
import { ChampionshipInfo } from '../../types'
import { finalStageMatches1950 } from '../final-stage/finalStageMatches1950'
import {
  backgroundWorldCup1950_1,
  backgroundWorldCup1950_2,
} from '@/shared/assets/backgrounds'
import {
  worldCupLogoForCard1950,
  worldCupLogoWithoutBackground1950,
} from '@/shared/assets/worldCupLogo'
import { footballStructure } from '@/shared/model/football-structure/footballStructure'

export const worldCup1950: ChampionshipInfo = {
  id: '4-world-cup',
  title: '1950 FIFA World Cup',
  date: '24 June - 16 July 1950',
  logo: {
    forCard: worldCupLogoForCard1950,
    origin: worldCupLogo1950,
    withoutBackground: worldCupLogoWithoutBackground1950,
  },
  background: [backgroundWorldCup1950_1, backgroundWorldCup1950_2],
  hostCountry: ['Brazil'],
  finalStage: finalStageMatches1950,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
