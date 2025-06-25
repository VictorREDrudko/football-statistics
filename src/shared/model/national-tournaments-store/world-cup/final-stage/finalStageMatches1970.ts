import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1970: MatchInfo[] = [
  new Match(
    '31.05.1970',
    tournamentStages.group1,
    ['Mexico', 'Soviet Union'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '107 160'
  ),

  new Match(
    '03.06.1970',
    tournamentStages.group1,
    ['Belgium', 'El Salvador'],
    [[3, 0], [], []],
    ['Van Moer', 'Lambert'],
    ['12, 54', '79(p)'],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '92 205'
  ),

  new Match(
    '06.06.1970',
    tournamentStages.group1,
    ['Soviet Union', 'Belgium'],
    [[4, 1], [], []],
    ['Byshovets', 'Asatiani', 'Khmelnytskyi'],
    ['14, 63', '57', '76'],
    ['Lambert'],
    ['86'],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '95 261'
  ),

  new Match(
    '07.06.1970',
    tournamentStages.group1,
    ['Mexico', 'El Salvador'],
    [[4, 0], [], []],
    ['Valdivia', 'Fragoso', 'Basaguren'],
    ['45, 46', '58', '83'],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '103 058'
  ),

  new Match(
    '10.06.1970',
    tournamentStages.group1,
    ['Soviet Union', 'El Salvador'],
    [[2, 0], [], []],
    ['Byshovets'],
    ['51, 74'],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '89 979'
  ),

  new Match(
    '11.06.1970',
    tournamentStages.group1,
    ['Mexico', 'Belgium'],
    [[1, 0], [], []],
    ['Peña'],
    ['14(p)'],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '108 192'
  ),

  new Match(
    '02.06.1970',
    tournamentStages.group2,
    ['Uruguay', 'Israel'],
    [[2, 0], [], []],
    ['Maneiro', 'Mujica'],
    ['23', '50'],
    [],
    [],
    { ...stadiumsStore.Mexico?.cuauhtemoc.locationAndNames } as StadiumInfo,
    '20 654'
  ),

  new Match(
    '03.06.1970',
    tournamentStages.group2,
    ['Italy', 'Sweden'],
    [[1, 0], [], []],
    ['Domenghini'],
    ['10'],
    [],
    [],
    { ...stadiumsStore.Mexico?.dosal.locationAndNames } as StadiumInfo,
    '13 433'
  ),

  new Match(
    '06.06.1970',
    tournamentStages.group2,
    ['Uruguay', 'Italy'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Mexico?.cuauhtemoc.locationAndNames } as StadiumInfo,
    '29 968'
  ),

  new Match(
    '07.06.1970',
    tournamentStages.group2,
    ['Sweden', 'Israel'],
    [[1, 1], [], []],
    ['Turesson'],
    ['53'],
    ['Spiegler'],
    ['56'],
    { ...stadiumsStore.Mexico?.dosal.locationAndNames } as StadiumInfo,
    '9 624'
  ),

  new Match(
    '10.06.1970',
    tournamentStages.group2,
    ['Sweden', 'Uruguay'],
    [[1, 0], [], []],
    ['Grahn'],
    ['90'],
    [],
    [],
    { ...stadiumsStore.Mexico?.cuauhtemoc.locationAndNames } as StadiumInfo,
    '18 163'
  ),

  new Match(
    '11.06.1970',
    tournamentStages.group2,
    ['Italy', 'Israel'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Mexico?.dosal.locationAndNames } as StadiumInfo,
    '9 890'
  ),

  new Match(
    '02.06.1970',
    tournamentStages.group3,
    ['England', 'Romania'],
    [[1, 0], [], []],
    ['Hurst'],
    ['65'],
    [],
    [],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '50 560'
  ),

  new Match(
    '03.06.1970',
    tournamentStages.group3,
    ['Brazil', 'Czechoslovakia'],
    [[4, 1], [], []],
    ['Rivellino', 'Pelé', 'Jairzinho'],
    ['24', '59', '61, 83'],
    ['Petráš'],
    ['11'],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '52 897'
  ),

  new Match(
    '06.06.1970',
    tournamentStages.group3,
    ['Romania', 'Czechoslovakia'],
    [[2, 1], [], []],
    ['Neagu', 'Dumitrache'],
    ['52', '75(p)'],
    ['Petráš'],
    ['5'],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '56 818'
  ),

  new Match(
    '07.06.1970',
    tournamentStages.group3,
    ['Brazil', 'England'],
    [[1, 0], [], []],
    ['Jairzinho'],
    ['59'],
    [],
    [],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '66 843'
  ),

  new Match(
    '10.06.1970',
    tournamentStages.group3,
    ['Brazil', 'Romania'],
    [[3, 2], [], []],
    ['Pelé', 'Jairzinho'],
    ['19, 67', '22'],
    ['Dumitrache', 'Dembrovschi'],
    ['34', '84'],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '50 804'
  ),

  new Match(
    '11.06.1970',
    tournamentStages.group3,
    ['England', 'Czechoslovakia'],
    [[1, 0], [], []],
    ['Clarke'],
    ['50(p)'],
    [],
    [],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '49 292'
  ),

  new Match(
    '02.06.1970',
    tournamentStages.group4,
    ['Peru', 'Bulgaria'],
    [[3, 2], [], []],
    ['Gallardo', 'Chumpitaz', 'Cubillas'],
    ['50', '55', '73'],
    ['Dermendzhiev', 'Bonev'],
    ['13', '49'],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '13 765'
  ),

  new Match(
    '03.06.1970',
    tournamentStages.group4,
    ['Germany', 'Morocco'],
    [[2, 1], [], []],
    ['Seeler', 'Müller'],
    ['56', '80'],
    ['Jarir'],
    ['21'],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '12 942'
  ),

  new Match(
    '06.06.1970',
    tournamentStages.group4,
    ['Peru', 'Morocco'],
    [[3, 0], [], []],
    ['Cubillas', 'Challe'],
    ['65, 75', '67'],
    [],
    [],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '13 537'
  ),

  new Match(
    '07.06.1970',
    tournamentStages.group4,
    ['Germany', 'Bulgaria'],
    [[5, 2], [], []],
    ['Libuda', 'Müller', 'Seeler'],
    ['20', '27, 52(p), 88', '67'],
    ['Nikodimov', 'Kolev'],
    ['12', '89'],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '17 710'
  ),

  new Match(
    '10.06.1970',
    tournamentStages.group4,
    ['Germany', 'Peru'],
    [[3, 1], [], []],
    ['Müller'],
    ['19, 26, 39'],
    ['Cubillas'],
    ['44'],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '17 875'
  ),

  new Match(
    '11.06.1970',
    tournamentStages.group4,
    ['Bulgaria', 'Morocco'],
    [[1, 1], [], []],
    ['Zhechev'],
    ['40'],
    ['Ghazouani'],
    ['61'],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '12 299'
  ),

  new Match(
    '14.06.1970',
    tournamentStages.quarterFinal,
    ['Uruguay', 'Soviet Union'],
    [[0, 0], [1, 0], []],
    ['Espárrago'],
    ['117'],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '26 085'
  ),

  new Match(
    '14.06.1970',
    tournamentStages.quarterFinal,
    ['Italy', 'Mexico'],
    [[4, 1], [], []],
    ['Guzmán', 'Riva', 'Rivera'],
    ['25(o.g.)', '63, 76', '70'],
    ['González'],
    ['13'],
    { ...stadiumsStore.Mexico?.dosal.locationAndNames } as StadiumInfo,
    '26 851'
  ),

  new Match(
    '14.06.1970',
    tournamentStages.quarterFinal,
    ['Brazil', 'Peru'],
    [[4, 2], [], []],
    ['Rivellino', 'Tostão', 'Jairzinho'],
    ['11', '15, 52', '75'],
    ['Gallardo', 'Cubillas'],
    ['28', '70'],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '54 233'
  ),

  new Match(
    '14.06.1970',
    tournamentStages.quarterFinal,
    ['Germany', 'England'],
    [[2, 2], [1, 0], []],
    ['Beckenbauer', 'Seeler', 'Müller'],
    ['68', '82', '108'],
    ['Mullery', 'Peters'],
    ['31', '49'],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '23 357'
  ),

  new Match(
    '17.06.1970',
    tournamentStages.semiFinal,
    ['Brazil', 'Uruguay'],
    [[3, 1], [], []],
    ['Clodoaldo', 'Jairzinho', 'Rivellino'],
    ['44', '76', '89'],
    ['Cubilla'],
    ['19'],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '51 261'
  ),

  new Match(
    '17.06.1970',
    tournamentStages.semiFinal,
    ['Italy', 'Germany'],
    [[1, 1], [3, 2], []],
    ['Boninsegna', 'Burgnich', 'Riva', 'Rivera'],
    ['8', '98', '104', '111'],
    ['Schnellinger', 'Müller'],
    ['90', '95, 110'],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '102 444'
  ),

  new Match(
    '20.06.1970',
    tournamentStages.thirdPlace,
    ['Germany', 'Uruguay'],
    [[1, 0], [], []],
    ['Overath'],
    ['26'],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '104 403'
  ),

  new Match(
    '21.06.1970',
    tournamentStages.final,
    ['Brazil', 'Italy'],
    [[4, 1], [], []],
    ['Pelé', 'Gérson', 'Jairzinho', 'Carlos Alberto'],
    ['18', '65', '71', '86'],
    ['Boninsegna'],
    ['37'],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '107 412'
  ),
]
