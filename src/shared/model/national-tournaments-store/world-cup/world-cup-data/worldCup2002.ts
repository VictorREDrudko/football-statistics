import { worldCupLogo2002 } from '@/shared/assets'

import {
  backgroundWorldCup2002_1,
  backgroundWorldCup2002_2,
} from '@/shared/assets/backgrounds'
import { finalStageMatches2002 } from '../final-stage/finalStageMatches2002'
import { worldCupLogoForCard2002 } from '@/shared/assets/worldCupLogo'
import { ChampionshipInfo } from '../../types'
import { footballStructure } from '@/shared/model'

export const worldCup2002: ChampionshipInfo = {
  id: '17-world cup',
  title: '2002 FIFA World Cup',
  date: '31 May - 30 June 2002',
  logo: {
    forCard: worldCupLogoForCard2002,
    origin: worldCupLogo2002,
  },
  background: [backgroundWorldCup2002_1, backgroundWorldCup2002_2],
  hostCountry: ['Korea Republic', 'Japan'],
  finalStage: finalStageMatches2002,
  qualification: [],
  info: footballStructure.internationalLevel.FIFA.tournaments.nationalTeamLevel
    .worldCup,
}
