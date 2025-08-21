import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import {
  MatchInfo,
  StadiumInfo,
} from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/CHAMPIONSHIP_STAGES'

export const finalStageMatches1930: MatchInfo[] = [
  new Match(
    '13.07.1930',
    tournamentStages.group1,
    ['France', 'Mexico'],
    [[4, 1], [], []],
    ['L. Laurent', 'Langiller', 'Maschinot'],
    ['19', '40', '43, 87'],
    ['Carreño'],
    ['80'],
    { ...stadiumsStore.Uruguay?.pocitos.locationAndNames } as StadiumInfo,
    '4 444'
  ),

  new Match(
    '15.07.1930',
    tournamentStages.group1,
    ['Argentina', 'France'],
    [[1, 0], [], []],
    ['Monti'],
    ['81'],
    [],
    [],
    { ...stadiumsStore.Uruguay?.parqueCentral.locationAndNames } as StadiumInfo,
    '23 409'
  ),

  new Match(
    '16.07.1930',
    tournamentStages.group1,
    ['Chile', 'Mexico'],
    [[3, 0], [], []],
    ['Vidal', 'M. Rosas'],
    ['1, 65', '52(o.g.)'],
    [],
    [],
    { ...stadiumsStore.Uruguay?.parqueCentral.locationAndNames } as StadiumInfo,
    '9 249'
  ),

  new Match(
    '19.07.1930',
    tournamentStages.group1,
    ['Chile', 'France'],
    [[1, 0], [], []],
    ['Subiabre'],
    ['67'],
    [],
    [],
    { ...stadiumsStore.Uruguay?.centenario.locationAndNames } as StadiumInfo,
    '2 000'
  ),

  new Match(
    '19.07.1930',
    tournamentStages.group1,
    ['Argentina', 'Mexico'],
    [[6, 3], [], []],
    ['Stábile', 'Zumelzú', 'Varallo'],
    ['8, 17, 80', '12, 55', '53'],
    ['M. Rosas', 'Gayón'],
    ['42(p), 65', '75'],
    { ...stadiumsStore.Uruguay?.centenario.locationAndNames } as StadiumInfo,
    '42 100'
  ),

  new Match(
    '22.07.1930',
    tournamentStages.group1,
    ['Argentina', 'Chile'],
    [[3, 1], [], []],
    ['Stábile', 'M. Evaristo'],
    ['12, 13', '51'],
    ['Subiabre'],
    ['15'],
    { ...stadiumsStore.Uruguay?.centenario.locationAndNames } as StadiumInfo,
    '41 459'
  ),

  new Match(
    '14.07.1930',
    tournamentStages.group2,
    ['Yugoslavia', 'Brazil'],
    [[2, 1], [], []],
    ['Tirnanić', 'Bek'],
    ['21', '30'],
    ['Preguinho'],
    ['62'],
    { ...stadiumsStore.Uruguay?.parqueCentral.locationAndNames } as StadiumInfo,
    '24 059'
  ),

  new Match(
    '17.07.1930',
    tournamentStages.group2,
    ['Yugoslavia', 'Bolivia'],
    [[4, 0], [], []],
    ['Bek', 'Marjanović', 'Vujadinović'],
    ['60, 67', '65', '85'],
    [],
    [],
    { ...stadiumsStore.Uruguay?.parqueCentral.locationAndNames } as StadiumInfo,
    '18 306'
  ),

  new Match(
    '20.07.1930',
    tournamentStages.group2,
    ['Brazil', 'Bolivia'],
    [[4, 0], [], []],
    ['Moderato', 'Preguinho'],
    ['37, 73', '57, 83'],
    [],
    [],
    { ...stadiumsStore.Uruguay?.centenario.locationAndNames } as StadiumInfo,
    '25 466'
  ),

  new Match(
    '14.07.1930',
    tournamentStages.group3,
    ['Romania', 'Peru'],
    [[3, 1], [], []],
    ['Deșu', 'Stanciu', 'Kovács'],
    ['1', '79', '89'],
    ['De Souza'],
    ['75'],
    { ...stadiumsStore.Uruguay?.pocitos.locationAndNames } as StadiumInfo,
    '2 549'
  ),

  new Match(
    '18.07.1930',
    tournamentStages.group3,
    ['Uruguay', 'Peru'],
    [[1, 0], [], []],
    ['Vargas Peña'],
    ['40'],
    [],
    [],
    { ...stadiumsStore.Uruguay?.centenario.locationAndNames } as StadiumInfo,
    '57 735'
  ),

  new Match(
    '21.07.1930',
    tournamentStages.group3,
    ['Uruguay', 'Romania'],
    [[4, 0], [], []],
    ['Dorado', 'Scarone', 'Anselmo', 'Cea'],
    ['7', '26', '31', '35'],
    [],
    [],
    { ...stadiumsStore.Uruguay?.centenario.locationAndNames } as StadiumInfo,
    '70 022'
  ),

  new Match(
    '13.07.1930',
    tournamentStages.group4,
    ['United States', 'Belgium'],
    [[3, 0], [], []],
    ['McGhee', 'Florie', 'Patenaude'],
    ['23', '45', '69'],
    [],
    [],
    { ...stadiumsStore.Uruguay?.parqueCentral.locationAndNames } as StadiumInfo,
    '18 346'
  ),

  new Match(
    '17.07.1930',
    tournamentStages.group4,
    ['United States', 'Paraguay'],
    [[3, 0], [], []],
    ['Patenaude'],
    ['10, 15, 50'],
    [],
    [],
    { ...stadiumsStore.Uruguay?.parqueCentral.locationAndNames } as StadiumInfo,
    '18 306'
  ),

  new Match(
    '20.07.1930',
    tournamentStages.group4,
    ['Paraguay', 'Belgium'],
    [[1, 0], [], []],
    ['Vargas Peña'],
    ['40'],
    [],
    [],
    { ...stadiumsStore.Uruguay?.centenario.locationAndNames } as StadiumInfo,
    '12 000'
  ),

  new Match(
    '26.07.1930',
    tournamentStages.semiFinal,
    ['Argentina', 'United States'],
    [[6, 1], [], []],
    ['Monti', 'Scopelli', 'Stábile', 'Peucelle'],
    ['20', '56', '69, 87', '80, 85'],
    ['Brown'],
    ['89'],
    { ...stadiumsStore.Uruguay?.centenario.locationAndNames } as StadiumInfo,
    '72 886'
  ),

  new Match(
    '27.07.1930',
    tournamentStages.semiFinal,
    ['Uruguay', 'Yugoslavia'],
    [[6, 1], [], []],
    ['Cea', 'Anselmo', 'Iriarte'],
    ['18, 67, 72', '20, 31', '61'],
    ['Vujadinović'],
    ['4'],
    { ...stadiumsStore.Uruguay?.centenario.locationAndNames } as StadiumInfo,
    '79 867'
  ),

  new Match(
    '30.07.1930',
    tournamentStages.final,
    ['Uruguay', 'Argentina'],
    [[4, 2], [], []],
    ['Dorado', 'Cea', 'Iriarte', 'Castro'],
    ['12', '57', '68', '89'],
    ['Peucelle', 'Stábile'],
    ['20', '37'],
    { ...stadiumsStore.Uruguay?.centenario.locationAndNames } as StadiumInfo,
    '68 346'
  ),
]
