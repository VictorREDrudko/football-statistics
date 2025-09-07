// import { PATH } from '@/app/model/path'
// import {
//   afcAsianCupTrophy,
//   afcLogo2,
//   africaCupOfNationsTrophy,
//   cafLogo2,
//   concacafGoldCupTrophy,
//   concacafNationsLeagueTrophy,
//   conmebolCopaAmericaTrophy,
//   conmebolLogo,
//   europeanChampionshipTrophy,
//   fifaLogo,
//   ofcLogo2,
//   ofcNationsCupTrophy,
//   ofcChampionsLeagueTrophy,
//   uefaLogo,
//   uefaLogo2,
//   worldCupTrophy,
//   clubWorldCupTrophy,
//   fifaConfederationsCupTrophy,
//   concacafLogo2,
//   concacafChampionsCupTrophy,
//   conmebolCopaLibertadoresTrophy,
//   conmebolCopaSudamericanaTrophy,
//   conmebolRecopaSudamericanaTrophy,
//   afcChampionsLeagueEliteTrophy,
//   afcChampionsLeagueTwoTrophy,
//   afcAsianSuperCupTrophy,
//   africanNationsChampionshipTrophy,
//   cafChampionsLeagueTrophy,
//   cafConfederationCupTrophy,
//   cafSuperCupTrophy,
//   uefaNationsLeagueTrophy,
//   uefaChampionsLeagueTrophy,
//   uefaEuropaLeagueTrophy,
//   uefaConferenceLeagueTrophy,
//   uefaSuperCupTrophy,
//   uefaCupWinnersCupTrophy,
//   uefaIntertotoCupTrophy,
//   uefaInterCitiesFairsCupTrophy,
// } from '@/shared/assets/footbalStructure'
import { PATH } from '@/shared/constants/path'
import {
  fifaLogo,
  worldCupTrophy,
  fifaConfederationsCupTrophy,
  clubWorldCupTrophy,
  uefaLogo2,
  europeanChampionshipTrophy,
  uefaNationsLeagueTrophy,
  uefaChampionsLeagueTrophy,
  uefaEuropaLeagueTrophy,
  uefaConferenceLeagueTrophy,
  uefaSuperCupTrophy,
  uefaCupWinnersCupTrophy,
  uefaIntertotoCupTrophy,
  uefaInterCitiesFairsCupTrophy,
  cafLogo2,
  africaCupOfNationsTrophy,
  africanNationsChampionshipTrophy,
  cafChampionsLeagueTrophy,
  cafConfederationCupTrophy,
  cafSuperCupTrophy,
  afcLogo2,
  afcAsianCupTrophy,
  afcChampionsLeagueEliteTrophy,
  afcChampionsLeagueTwoTrophy,
  afcAsianSuperCupTrophy,
  conmebolLogo,
  conmebolCopaAmericaTrophy,
  conmebolCopaLibertadoresTrophy,
  conmebolCopaSudamericanaTrophy,
  conmebolRecopaSudamericanaTrophy,
  concacafLogo2,
  concacafGoldCupTrophy,
  concacafNationsLeagueTrophy,
  concacafChampionsCupTrophy,
  ofcLogo2,
  ofcNationsCupTrophy,
  ofcChampionsLeagueTrophy,
} from '@/shared/assets/image/footbalStructure'
import { FootballStructure } from './types'

export const footballStructure: FootballStructure = {
  internationalLevel: {
    FIFA: {
      governingBodies: {
        code: 'FIFA',
        fullName: 'Federation Internationale de Football Association',
        logoPath: fifaLogo,
      },
      tournaments: {
        nationalTeamLevel: {
          worldCup: {
            name: 'FIFA World Cup',
            isActive: true,
            trophyIconPath: worldCupTrophy,
            path: PATH.worldCup,
          },
          confederationsCup: {
            name: 'FIFA Confederations Cup',
            isActive: false,
            trophyIconPath: fifaConfederationsCupTrophy,
            path: PATH.confederationsCup,
          },
        },
        clubLevel: {
          clubWorldCup: {
            name: 'FIFA Club World Cup',
            isActive: true,
            trophyIconPath: clubWorldCupTrophy,
            path: PATH.clubWorldCup,
          },
        },
      },
    },
  },
  continentalLevel: {
    UEFA: {
      governingBodies: {
        code: 'UEFA',
        fullName: 'Union of European Football Associations',
        logoPath: uefaLogo2,
      },
      tournaments: {
        nationalTeamLevel: {
          euro: {
            name: 'UEFA European Football Championship',
            isActive: true,
            trophyIconPath: europeanChampionshipTrophy,
            path: PATH.euro,
          },
          uefaNationsLeague: {
            name: 'UEFA Nations League',
            isActive: true,
            trophyIconPath: uefaNationsLeagueTrophy,
            path: PATH.uefaNationsLeague,
          },
        },
        clubLevel: {
          uefaChampionsLeague: {
            name: 'UEFA Champions League',
            isActive: true,
            trophyIconPath: uefaChampionsLeagueTrophy,
            path: PATH.uefaChampionsLeague,
          },
          uefaEuropaLeague: {
            name: 'UEFA Europa League',
            isActive: true,
            trophyIconPath: uefaEuropaLeagueTrophy,
            path: PATH.uefaEuropaLeague,
          },
          uefaConferenceLeague: {
            name: 'UEFA Conference League',
            isActive: true,
            trophyIconPath: uefaConferenceLeagueTrophy,
            path: PATH.uefaConferenceLeague,
          },
          uefaSuperLeague: {
            name: 'UEFA Super Cup',
            isActive: true,
            trophyIconPath: uefaSuperCupTrophy,
            path: PATH.uefaSuperLeague,
          },
          uefaCupWinnersCup: {
            name: "UEFA Cup Winners' Cup",
            isActive: false,
            trophyIconPath: uefaCupWinnersCupTrophy,
            path: PATH.uefaCupWinnersCup,
          },
          uefaIntertotoCup: {
            name: 'UEFA Intertoto Cup',
            isActive: false,
            trophyIconPath: uefaIntertotoCupTrophy,
            path: PATH.uefaIntertotoCup,
          },
          uefaInterCitiesFairsCup: {
            name: 'Inter-Cities Fairs Cup',
            isActive: false,
            trophyIconPath: uefaInterCitiesFairsCupTrophy,
            path: PATH.uefaInterCitiesFairsCup,
          },
        },
      },
    },
    CAF: {
      governingBodies: {
        code: 'CAF',
        fullName: 'Confederation of African Football',
        logoPath: cafLogo2,
      },
      tournaments: {
        nationalTeamLevel: {
          africaCupNations: {
            name: 'Africa Cup of Nations',
            isActive: true,
            trophyIconPath: africaCupOfNationsTrophy,
            path: PATH.africaCupNations,
          },
          africanNationsChampionship: {
            name: 'African Nations Championship',
            isActive: true,
            trophyIconPath: africanNationsChampionshipTrophy,
            path: PATH.africanNationsChampionship,
          },
        },
        clubLevel: {
          cafChampionsLeague: {
            name: 'CAF Champions League',
            isActive: true,
            trophyIconPath: cafChampionsLeagueTrophy,
            path: PATH.cafChampionsLeague,
          },
          cafConfederationCup: {
            name: 'CAF Confederation Cup',
            isActive: true,
            trophyIconPath: cafConfederationCupTrophy,
            path: PATH.cafConfederationCup,
          },
          cafSuperCup: {
            name: 'CAF Super Cup',
            isActive: true,
            trophyIconPath: cafSuperCupTrophy,
            path: PATH.cafSuperCup,
          },
        },
      },
    },
    AFC: {
      governingBodies: {
        code: 'AFC',
        fullName: 'Asian Football Confederation',
        logoPath: afcLogo2,
      },
      tournaments: {
        nationalTeamLevel: {
          afcAsianCup: {
            name: 'AFC Asian Cup',
            isActive: true,
            trophyIconPath: afcAsianCupTrophy,
            path: PATH.afcAsianCup,
          },
        },
        clubLevel: {
          afcChampionsLeagueElite: {
            name: 'AFC Champions League Elite',
            isActive: true,
            trophyIconPath: afcChampionsLeagueEliteTrophy,
            path: PATH.afcChampionsLeagueElite,
          },
          afcChampionsLeagueTwo: {
            name: 'AFC Champions League Two',
            isActive: true,
            trophyIconPath: afcChampionsLeagueTwoTrophy,
            path: PATH.afcChampionsLeagueTwo,
          },
          afcSuperCup: {
            name: 'Asian Super Cup',
            isActive: true,
            trophyIconPath: afcAsianSuperCupTrophy,
            path: PATH.afcSuperCup,
          },
        },
      },
    },
    CONMEBOL: {
      governingBodies: {
        code: 'CONMEBOL',
        fullName: 'South American Football Confederation',
        logoPath: conmebolLogo,
      },
      tournaments: {
        nationalTeamLevel: {
          conmebolCopaAmerica: {
            name: 'CONMEBOL Copa America',
            isActive: true,
            trophyIconPath: conmebolCopaAmericaTrophy,
            path: PATH.conmebolCopaAmerica,
          },
        },
        clubLevel: {
          conmebolCopaLibertadores: {
            name: 'CONMEBOL Copa Libertadores',
            isActive: true,
            trophyIconPath: conmebolCopaLibertadoresTrophy,
            path: PATH.conmebolCopaLibertadores,
          },
          conmebolCopaSudamericana: {
            name: 'CONMEBOL Copa Sudamericana',
            isActive: true,
            trophyIconPath: conmebolCopaSudamericanaTrophy,
            path: PATH.conmebolCopaSudamericana,
          },
          conmebolRecopaSudamericana: {
            name: 'CONMEBOL Recopa Sudamericana',
            isActive: true,
            trophyIconPath: conmebolRecopaSudamericanaTrophy,
            path: PATH.conmebolRecopaSudamericana,
          },
        },
      },
    },
    CONCACAF: {
      governingBodies: {
        code: 'CONCACAF',
        fullName:
          'Confederation of North, Central America and Caribbean Association Football',
        logoPath: concacafLogo2,
      },
      tournaments: {
        nationalTeamLevel: {
          concacafGoldCup: {
            name: 'CONCACAF Gold Cup',
            isActive: true,
            trophyIconPath: concacafGoldCupTrophy,
            path: PATH.concacafGoldCup,
          },
          concacafNationsLeague: {
            name: 'CONCACAF Nations League',
            isActive: true,
            trophyIconPath: concacafNationsLeagueTrophy,
            path: PATH.concacafNationsLeague,
          },
        },
        clubLevel: {
          concacafChampionsCup: {
            name: 'CONCACAF Champions Cup',
            isActive: true,
            trophyIconPath: concacafChampionsCupTrophy,
            path: PATH.concacafChampionsCup,
          },
        },
      },
    },
    OFC: {
      governingBodies: {
        code: 'OFC',
        fullName: 'Federation Internationale de Football Association',
        logoPath: ofcLogo2,
      },
      tournaments: {
        nationalTeamLevel: {
          ofcNationsCup: {
            name: 'OFC Nations Cup',
            isActive: true,
            trophyIconPath: ofcNationsCupTrophy,
            path: PATH.ofcNationsCup,
          },
        },
        clubLevel: {
          ofcChampionsLeague: {
            name: 'OFC Champions League',
            isActive: true,
            trophyIconPath: ofcChampionsLeagueTrophy,
            path: PATH.ofcChampionsLeague,
          },
        },
      },
    },
  },
  // nationalLevel: {},
}
