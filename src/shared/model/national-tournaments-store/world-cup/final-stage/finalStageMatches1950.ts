import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1950: MatchInfo[] = [
  // Группа 1
  new Match(
    '24.06.1950',
    tournamentStages.group1,
    ['Brazil', 'Mexico'],
    [[4, 0], [], []],
    ['Ademir', 'Jair', 'Baltazar'],
    ['30', '65', '71', '79'],
    [],
    [],
    { ...stadiumsStore.Brazil?.maracana.locationAndNames } as StadiumInfo,
    '81 649'
  ),

  new Match(
    '25.06.1950',
    tournamentStages.group1,
    ['Yugoslavia', 'Switzerland'],
    [[3, 0], [], []],
    ['Mitić', 'Tomašević', 'Ognjanov'],
    ['59', '70', '84'],
    [],
    [],
    { ...stadiumsStore.Brazil?.independencia.locationAndNames } as StadiumInfo,
    '7 336'
  ),

  new Match(
    '28.06.1950',
    tournamentStages.group1,
    ['Brazil', 'Switzerland'],
    [[2, 2], [], []],
    ['Alfredo', 'Baltazar'],
    ['3', '32'],
    ['Fatton'],
    ['17', '88'],
    { ...stadiumsStore.Brazil?.pacaembu.locationAndNames } as StadiumInfo,
    '42 032'
  ),

  new Match(
    '28.06.1950',
    tournamentStages.group1,
    ['Yugoslavia', 'Mexico'],
    [[4, 1], [], []],
    ['Bobek', 'Ž.Čajkovski', 'Tomašević'],
    ['20', '23', '51', '81'],
    ['Ortiz'],
    ['89(p)'],
    { ...stadiumsStore.Brazil?.eucaliptos.locationAndNames } as StadiumInfo,
    '11 078'
  ),

  new Match(
    '01.07.1950',
    tournamentStages.group1,
    ['Brazil', 'Yugoslavia'],
    [[2, 0], [], []],
    ['Ademir', 'Zizinho'],
    ['4', '69'],
    [],
    [],
    { ...stadiumsStore.Brazil?.maracana.locationAndNames } as StadiumInfo,
    '142 429'
  ),

  new Match(
    '02.07.1950',
    tournamentStages.group1,
    ['Switzerland', 'Mexico'],
    [[2, 1], [], []],
    ['Bader', 'Antenen'],
    ['10', '44'],
    ['Casarín'],
    ['89'],
    { ...stadiumsStore.Brazil?.eucaliptos.locationAndNames } as StadiumInfo,
    '3 580'
  ),

  // Группа 2
  new Match(
    '25.06.1950',
    tournamentStages.group2,
    ['England', 'Chile'],
    [[2, 0], [], []],
    ['Mortensen', 'Mannion'],
    ['39', '51'],
    [],
    [],
    { ...stadiumsStore.Brazil?.maracana.locationAndNames } as StadiumInfo,
    '29 703'
  ),

  new Match(
    '25.06.1950',
    tournamentStages.group2,
    ['Spain', 'United States'],
    [[3, 1], [], []],
    ['Igoa', 'Basora', 'Zarra'],
    ['81', '83', '89'],
    ['Pariani'],
    ['17'],
    { ...stadiumsStore.Brazil?.britto.locationAndNames } as StadiumInfo,
    '9 511'
  ),

  new Match(
    '29.06.1950',
    tournamentStages.group2,
    ['Spain', 'Chile'],
    [[2, 0], [], []],
    ['Basora', 'Zarra'],
    ['17', '30'],
    [],
    [],
    { ...stadiumsStore.Brazil?.maracana.locationAndNames } as StadiumInfo,
    '19 790'
  ),

  new Match(
    '29.06.1950',
    tournamentStages.group2,
    ['United States', 'England'],
    [[1, 0], [], []],
    ['Gaetjens'],
    ['38'],
    [],
    [],
    { ...stadiumsStore.Brazil?.independencia.locationAndNames } as StadiumInfo,
    '10 151'
  ),

  new Match(
    '02.07.1950',
    tournamentStages.group2,
    ['Spain', 'England'],
    [[1, 0], [], []],
    ['Zarra'],
    ['48'],
    [],
    [],
    { ...stadiumsStore.Brazil?.maracana.locationAndNames } as StadiumInfo,
    '74 462'
  ),

  new Match(
    '02.07.1950',
    tournamentStages.group2,
    ['Chile', 'United States'],
    [[5, 2], [], []],
    ['Robledo', 'Cremaschi', 'Prieto', 'Riera'],
    ['16', '32', '54', '60', '82'],
    ['Wallace', 'Maca'],
    ['47', '48(p)'],
    { ...stadiumsStore.Brazil?.retiro.locationAndNames } as StadiumInfo,
    '8 501'
  ),

  // Группа 3
  new Match(
    '25.06.1950',
    tournamentStages.group3,
    ['Sweden', 'Italy'],
    [[3, 2], [], []],
    ['Jeppson', 'Andersson'],
    ['25', '33', '68'],
    ['Carapellese', 'Muccinelli'],
    ['7', '75'],
    { ...stadiumsStore.Brazil?.britto.locationAndNames } as StadiumInfo,
    '36 502'
  ),

  new Match(
    '29.06.1950',
    tournamentStages.group3,
    ['Sweden', 'Paraguay'],
    [[2, 2], [], []],
    ['Sundqvist', 'Palmér'],
    ['17', '26'],
    ['López', 'López Fretes'],
    ['35', '74'],
    { ...stadiumsStore.Brazil?.britto.locationAndNames } as StadiumInfo,
    '7 903'
  ),

  new Match(
    '02.07.1950',
    tournamentStages.group3,
    ['Italy', 'Paraguay'],
    [[2, 0], [], []],
    ['Carapellese', 'Pandolfini'],
    ['12', '62'],
    [],
    [],
    { ...stadiumsStore.Brazil?.pacaembu.locationAndNames } as StadiumInfo,
    '25 811'
  ),

  // Группа 4
  new Match(
    '02.07.1950',
    tournamentStages.group4,
    ['Uruguay', 'Bolivia'],
    [[8, 0], [], []],
    ['Míguez', 'Vidal', 'Schiaffino', 'Pérez', 'Ghiggia'],
    ['14', '18', '23', '40', '51', '54', '83', '87'],
    [],
    [],
    { ...stadiumsStore.Brazil?.independencia.locationAndNames } as StadiumInfo,
    '5 284'
  ),

  // Финальная группа
  new Match(
    '09.07.1950',
    tournamentStages.finalGroup,
    ['Uruguay', 'Spain'],
    [[2, 2], [], []],
    ['Ghiggia', 'Varela'],
    ['29', '73'],
    ['Basora'],
    ['37', '39'],
    { ...stadiumsStore.Brazil?.pacaembu.locationAndNames } as StadiumInfo,
    '44 802'
  ),

  new Match(
    '09.07.1950',
    tournamentStages.finalGroup,
    ['Brazil', 'Sweden'],
    [[7, 1], [], []],
    ['Ademir', 'Chico', 'Maneca'],
    ['17', '36', '39', '52', '55', '58', '85', '88'],
    ['Andersson'],
    ['67(p)'],
    { ...stadiumsStore.Brazil?.maracana.locationAndNames } as StadiumInfo,
    '138 886'
  ),

  new Match(
    '13.07.1950',
    tournamentStages.finalGroup,
    ['Brazil', 'Spain'],
    [[6, 1], [], []],
    ['Ademir', 'Jair', 'Chico', 'Zizinho'],
    ['15', '21', '31', '55', '57', '67'],
    ['Igoa'],
    ['71'],
    { ...stadiumsStore.Brazil?.maracana.locationAndNames } as StadiumInfo,
    '152 772'
  ),

  new Match(
    '13.07.1950',
    tournamentStages.finalGroup,
    ['Uruguay', 'Sweden'],
    [[3, 2], [], []],
    ['Ghiggia', 'Míguez'],
    ['39', '77', '85'],
    ['Palmér', 'Sundqvist'],
    ['5', '40'],
    { ...stadiumsStore.Brazil?.pacaembu.locationAndNames } as StadiumInfo,
    '7 987'
  ),

  // Матч за 3-е место
  new Match(
    '16.07.1950',
    tournamentStages.thirdPlaceGroupRound,
    ['Sweden', 'Spain'],
    [[3, 1], [], []],
    ['Sundqvist', 'Mellberg', 'Palmér'],
    ['15', '33', '80'],
    ['Zarra'],
    ['82'],
    { ...stadiumsStore.Brazil?.pacaembu.locationAndNames } as StadiumInfo,
    '11 227'
  ),

  // Финал
  new Match(
    '16.07.1950',
    tournamentStages.finalGroupRound,
    ['Uruguay', 'Brazil'],
    [[2, 1], [], []],
    ['Schiaffino', 'Ghiggia'],
    ['66', '79'],
    ['Friaça'],
    ['47'],
    { ...stadiumsStore.Brazil?.maracana.locationAndNames } as StadiumInfo,
    '173 850'
  ),
]
