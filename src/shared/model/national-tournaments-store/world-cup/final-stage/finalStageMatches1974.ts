import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import {
  MatchInfo,
  StadiumInfo,
} from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/CHAMPIONSHIP_STAGES'

export const finalStageMatches1974: MatchInfo[] = [
  new Match(
    '14.06.1974',
    tournamentStages.group1,
    ['Germany', 'Chile'],
    [[1, 0], [], []],
    ['Breitner'],
    ['18'],
    [],
    [],
    { ...stadiumsStore.Germany?.olympiaB.locationAndNames } as StadiumInfo,
    '81 100'
  ),

  new Match(
    '14.06.1974',
    tournamentStages.group1,
    ['East Germany', 'Australia'],
    [[2, 0], [], []],
    ['Curran', 'Streich'],
    ['58(o.g.)', '72'],
    [],
    [],
    { ...stadiumsStore.Germany?.volkspark.locationAndNames } as StadiumInfo,
    '17 000'
  ),

  new Match(
    '18.06.1974',
    tournamentStages.group1,
    ['Germany', 'Australia'],
    [[3, 0], [], []],
    ['Overath', 'Cullmann', 'Müller'],
    ['12', '34', '53'],
    [],
    [],
    { ...stadiumsStore.Germany?.volkspark.locationAndNames } as StadiumInfo,
    '53 000'
  ),

  new Match(
    '18.06.1974',
    tournamentStages.group1,
    ['East Germany', 'Chile'],
    [[1, 1], [], []],
    ['Hoffmann'],
    ['55'],
    ['Ahumada'],
    ['69'],
    { ...stadiumsStore.Germany?.olympiaB.locationAndNames } as StadiumInfo,
    '28 300'
  ),

  new Match(
    '22.06.1974',
    tournamentStages.group1,
    ['Australia', 'Chile'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Germany?.volkspark.locationAndNames } as StadiumInfo,
    '17 400'
  ),

  new Match(
    '22.06.1974',
    tournamentStages.group1,
    ['East Germany', 'Germany'],
    [[1, 0], [], []],
    ['Sparwasser'],
    ['77'],
    [],
    [],
    { ...stadiumsStore.Germany?.volkspark.locationAndNames } as StadiumInfo,
    '60 200'
  ),

  new Match(
    '13.06.1974',
    tournamentStages.group2,
    ['Brazil', 'Yugoslavia'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Germany?.wald.locationAndNames } as StadiumInfo,
    '62 000'
  ),

  new Match(
    '14.06.1974',
    tournamentStages.group2,
    ['Scotland', 'DR Congo'],
    [[2, 0], [], []],
    ['Lorimer', 'Jordan'],
    ['26', '34'],
    [],
    [],
    { ...stadiumsStore.Germany?.westfalen.locationAndNames } as StadiumInfo,
    '25 800'
  ),

  new Match(
    '18.06.1974',
    tournamentStages.group2,
    ['Yugoslavia', 'DR Congo'],
    [[9, 0], [], []],
    ['Bajević', 'Šurjak', 'Oblak', 'Katalinski', 'Bogićević', 'Petković'],
    ['8', '14', '18', '22', '30', '35', '61', '65', '81'],
    [],
    [],
    { ...stadiumsStore.Germany?.parkGelsenk.locationAndNames } as StadiumInfo,
    '31 700'
  ),

  new Match(
    '18.06.1974',
    tournamentStages.group2,
    ['Scotland', 'Brazil'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Germany?.wald.locationAndNames } as StadiumInfo,
    '62 000'
  ),

  new Match(
    '22.06.1974',
    tournamentStages.group2,
    ['Scotland', 'Yugoslavia'],
    [[1, 1], [], []],
    ['Jordan'],
    ['88'],
    ['Karasi'],
    ['81'],
    { ...stadiumsStore.Germany?.wald.locationAndNames } as StadiumInfo,
    '56 000'
  ),

  new Match(
    '22.06.1974',
    tournamentStages.group2,
    ['Brazil', 'DR Congo'],
    [[3, 0], [], []],
    ['Jairzinho', 'Rivellino', 'Valdomiro'],
    ['12', '66', '79'],
    [],
    [],
    { ...stadiumsStore.Germany?.parkGelsenk.locationAndNames } as StadiumInfo,
    '36 200'
  ),

  new Match(
    '15.06.1974',
    tournamentStages.group3,
    ['Netherlands', 'Uruguay'],
    [[2, 0], [], []],
    ['Rep'],
    ['7', '86'],
    [],
    [],
    { ...stadiumsStore.Germany?.niedersachsen.locationAndNames } as StadiumInfo,
    '55 100'
  ),

  new Match(
    '15.06.1974',
    tournamentStages.group3,
    ['Sweden', 'Bulgaria'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Germany?.rhein.locationAndNames } as StadiumInfo,
    '23 800'
  ),

  new Match(
    '19.06.1974',
    tournamentStages.group3,
    ['Bulgaria', 'Uruguay'],
    [[1, 1], [], []],
    ['Bonev'],
    ['75'],
    ['Pavoni'],
    ['87'],
    { ...stadiumsStore.Germany?.niedersachsen.locationAndNames } as StadiumInfo,
    '13 400'
  ),

  new Match(
    '19.06.1974',
    tournamentStages.group3,
    ['Netherlands', 'Sweden'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Germany?.westfalen.locationAndNames } as StadiumInfo,
    '53 700'
  ),

  new Match(
    '23.06.1974',
    tournamentStages.group3,
    ['Netherlands', 'Bulgaria'],
    [[4, 1], [], []],
    ['Neeskens', 'Rep', 'de Jong'],
    ['5(p)', '44(p)', '71', '88'],
    ['Krol'],
    ['78(o.g.)'],
    { ...stadiumsStore.Germany?.westfalen.locationAndNames } as StadiumInfo,
    '53 300'
  ),

  new Match(
    '23.06.1974',
    tournamentStages.group3,
    ['Sweden', 'Uruguay'],
    [[3, 0], [], []],
    ['Edström', 'Sandberg'],
    ['46', '74', '77'],
    [],
    [],
    { ...stadiumsStore.Germany?.rhein.locationAndNames } as StadiumInfo,
    '28 300'
  ),

  new Match(
    '15.06.1974',
    tournamentStages.group4,
    ['Italy', 'Haiti'],
    [[3, 1], [], []],
    ['Rivera', 'Benetti', 'Anastasi'],
    ['52', '66', '79'],
    ['Sanon'],
    ['46'],
    { ...stadiumsStore.Germany?.olympiaM.locationAndNames } as StadiumInfo,
    '53 000'
  ),

  new Match(
    '15.06.1974',
    tournamentStages.group4,
    ['Poland', 'Argentina'],
    [[3, 2], [], []],
    ['Lato', 'Szarmach'],
    ['7', '8', '62'],
    ['Heredia', 'Babington'],
    ['60', '66'],
    { ...stadiumsStore.Germany?.neckar.locationAndNames } as StadiumInfo,
    '32 700'
  ),

  new Match(
    '19.06.1974',
    tournamentStages.group4,
    ['Argentina', 'Italy'],
    [[1, 1], [], []],
    ['Houseman'],
    ['20'],
    ['Perfumo'],
    ['35(o.g.)'],
    { ...stadiumsStore.Germany?.neckar.locationAndNames } as StadiumInfo,
    '70 100'
  ),

  new Match(
    '19.06.1974',
    tournamentStages.group4,
    ['Poland', 'Haiti'],
    [[7, 0], [], []],
    ['Lato', 'Deyna', 'Szarmach', 'Gorgoń'],
    ['17', '18', '30', '31', '34', '50', '87'],
    [],
    [],
    { ...stadiumsStore.Germany?.olympiaM.locationAndNames } as StadiumInfo,
    '25 300'
  ),

  new Match(
    '23.06.1974',
    tournamentStages.group4,
    ['Argentina', 'Haiti'],
    [[4, 1], [], []],
    ['Yazalde', 'Houseman', 'Ayala'],
    ['15', '18', '55', '68'],
    ['Sanon'],
    ['63'],
    { ...stadiumsStore.Germany?.olympiaM.locationAndNames } as StadiumInfo,
    '25 900'
  ),

  new Match(
    '23.06.1974',
    tournamentStages.group4,
    ['Poland', 'Italy'],
    [[2, 1], [], []],
    ['Szarmach', 'Deyna'],
    ['38', '44'],
    ['Capello'],
    ['85'],
    { ...stadiumsStore.Germany?.neckar.locationAndNames } as StadiumInfo,
    '70 100'
  ),

  new Match(
    '26.06.1974',
    tournamentStages.secondGroupRoundA,
    ['Netherlands', 'Argentina'],
    [[4, 0], [], []],
    ['Cruyff', 'Krol', 'Rep'],
    ['11', '25', '73', '90'],
    [],
    [],
    { ...stadiumsStore.Germany?.parkGelsenk.locationAndNames } as StadiumInfo,
    '56 548'
  ),

  new Match(
    '26.06.1974',
    tournamentStages.secondGroupRoundA,
    ['Brazil', 'East Germany'],
    [[1, 0], [], []],
    ['Rivellino'],
    ['60'],
    [],
    [],
    { ...stadiumsStore.Germany?.niedersachsen.locationAndNames } as StadiumInfo,
    '59 863'
  ),

  new Match(
    '30.06.1974',
    tournamentStages.secondGroupRoundA,
    ['Brazil', 'Argentina'],
    [[2, 1], [], []],
    ['Rivellino', 'Jairzinho'],
    ['32', '49'],
    ['Brindisi'],
    ['35'],
    { ...stadiumsStore.Germany?.niedersachsen.locationAndNames } as StadiumInfo,
    '39 400'
  ),

  new Match(
    '30.06.1974',
    tournamentStages.secondGroupRoundA,
    ['Netherlands', 'East Germany'],
    [[2, 0], [], []],
    ['Neeskens', 'Rensenbrink'],
    ['7', '59'],
    [],
    [],
    { ...stadiumsStore.Germany?.parkGelsenk.locationAndNames } as StadiumInfo,
    '68 348'
  ),

  new Match(
    '03.07.1974',
    tournamentStages.secondGroupRoundA,
    ['Argentina', 'East Germany'],
    [[1, 1], [], []],
    ['Houseman'],
    ['20'],
    ['Streich'],
    ['14'],
    { ...stadiumsStore.Germany?.parkGelsenk.locationAndNames } as StadiumInfo,
    '54 254'
  ),

  new Match(
    '03.07.1974',
    tournamentStages.secondGroupRoundB,
    ['Netherlands', 'Brazil'],
    [[2, 0], [], []],
    ['Neeskens', 'Cruyff'],
    ['50', '65'],
    [],
    [],
    { ...stadiumsStore.Germany?.westfalen.locationAndNames } as StadiumInfo,
    '53 700'
  ),

  new Match(
    '26.06.1974',
    tournamentStages.secondGroupRoundB,
    ['Germany', 'Yugoslavia'],
    [[2, 0], [], []],
    ['Breitner', 'Müller'],
    ['39', '82'],
    [],
    [],
    { ...stadiumsStore.Germany?.rhein.locationAndNames } as StadiumInfo,
    '67 385'
  ),

  new Match(
    '26.06.1974',
    tournamentStages.secondGroupRoundB,
    ['Poland', 'Sweden'],
    [[1, 0], [], []],
    ['Lato'],
    ['43'],
    [],
    [],
    { ...stadiumsStore.Germany?.neckar.locationAndNames } as StadiumInfo,
    '44 955'
  ),

  new Match(
    '30.06.1974',
    tournamentStages.secondGroupRoundB,
    ['Poland', 'Yugoslavia'],
    [[2, 1], [], []],
    ['Deyna', 'Lato'],
    ['24(p)', '62'],
    ['Karasi'],
    ['43'],
    { ...stadiumsStore.Germany?.neckar.locationAndNames } as StadiumInfo,
    '58 000'
  ),

  new Match(
    '30.06.1974',
    tournamentStages.secondGroupRoundB,
    ['Germany', 'Sweden'],
    [[4, 2], [], []],
    ['Overath', 'Bonhof', 'Grabowski', 'Hoeneß'],
    ['51', '52', '76', '89(p)'],
    ['Edström', 'Sandberg'],
    ['24', '53'],
    { ...stadiumsStore.Germany?.rhein.locationAndNames } as StadiumInfo,
    '67 800'
  ),

  new Match(
    '03.07.1974',
    tournamentStages.secondGroupRoundB,
    ['Germany', 'Poland'],
    [[1, 0], [], []],
    ['Müller'],
    ['76'],
    [],
    [],
    { ...stadiumsStore.Germany?.wald.locationAndNames } as StadiumInfo,
    '62 000'
  ),

  new Match(
    '03.07.1974',
    tournamentStages.secondGroupRoundB,
    ['Sweden', 'Yugoslavia'],
    [[2, 1], [], []],
    ['Edström', 'Torstensson'],
    ['29', '85'],
    ['Šurjak'],
    ['27'],
    { ...stadiumsStore.Germany?.rhein.locationAndNames } as StadiumInfo,
    '41 300'
  ),

  new Match(
    '06.07.1974',
    tournamentStages.thirdPlace,
    ['Poland', 'Brazil'],
    [[1, 0], [], []],
    ['Lato'],
    ['76'],
    [],
    [],
    { ...stadiumsStore.Germany?.olympiaM.locationAndNames } as StadiumInfo,
    '77 100'
  ),

  new Match(
    '07.07.1974',
    tournamentStages.final,
    ['Germany', 'Netherlands'],
    [[2, 1], [], []],
    ['Breitner', 'Müller'],
    ['25(p)', '43'],
    ['Neeskens'],
    ['2(p)'],
    { ...stadiumsStore.Germany?.olympiaM.locationAndNames } as StadiumInfo,
    '75 200'
  ),
]
