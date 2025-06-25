import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1978: MatchInfo[] = [
  new Match(
    '02.06.1978',
    tournamentStages.group1,
    ['Italy', 'France'],
    [[2, 1], [], []],
    ['Rossi', 'Zaccarelli'],
    ['29', '54'],
    ['Lacombe'],
    ['1'],
    { ...stadiumsStore.Argentina?.worldCup.locationAndNames } as StadiumInfo,
    '38 100'
  ),

  new Match(
    '02.06.1978',
    tournamentStages.group1,
    ['Argentina', 'Hungary'],
    [[2, 1], [], []],
    ['Luque', 'Bertoni'],
    ['14', '83'],
    ['Csapó'],
    ['9'],
    { ...stadiumsStore.Argentina?.riverPlate.locationAndNames } as StadiumInfo,
    '71 615'
  ),

  new Match(
    '06.06.1978',
    tournamentStages.group1,
    ['Italy', 'Hungary'],
    [[3, 1], [], []],
    ['Rossi', 'Bettega', 'Benetti'],
    ['34', '35', '61'],
    ['A.Tóth'],
    ['81(p)'],
    { ...stadiumsStore.Argentina?.worldCup.locationAndNames } as StadiumInfo,
    '26 533'
  ),

  new Match(
    '06.06.1978',
    tournamentStages.group1,
    ['Argentina', 'France'],
    [[2, 1], [], []],
    ['Passarella', 'Luque'],
    ['45(p)', '73'],
    ['Platini'],
    ['60'],
    { ...stadiumsStore.Argentina?.riverPlate.locationAndNames } as StadiumInfo,
    '71 666'
  ),

  new Match(
    '10.06.1978',
    tournamentStages.group1,
    ['France', 'Hungary'],
    [[3, 1], [], []],
    ['Lopez', 'Berdoll', 'Rocheteau'],
    ['23', '38', '42'],
    ['Zombori'],
    ['41'],
    { ...stadiumsStore.Argentina?.worldCup.locationAndNames } as StadiumInfo,
    '23 127'
  ),

  new Match(
    '10.06.1978',
    tournamentStages.group1,
    ['Italy', 'Argentina'],
    [[1, 0], [], []],
    ['Bettega'],
    ['67'],
    [],
    [],
    { ...stadiumsStore.Argentina?.riverPlate.locationAndNames } as StadiumInfo,
    '71 712'
  ),

  new Match(
    '01.06.1978',
    tournamentStages.group2,
    ['Germany', 'Poland'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Argentina?.riverPlate.locationAndNames } as StadiumInfo,
    '67 579'
  ),

  new Match(
    '02.06.1978',
    tournamentStages.group2,
    ['Tunisia', 'Mexico'],
    [[3, 1], [], []],
    ['Kaabi', 'Ghommidh', 'Dhouieb'],
    ['55', '79', '87'],
    ['Vázquez Ayala'],
    ['45(p)'],
    { ...stadiumsStore.Argentina?.rosario.locationAndNames } as StadiumInfo,
    '17 396'
  ),

  new Match(
    '06.06.1978',
    tournamentStages.group2,
    ['Germany', 'Mexico'],
    [[6, 0], [], []],
    ['D.Müller', 'H.Müller', 'Rummenigge', 'Flohe'],
    ['15', '30', '38, 73', '44, 89'],
    [],
    [],
    { ...stadiumsStore.Argentina?.olympic.locationAndNames } as StadiumInfo,
    '35 258'
  ),

  new Match(
    '06.06.1978',
    tournamentStages.group2,
    ['Poland', 'Tunisia'],
    [[1, 0], [], []],
    ['Lato'],
    ['43'],
    [],
    [],
    { ...stadiumsStore.Argentina?.rosario.locationAndNames } as StadiumInfo,
    '9 624'
  ),

  new Match(
    '10.06.1978',
    tournamentStages.group2,
    ['Germany', 'Tunisia'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Argentina?.olympic.locationAndNames } as StadiumInfo,
    '30 667'
  ),

  new Match(
    '10.06.1978',
    tournamentStages.group2,
    ['Poland', 'Mexico'],
    [[3, 1], [], []],
    ['Boniek', 'Deyna'],
    ['43, 84', '56'],
    ['Rangel'],
    ['52'],
    { ...stadiumsStore.Argentina?.rosario.locationAndNames } as StadiumInfo,
    '22 651'
  ),

  new Match(
    '03.06.1978',
    tournamentStages.group4,
    ['Austria', 'Spain'],
    [[2, 1], [], []],
    ['Schachner', 'Krankl'],
    ['10', '76'],
    ['Dani'],
    ['21'],
    { ...stadiumsStore.Argentina?.amalfitani.locationAndNames } as StadiumInfo,
    '40 841'
  ),

  new Match(
    '03.06.1978',
    tournamentStages.group4,
    ['Brazil', 'Sweden'],
    [[1, 1], [], []],
    ['Reinaldo'],
    ['45'],
    ['Sjöberg'],
    ['37'],
    { ...stadiumsStore.Argentina?.worldCup.locationAndNames } as StadiumInfo,
    '32 569'
  ),

  new Match(
    '07.06.1978',
    tournamentStages.group4,
    ['Austria', 'Sweden'],
    [[1, 0], [], []],
    ['Krankl'],
    ['42(p)'],
    [],
    [],
    { ...stadiumsStore.Argentina?.amalfitani.locationAndNames } as StadiumInfo,
    '41 424'
  ),

  new Match(
    '07.06.1978',
    tournamentStages.group4,
    ['Brazil', 'Spain'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Argentina?.worldCup.locationAndNames } as StadiumInfo,
    '34 771'
  ),

  new Match(
    '11.06.1978',
    tournamentStages.group4,
    ['Spain', 'Sweden'],
    [[1, 0], [], []],
    ['Asensi'],
    ['75'],
    [],
    [],
    { ...stadiumsStore.Argentina?.amalfitani.locationAndNames } as StadiumInfo,
    '42 132'
  ),

  new Match(
    '11.06.1978',
    tournamentStages.group4,
    ['Brazil', 'Austria'],
    [[1, 0], [], []],
    ['Roberto Dinamite'],
    ['40'],
    [],
    [],
    { ...stadiumsStore.Argentina?.worldCup.locationAndNames } as StadiumInfo,
    '35 221'
  ),

  new Match(
    '03.06.1978',
    tournamentStages.group4,
    ['Peru', 'Scotland'],
    [[3, 1], [], []],
    ['Cueto', 'Cubillas'],
    ['43', '71, 77'],
    ['Jordan'],
    ['19'],
    { ...stadiumsStore.Argentina?.olympic.locationAndNames } as StadiumInfo,
    '37 927'
  ),

  new Match(
    '03.06.1978',
    tournamentStages.group4,
    ['Netherlands', 'Iran'],
    [[3, 0], [], []],
    ['Rensenbrink'],
    ['40(p)', '62', '78(p)'],
    [],
    [],
    { ...stadiumsStore.Argentina?.mendoza.locationAndNames } as StadiumInfo,
    '33 431'
  ),

  new Match(
    '07.06.1978',
    tournamentStages.group4,
    ['Scotland', 'Iran'],
    [[1, 1], [], []],
    ['Eskandarian'],
    ['43(o.g.)'],
    ['Danaeifard'],
    ['60'],
    { ...stadiumsStore.Argentina?.olympic.locationAndNames } as StadiumInfo,
    '7 938'
  ),

  new Match(
    '07.06.1978',
    tournamentStages.group4,
    ['Netherlands', 'Peru'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Argentina?.mendoza.locationAndNames } as StadiumInfo,
    '28 125'
  ),

  new Match(
    '11.06.1978',
    tournamentStages.group4,
    ['Peru', 'Iran'],
    [[4, 1], [], []],
    ['Velásquez', 'Cubillas'],
    ['2', '36(p)', '39(p)', '79'],
    ['Rowshan'],
    ['41'],
    { ...stadiumsStore.Argentina?.olympic.locationAndNames } as StadiumInfo,
    '21 262'
  ),

  new Match(
    '11.06.1978',
    tournamentStages.group4,
    ['Scotland', 'Netherlands'],
    [[3, 2], [], []],
    ['Dalglish', 'A.Gemmill'],
    ['45', '46(p)', '68'],
    ['Rensenbrink', 'Rep'],
    ['34(p)', '71'],
    { ...stadiumsStore.Argentina?.mendoza.locationAndNames } as StadiumInfo,
    '35 130'
  ),

  new Match(
    '14.06.1978',
    tournamentStages.secondGroupRoundA,
    ['Netherlands', 'Austria'],
    [[5, 1], [], []],
    ['Brandts', 'Rensenbrink', 'Rep', 'W. van de Kerkhof'],
    ['6', '35(p)', '36', '53', '82'],
    ['Obermayer'],
    ['80'],
    { ...stadiumsStore.Argentina?.olympic.locationAndNames } as StadiumInfo,
    '25 050'
  ),

  new Match(
    '14.06.1978',
    tournamentStages.secondGroupRoundA,
    ['Italy', 'Germany'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Argentina?.riverPlate.locationAndNames } as StadiumInfo,
    '67 547'
  ),

  new Match(
    '18.06.1978',
    tournamentStages.secondGroupRoundA,
    ['Netherlands', 'Germany'],
    [[2, 2], [], []],
    ['Haan', 'R. van de Kerkhof'],
    ['27', '82'],
    ['Abramczik', 'D.Müller'],
    ['3', '70'],
    { ...stadiumsStore.Argentina?.olympic.locationAndNames } as StadiumInfo,
    '40 750'
  ),

  new Match(
    '18.06.1978',
    tournamentStages.secondGroupRoundA,
    ['Italy', 'Austria'],
    [[1, 0], [], []],
    ['Rossi'],
    ['13'],
    [],
    [],
    { ...stadiumsStore.Argentina?.riverPlate.locationAndNames } as StadiumInfo,
    '66 695'
  ),

  new Match(
    '21.06.1978',
    tournamentStages.secondGroupRoundA,
    ['Austria', 'Germany'],
    [[3, 2], [], []],
    ['Vogts', 'Krankl'],
    ['59(o.g.)', '66', '87'],
    ['Rummenigge', 'Hölzenbein'],
    ['19', '68'],
    { ...stadiumsStore.Argentina?.olympic.locationAndNames } as StadiumInfo,
    '38 318'
  ),

  new Match(
    '21.06.1978',
    tournamentStages.secondGroupRoundA,
    ['Netherlands', 'Italy'],
    [[2, 1], [], []],
    ['Brandts', 'Haan'],
    ['49', '76'],
    ['Brandts'],
    ['19(o.g.)'],
    { ...stadiumsStore.Argentina?.riverPlate.locationAndNames } as StadiumInfo,
    '67 433'
  ),

  new Match(
    '14.06.1978',
    tournamentStages.secondGroupRoundB,
    ['Brazil', 'Peru'],
    [[3, 0], [], []],
    ['Dirceu', 'Zico'],
    ['15', '27', '72'],
    [],
    [],
    { ...stadiumsStore.Argentina?.mendoza.locationAndNames } as StadiumInfo,
    '31 278'
  ),

  new Match(
    '14.06.1978',
    tournamentStages.secondGroupRoundB,
    ['Argentina', 'Poland'],
    [[2, 0], [], []],
    ['Kempes'],
    ['16', '71'],
    [],
    [],
    { ...stadiumsStore.Argentina?.rosario.locationAndNames } as StadiumInfo,
    '37 091'
  ),

  new Match(
    '18.06.1978',
    tournamentStages.secondGroupRoundB,
    ['Poland', 'Peru'],
    [[1, 0], [], []],
    ['Szarmach'],
    ['65'],
    [],
    [],
    { ...stadiumsStore.Argentina?.mendoza.locationAndNames } as StadiumInfo,
    '35 288'
  ),

  new Match(
    '18.06.1978',
    tournamentStages.secondGroupRoundB,
    ['Argentina', 'Brazil'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Argentina?.rosario.locationAndNames } as StadiumInfo,
    '37 326'
  ),

  new Match(
    '21.06.1978',
    tournamentStages.secondGroupRoundB,
    ['Brazil', 'Poland'],
    [[3, 1], [], []],
    ['Nelinho', 'Roberto Dinamite'],
    ['13', '58', '63'],
    ['Lato'],
    ['45'],
    { ...stadiumsStore.Argentina?.mendoza.locationAndNames } as StadiumInfo,
    '39 586'
  ),

  new Match(
    '21.06.1978',
    tournamentStages.secondGroupRoundB,
    ['Argentina', 'Peru'],
    [[6, 0], [], []],
    ['Kempes', 'Tarantini', 'Luque', 'Houseman'],
    ['21', '43', '49', '50', '67', '72'],
    [],
    [],
    { ...stadiumsStore.Argentina?.rosario.locationAndNames } as StadiumInfo,
    '37 315'
  ),

  new Match(
    '24.06.1978',
    tournamentStages.thirdPlace,
    ['Brazil', 'Italy'],
    [[2, 1], [], []],
    ['Nelinho', 'Dirceu'],
    ['64', '71'],
    ['Causio'],
    ['38'],
    { ...stadiumsStore.Argentina?.riverPlate.locationAndNames } as StadiumInfo,
    '69 659'
  ),

  new Match(
    '25.06.1978',
    tournamentStages.final,
    ['Argentina', 'Netherlands'],
    [[1, 1], [2, 0], []],
    ['Kempes', 'Bertoni'],
    ['38', '105', '115'],
    ['Nanninga'],
    ['82'],
    { ...stadiumsStore.Argentina?.riverPlate.locationAndNames } as StadiumInfo,
    '71 483'
  ),
]
