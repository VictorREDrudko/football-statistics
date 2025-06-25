import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1962: MatchInfo[] = [
  new Match(
    '30.05.1962',
    tournamentStages.group1,
    ['Uruguay', 'Colombia'],
    [[2, 1], [], []],
    ['Cubilla', 'Sasía'],
    ['56', '75'],
    ['Zuluaga'],
    ['19(p)'],
    { ...stadiumsStore.Chile?.dittborn.locationAndNames } as StadiumInfo,
    '7 908'
  ),

  new Match(
    '31.05.1962',
    tournamentStages.group1,
    ['Soviet Union', 'Yugoslavia'],
    [[2, 0], [], []],
    ['Ivanov', 'Ponedelnik'],
    ['51', '83'],
    [],
    [],
    { ...stadiumsStore.Chile?.dittborn.locationAndNames } as StadiumInfo,
    '9 622'
  ),

  new Match(
    '02.06.1962',
    tournamentStages.group1,
    ['Yugoslavia', 'Uruguay'],
    [[3, 1], [], []],
    ['Skoblar', 'Galić', 'Jerković'],
    ['25(p)', '29', '49'],
    ['Cabrera'],
    ['19'],
    { ...stadiumsStore.Chile?.dittborn.locationAndNames } as StadiumInfo,
    '8 829'
  ),

  new Match(
    '03.06.1962',
    tournamentStages.group1,
    ['Soviet Union', 'Colombia'],
    [[4, 4], [], []],
    ['Ivanov', 'Chislenko', 'Ponedelnik'],
    ['8, 11', '10', '56'],
    ['Aceros', 'Coll', 'Rada', 'Klinger'],
    ['21', '68', '72', '86'],
    { ...stadiumsStore.Chile?.dittborn.locationAndNames } as StadiumInfo,
    '8 040'
  ),

  new Match(
    '06.06.1962',
    tournamentStages.group1,
    ['Soviet Union', 'Uruguay'],
    [[2, 1], [], []],
    ['Mamykin', 'Ivanov'],
    ['38', '89'],
    ['Sasía'],
    ['54'],
    { ...stadiumsStore.Chile?.dittborn.locationAndNames } as StadiumInfo,
    '9 973'
  ),

  new Match(
    '02.06.1962',
    tournamentStages.group1,
    ['Yugoslavia', 'Colombia'],
    [[5, 0], [], []],
    ['Galić', 'Jerković', 'Melić'],
    ['20, 61', '25, 87', '82'],
    [],
    [],
    { ...stadiumsStore.Chile?.dittborn.locationAndNames } as StadiumInfo,
    '7 167'
  ),

  new Match(
    '30.05.1962',
    tournamentStages.group2,
    ['Chile', 'Switzerland'],
    [[3, 1], [], []],
    ['L.Sánchez', 'Ramírez'],
    ['44, 55', '51'],
    ['Wüthrich'],
    ['6'],
    { ...stadiumsStore.Chile?.nacional.locationAndNames } as StadiumInfo,
    '65 006'
  ),

  new Match(
    '31.05.1962',
    tournamentStages.group2,
    ['Germany', 'Italy'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Chile?.nacional.locationAndNames } as StadiumInfo,
    '65 440'
  ),

  new Match(
    '02.06.1962',
    tournamentStages.group2,
    ['Chile', 'Italy'],
    [[2, 0], [], []],
    ['Ramírez', 'Toro'],
    ['73', '87'],
    [],
    [],
    { ...stadiumsStore.Chile?.nacional.locationAndNames } as StadiumInfo,
    '66 057'
  ),

  new Match(
    '03.06.1962',
    tournamentStages.group2,
    ['Germany', 'Switzerland'],
    [[2, 1], [], []],
    ['Brülls', 'Seeler'],
    ['45', '59'],
    ['Schneiter'],
    ['73'],
    { ...stadiumsStore.Chile?.nacional.locationAndNames } as StadiumInfo,
    '64 922'
  ),

  new Match(
    '06.06.1962',
    tournamentStages.group2,
    ['Germany', 'Chile'],
    [[2, 0], [], []],
    ['Szymaniak', 'Seeler'],
    ['21(p)', '82'],
    [],
    [],
    { ...stadiumsStore.Chile?.nacional.locationAndNames } as StadiumInfo,
    '67 224'
  ),

  new Match(
    '06.06.1962',
    tournamentStages.group2,
    ['Italy', 'Switzerland'],
    [[3, 0], [], []],
    ['Mora', 'Bulgarelli'],
    ['2', '65, 67'],
    [],
    [],
    { ...stadiumsStore.Chile?.nacional.locationAndNames } as StadiumInfo,
    '59 828'
  ),

  new Match(
    '30.05.1962',
    tournamentStages.group3,
    ['Brazil', 'Mexico'],
    [[2, 0], [], []],
    ['Zagallo', 'Pelé'],
    ['56', '73'],
    [],
    [],
    { ...stadiumsStore.Chile?.sausalito.locationAndNames } as StadiumInfo,
    '10 484'
  ),

  new Match(
    '31.05.1962',
    tournamentStages.group3,
    ['Czechoslovakia', 'Spain'],
    [[1, 0], [], []],
    ['Štibrányi'],
    ['80'],
    [],
    [],
    { ...stadiumsStore.Chile?.sausalito.locationAndNames } as StadiumInfo,
    '12 700'
  ),

  new Match(
    '02.06.1962',
    tournamentStages.group3,
    ['Brazil', 'Czechoslovakia'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Chile?.sausalito.locationAndNames } as StadiumInfo,
    '14 903'
  ),

  new Match(
    '03.06.1962',
    tournamentStages.group3,
    ['Spain', 'Mexico'],
    [[1, 0], [], []],
    ['Peiró'],
    ['90'],
    [],
    [],
    { ...stadiumsStore.Chile?.sausalito.locationAndNames } as StadiumInfo,
    '11 875'
  ),

  new Match(
    '06.06.1962',
    tournamentStages.group3,
    ['Brazil', 'Spain'],
    [[2, 1], [], []],
    ['Amarildo'],
    ['72, 86'],
    ['Adelardo'],
    ['35'],
    { ...stadiumsStore.Chile?.sausalito.locationAndNames } as StadiumInfo,
    '18 715'
  ),

  new Match(
    '07.06.1962',
    tournamentStages.group3,
    ['Mexico', 'Czechoslovakia'],
    [[3, 1], [], []],
    ['Díaz', 'Del Águila', 'Hernández'],
    ['12', '29', '90(p)'],
    ['Mašek'],
    ['1'],
    { ...stadiumsStore.Chile?.sausalito.locationAndNames } as StadiumInfo,
    '10 648'
  ),

  new Match(
    '30.05.1962',
    tournamentStages.group4,
    ['Argentina', 'Bulgaria'],
    [[1, 0], [], []],
    ['Facundo'],
    ['4'],
    [],
    [],
    { ...stadiumsStore.Chile?.teniente.locationAndNames } as StadiumInfo,
    '7 134'
  ),

  new Match(
    '31.05.1962',
    tournamentStages.group4,
    ['Hungary', 'England'],
    [[2, 1], [], []],
    ['Tichy', 'Albert'],
    ['17', '71'],
    ['Flowers'],
    ['60(p)'],
    { ...stadiumsStore.Chile?.teniente.locationAndNames } as StadiumInfo,
    '7 938'
  ),

  new Match(
    '02.06.1962',
    tournamentStages.group4,
    ['England', 'Argentina'],
    [[3, 1], [], []],
    ['Flowers', 'Charlton', 'Greaves'],
    ['17(p)', '42', '67'],
    ['Sanfilippo'],
    ['81'],
    { ...stadiumsStore.Chile?.teniente.locationAndNames } as StadiumInfo,
    '9 794'
  ),

  new Match(
    '03.06.1962',
    tournamentStages.group4,
    ['Hungary', 'Bulgaria'],
    [[6, 1], [], []],
    ['Albert', 'Tichy', 'Solymosi'],
    ['1, 6, 53', '8, 70', '12'],
    ['Sokolov'],
    ['64'],
    { ...stadiumsStore.Chile?.teniente.locationAndNames } as StadiumInfo,
    '7 442'
  ),

  new Match(
    '06.06.1962',
    tournamentStages.group4,
    ['Hungary', 'Argentina'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Chile?.teniente.locationAndNames } as StadiumInfo,
    '7 945'
  ),

  new Match(
    '07.06.1962',
    tournamentStages.group4,
    ['England', 'Bulgaria'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Chile?.teniente.locationAndNames } as StadiumInfo,
    '5 700'
  ),

  new Match(
    '10.06.1962',
    tournamentStages.quarterFinal,
    ['Chile', 'Soviet Union'],
    [[2, 1], [], []],
    ['L.Sánchez', 'Rojas'],
    ['11', '29'],
    ['Chislenko'],
    ['26'],
    { ...stadiumsStore.Chile?.dittborn.locationAndNames } as StadiumInfo,
    '17 268'
  ),

  new Match(
    '10.06.1962',
    tournamentStages.quarterFinal,
    ['Czechoslovakia', 'Hungary'],
    [[1, 0], [], []],
    ['Scherer'],
    ['13'],
    [],
    [],
    { ...stadiumsStore.Chile?.teniente.locationAndNames } as StadiumInfo,
    '11 690'
  ),

  new Match(
    '10.06.1962',
    tournamentStages.quarterFinal,
    ['Brazil', 'England'],
    [[3, 1], [], []],
    ['Garrincha', 'Vavá'],
    ['31, 59', '53'],
    ['Hitchens'],
    ['38'],
    { ...stadiumsStore.Chile?.sausalito.locationAndNames } as StadiumInfo,
    '17 736'
  ),

  new Match(
    '10.06.1962',
    tournamentStages.quarterFinal,
    ['Yugoslavia', 'Germany'],
    [[1, 0], [], []],
    ['Radaković'],
    ['85'],
    [],
    [],
    { ...stadiumsStore.Chile?.nacional.locationAndNames } as StadiumInfo,
    '63 324'
  ),

  new Match(
    '13.06.1962',
    tournamentStages.semiFinal,
    ['Czechoslovakia', 'Yugoslavia'],
    [[3, 1], [], []],
    ['Kadraba', 'Scherer'],
    ['48', '80, 84(p)'],
    ['Jerković'],
    ['69'],
    { ...stadiumsStore.Chile?.sausalito.locationAndNames } as StadiumInfo,
    '5 890'
  ),

  new Match(
    '13.06.1962',
    tournamentStages.semiFinal,
    ['Brazil', 'Chile'],
    [[4, 2], [], []],
    ['Garrincha', 'Vavá'],
    ['9, 32', '47, 78'],
    ['Toro', 'L.Sánchez'],
    ['42', '61(p)'],
    { ...stadiumsStore.Chile?.nacional.locationAndNames } as StadiumInfo,
    '76 594'
  ),

  new Match(
    '16.06.1962',
    tournamentStages.thirdPlace,
    ['Chile', 'Yugoslavia'],
    [[1, 0], [], []],
    ['Rojas'],
    ['90'],
    [],
    [],
    { ...stadiumsStore.Chile?.nacional.locationAndNames } as StadiumInfo,
    '66 697'
  ),

  new Match(
    '17.06.1962',
    tournamentStages.final,
    ['Brazil', 'Czechoslovakia'],
    [[3, 1], [], []],
    ['Amarildo', 'Zito', 'Vavá'],
    ['17', '69', '78'],
    ['Masopust'],
    ['15'],
    { ...stadiumsStore.Chile?.nacional.locationAndNames } as StadiumInfo,
    '68 679'
  ),
]
