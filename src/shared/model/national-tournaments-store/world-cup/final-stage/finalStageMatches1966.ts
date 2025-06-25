import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1966: MatchInfo[] = [
  new Match(
    '11.07.1966',
    tournamentStages.group1,
    ['England', 'Uruguay'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.England?.wembley.locationAndNames } as StadiumInfo,
    '87 148'
  ),

  new Match(
    '13.07.1966',
    tournamentStages.group1,
    ['France', 'Mexico'],
    [[1, 1], [], []],
    ['Hausser'],
    ['62'],
    ['Borja'],
    ['48'],
    { ...stadiumsStore.England?.wembley.locationAndNames } as StadiumInfo,
    '69 237'
  ),

  new Match(
    '15.07.1966',
    tournamentStages.group1,
    ['Uruguay', 'France'],
    [[2, 1], [], []],
    ['Rocha', 'Cortés'],
    ['26', '31'],
    ['De Bourgoing'],
    ['15(p)'],
    { ...stadiumsStore.England?.city.locationAndNames } as StadiumInfo,
    '45 662'
  ),

  new Match(
    '16.07.1966',
    tournamentStages.group1,
    ['England', 'Mexico'],
    [[2, 0], [], []],
    ['B.Charlton', 'Hunt'],
    ['37', '75'],
    [],
    [],
    { ...stadiumsStore.England?.wembley.locationAndNames } as StadiumInfo,
    '92 570'
  ),

  new Match(
    '19.07.1966',
    tournamentStages.group1,
    ['Uruguay', 'Mexico'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.England?.wembley.locationAndNames } as StadiumInfo,
    '61 112'
  ),

  new Match(
    '20.07.1966',
    tournamentStages.group1,
    ['England', 'France'],
    [[2, 0], [], []],
    ['Hunt'],
    ['38', '75'],
    [],
    [],
    { ...stadiumsStore.England?.wembley.locationAndNames } as StadiumInfo,
    '98 270'
  ),

  new Match(
    '12.07.1966',
    tournamentStages.group2,
    ['Germany', 'Switzerland'],
    [[5, 0], [], []],
    ['Held', 'Haller', 'Beckenbauer'],
    ['16', '21, 77(p)', '40, 52'],
    [],
    [],
    { ...stadiumsStore.England?.hillsborough.locationAndNames } as StadiumInfo,
    '36 127'
  ),

  new Match(
    '13.07.1966',
    tournamentStages.group2,
    ['Argentina', 'Spain'],
    [[2, 1], [], []],
    ['Artime'],
    ['65, 79'],
    ['Pirri'],
    ['71'],
    { ...stadiumsStore.England?.villa.locationAndNames } as StadiumInfo,
    '42 738'
  ),

  new Match(
    '15.07.1966',
    tournamentStages.group2,
    ['Spain', 'Switzerland'],
    [[2, 1], [], []],
    ['Sanchís', 'Amancio'],
    ['57', '75'],
    ['Quentin'],
    ['31'],
    { ...stadiumsStore.England?.hillsborough.locationAndNames } as StadiumInfo,
    '32 028'
  ),

  new Match(
    '16.07.1966',
    tournamentStages.group2,
    ['Argentina', 'Germany'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.England?.villa.locationAndNames } as StadiumInfo,
    '46 587'
  ),

  new Match(
    '19.07.1966',
    tournamentStages.group2,
    ['Argentina', 'Switzerland'],
    [[2, 0], [], []],
    ['Artime', 'Onega'],
    ['52', '79'],
    [],
    [],
    { ...stadiumsStore.England?.hillsborough.locationAndNames } as StadiumInfo,
    '32 127'
  ),

  new Match(
    '20.07.1966',
    tournamentStages.group2,
    ['Germany', 'Spain'],
    [[2, 1], [], []],
    ['Emmerich', 'Seeler'],
    ['39', '84'],
    ['Fusté'],
    ['23'],
    { ...stadiumsStore.England?.villa.locationAndNames } as StadiumInfo,
    '42 187'
  ),

  new Match(
    '12.07.1966',
    tournamentStages.group3,
    ['Brazil', 'Bulgaria'],
    [[2, 1], [], []],
    ['Pelé', 'Garrincha'],
    ['15', '63'],
    [],
    [],
    { ...stadiumsStore.England?.goodison.locationAndNames } as StadiumInfo,
    '47 308'
  ),

  new Match(
    '13.07.1966',
    tournamentStages.group3,
    ['Portugal', 'Hungary'],
    [[3, 1], [], []],
    ['José Augusto', 'Torres'],
    ['2, 67', '90'],
    ['Bene'],
    ['60'],
    { ...stadiumsStore.England?.oldTrafford.locationAndNames } as StadiumInfo,
    '29 886'
  ),

  new Match(
    '15.07.1966',
    tournamentStages.group3,
    ['Hungary', 'Brazil'],
    [[3, 1], [], []],
    ['Bene', 'Farkas', 'Mészöly'],
    ['2', '64', '73(p)'],
    ['Tostão'],
    ['14'],
    { ...stadiumsStore.England?.goodison.locationAndNames } as StadiumInfo,
    '51 387'
  ),

  new Match(
    '16.07.1966',
    tournamentStages.group3,
    ['Portugal', 'Bulgaria'],
    [[3, 0], [], []],
    ['Vutsov', 'Eusébio', 'Torres'],
    ['7(o.g.)', '38', '81'],
    [],
    [],
    { ...stadiumsStore.England?.oldTrafford.locationAndNames } as StadiumInfo,
    '25 438'
  ),

  new Match(
    '19.07.1966',
    tournamentStages.group3,
    ['Portugal', 'Brazil'],
    [[3, 1], [], []],
    ['Simões', 'Eusébio'],
    ['15', '27, 85'],
    ['Rildo'],
    ['73'],
    { ...stadiumsStore.England?.goodison.locationAndNames } as StadiumInfo,
    '58 479'
  ),

  new Match(
    '20.07.1966',
    tournamentStages.group3,
    ['Hungary', 'Bulgaria'],
    [[3, 1], [], []],
    ['Davidov', 'Mészöly', 'Bene'],
    ['43(o.g.)', '45', '54'],
    ['Asparuhov'],
    ['15'],
    { ...stadiumsStore.England?.oldTrafford.locationAndNames } as StadiumInfo,
    '24 129'
  ),

  new Match(
    '12.07.1966',
    tournamentStages.group4,
    ['Soviet Union', 'DPR Korea'],
    [[3, 0], [], []],
    ['Malofeyev', 'Banishevskiy'],
    ['31, 88', '33'],
    [],
    [],
    { ...stadiumsStore.England?.ayresome.locationAndNames } as StadiumInfo,
    '23 006'
  ),

  new Match(
    '13.07.1966',
    tournamentStages.group4,
    ['Italy', 'Chile'],
    [[2, 0], [], []],
    ['Mazzola', 'Barison'],
    ['8', '88'],
    [],
    [],
    { ...stadiumsStore.England?.roker.locationAndNames } as StadiumInfo,
    '27 199'
  ),

  new Match(
    '15.07.1966',
    tournamentStages.group4,
    ['Chile', 'DPR Korea'],
    [[1, 1], [], []],
    ['Marcos'],
    ['26(p)'],
    ['Pak Seung-zin'],
    ['88'],
    { ...stadiumsStore.England?.ayresome.locationAndNames } as StadiumInfo,
    '13 792'
  ),

  new Match(
    '16.07.1966',
    tournamentStages.group4,
    ['Soviet Union', 'Italy'],
    [[1, 0], [], []],
    ['Chislenko'],
    ['57'],
    [],
    [],
    { ...stadiumsStore.England?.roker.locationAndNames } as StadiumInfo,
    '27 793'
  ),

  new Match(
    '19.07.1966',
    tournamentStages.group4,
    ['DPR Korea', 'Italy'],
    [[1, 0], [], []],
    ['Pak Doo-ik'],
    ['42'],
    [],
    [],
    { ...stadiumsStore.England?.ayresome.locationAndNames } as StadiumInfo,
    '17 829'
  ),

  new Match(
    '20.07.1966',
    tournamentStages.group4,
    ['Soviet Union', 'Chile'],
    [[2, 1], [], []],
    ['Porkuyan'],
    ['28, 85'],
    ['Marcos'],
    ['32'],
    { ...stadiumsStore.England?.roker.locationAndNames } as StadiumInfo,
    '16 027'
  ),

  new Match(
    '23.07.1966',
    tournamentStages.quarterFinal,
    ['England', 'Argentina'],
    [[1, 0], [], []],
    ['Hurst'],
    ['78'],
    [],
    [],
    { ...stadiumsStore.England?.wembley.locationAndNames } as StadiumInfo,
    '90 584'
  ),

  new Match(
    '23.07.1966',
    tournamentStages.quarterFinal,
    ['Germany', 'Uruguay'],
    [[4, 0], [], []],
    ['Haller', 'Beckenbauer', 'Seeler'],
    ['11, 83', '70', '75'],
    [],
    [],
    { ...stadiumsStore.England?.hillsborough.locationAndNames } as StadiumInfo,
    '40 007'
  ),

  new Match(
    '23.07.1966',
    tournamentStages.quarterFinal,
    ['Soviet Union', 'Hungary'],
    [[2, 1], [], []],
    ['Chislenko', 'Porkuyan'],
    ['5', '46'],
    ['Bene'],
    ['57'],
    { ...stadiumsStore.England?.roker.locationAndNames } as StadiumInfo,
    '26 844'
  ),

  new Match(
    '23.07.1966',
    tournamentStages.quarterFinal,
    ['Portugal', 'DPR Korea'],
    [[5, 3], [], []],
    ['Eusébio', 'José Augusto'],
    ['27, 43(p), 56, 59(p)', '80'],
    ['Pak Seung-zin', 'Li Dong-woon', 'Yang Seung-kook'],
    ['1', '22', '25'],
    { ...stadiumsStore.England?.goodison.locationAndNames } as StadiumInfo,
    '40 248'
  ),

  new Match(
    '25.07.1966',
    tournamentStages.semiFinal,
    ['Germany', 'Soviet Union'],
    [[2, 1], [], []],
    ['Haller', 'Beckenbauer'],
    ['43', '67'],
    ['Porkuyan'],
    ['88'],
    { ...stadiumsStore.England?.goodison.locationAndNames } as StadiumInfo,
    '38 273'
  ),

  new Match(
    '26.07.1966',
    tournamentStages.semiFinal,
    ['England', 'Portugal'],
    [[2, 1], [], []],
    ['B.Charlton'],
    ['30', '80'],
    ['Eusébio'],
    ['82(p)'],
    { ...stadiumsStore.England?.wembley.locationAndNames } as StadiumInfo,
    '94 493'
  ),

  new Match(
    '28.07.1966',
    tournamentStages.thirdPlace,
    ['Portugal', 'Soviet Union'],
    [[2, 1], [], []],
    ['Eusébio', 'Torres'],
    ['12(p)', '89'],
    ['Malofeyev'],
    ['43'],
    { ...stadiumsStore.England?.wembley.locationAndNames } as StadiumInfo,
    '87 696'
  ),

  new Match(
    '30.07.1966',
    tournamentStages.final,
    ['England', 'Germany'],
    [[2, 2], [2, 0], []],
    ['Hurst', 'Peters'],
    ['18, 101, 120', '78'],
    ['Haller', 'Weber'],
    ['12', '89'],
    { ...stadiumsStore.England?.wembley.locationAndNames } as StadiumInfo,
    '96 924'
  ),
]
