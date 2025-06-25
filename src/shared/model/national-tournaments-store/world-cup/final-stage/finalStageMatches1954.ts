import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1954: MatchInfo[] = [
  // Группа 1
  new Match(
    '16.06.1954',
    tournamentStages.group1,
    ['Brazil', 'Mexico'],
    [[5, 0], [], []],
    ['Baltazar', 'Didi', 'Pinga', 'Julinho'],
    ['23', '30', '34', '44', '69'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.charmilles.locationAndNames } as StadiumInfo,
    '13 470'
  ),

  new Match(
    '16.06.1954',
    tournamentStages.group1,
    ['Yugoslavia', 'France'],
    [[1, 0], [], []],
    ['Milutinović'],
    ['15'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.pontaise.locationAndNames } as StadiumInfo,
    '16 000'
  ),

  new Match(
    '19.06.1954',
    tournamentStages.group1,
    ['Brazil', 'Yugoslavia'],
    [[1, 1], [], []],
    ['Didi'],
    ['69'],
    ['Zebec'],
    ['48'],
    { ...stadiumsStore.Switzerland?.pontaise.locationAndNames } as StadiumInfo,
    '24 637'
  ),

  new Match(
    '19.06.1954',
    tournamentStages.group1,
    ['France', 'Mexico'],
    [[3, 2], [], []],
    ['Vincent', 'Cárdenas', 'Kopa'],
    ['19', '46(o.g.)', '88(p)'],
    ['Lamadrid', 'Balcázar'],
    ['54', '85'],
    { ...stadiumsStore.Switzerland?.charmilles.locationAndNames } as StadiumInfo,
    '19 000'
  ),

  // Группа 2
  new Match(
    '17.06.1954',
    tournamentStages.group2,
    ['Germany', 'Turkey'],
    [[4, 1], [], []],
    ['Schäfer', 'Klodt', 'O.Walter', 'Morlock'],
    ['14', '52', '60', '84'],
    ['Mamat'],
    ['2'],
    { ...stadiumsStore.Switzerland?.wankdorf.locationAndNames } as StadiumInfo,
    '28 000'
  ),

  new Match(
    '17.06.1954',
    tournamentStages.group2,
    ['Hungary', 'Korea Republic'],
    [[9, 0], [], []],
    ['Puskás', 'Lantos', 'Kocsis', 'Czibor', 'Palotás'],
    ['12', '18', '24', '36', '50', '59', '75', '83', '89'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.hardturm.locationAndNames } as StadiumInfo,
    '13 000'
  ),

  new Match(
    '20.06.1954',
    tournamentStages.group2,
    ['Hungary', 'Germany'],
    [[8, 3], [], []],
    ['Kocsis', 'Puskás', 'Hidegkuti', 'J.Tóth'],
    ['3', '17', '21', '52', '54', '69', '75', '78'],
    ['Pfaff', 'Rahn', 'Herrmann'],
    ['25', '77', '84'],
    { ...stadiumsStore.Switzerland?.jakob.locationAndNames } as StadiumInfo,
    '56 000'
  ),

  new Match(
    '20.06.1954',
    tournamentStages.group2,
    ['Turkey', 'Korea Republic'],
    [[7, 0], [], []],
    ['Mamat', 'Küçükandonyadis', 'Sargun', 'Keskin'],
    ['10', '24', '30', '37', '64', '70', '76'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.charmilles.locationAndNames } as StadiumInfo,
    '3 541'
  ),

  new Match(
    '23.06.1954',
    tournamentStages.group2,
    ['Germany', 'Turkey'],
    [[7, 2], [], []],
    ['O.Walter', 'Schäfer', 'Morlock', 'F.Walter'],
    ['7', '12', '30', '60', '62', '77', '79'],
    ['Ertan', 'Küçükandonyadis'],
    ['21', '82'],
    { ...stadiumsStore.Switzerland?.hardturm.locationAndNames } as StadiumInfo,
    '17 000'
  ),

  // Группа 3
  new Match(
    '16.06.1954',
    tournamentStages.group3,
    ['Uruguay', 'Czechoslovakia'],
    [[2, 0], [], []],
    ['Míguez', 'Schiaffino'],
    ['71', '84'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.wankdorf.locationAndNames } as StadiumInfo,
    '20 500'
  ),

  new Match(
    '16.06.1954',
    tournamentStages.group3,
    ['Austria', 'Scotland'],
    [[1, 0], [], []],
    ['Probst'],
    ['33'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.hardturm.locationAndNames } as StadiumInfo,
    '25 000'
  ),

  new Match(
    '19.06.1954',
    tournamentStages.group3,
    ['Uruguay', 'Scotland'],
    [[7, 0], [], []],
    ['Borges', 'Míguez', 'Abbadie'],
    ['17', '30', '47', '54', '57', '83', '85'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.jakob.locationAndNames } as StadiumInfo,
    '34 000'
  ),

  new Match(
    '19.06.1954',
    tournamentStages.group3,
    ['Austria', 'Czechoslovakia'],
    [[5, 0], [], []],
    ['Stojaspal', 'Probst'],
    ['3', '4', '21', '24', '65'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.hardturm.locationAndNames } as StadiumInfo,
    '26 000'
  ),

  // Группа 4
  new Match(
    '17.06.1954',
    tournamentStages.group4,
    ['Switzerland', 'Italy'],
    [[2, 1], [], []],
    ['Ballaman', 'Hügi'],
    ['18', '78'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.pontaise.locationAndNames } as StadiumInfo,
    '40 749'
  ),

  new Match(
    '17.06.1954',
    tournamentStages.group4,
    ['England', 'Belgium'],
    [[3, 3], [1, 1], []],
    ['Broadis', 'Lofthouse'],
    ['26', '36', '63', '91'],
    ['Anoul', 'Coppens', 'Dickinson'],
    ['5', '67', '71', '94(o.g.)'],
    { ...stadiumsStore.Switzerland?.jakob.locationAndNames } as StadiumInfo,
    '14 000'
  ),

  new Match(
    '20.06.1954',
    tournamentStages.group4,
    ['Italy', 'Belgium'],
    [[4, 1], [], []],
    ['Pandolfini', 'Galli', 'Frignani', 'Lorenzi'],
    ['41(p)', '48', '58', '78'],
    ['Anoul'],
    ['81'],
    { ...stadiumsStore.Switzerland?.cornaredo.locationAndNames } as StadiumInfo,
    '24 000'
  ),

  new Match(
    '20.06.1954',
    tournamentStages.group4,
    ['England', 'Switzerland'],
    [[2, 0], [], []],
    ['Mullen', 'Wilshaw'],
    ['43', '69'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.wankdorf.locationAndNames } as StadiumInfo,
    '43 119'
  ),

  new Match(
    '23.06.1954',
    tournamentStages.group4,
    ['Switzerland', 'Italy'],
    [[4, 1], [], []],
    ['Hügi', 'Ballaman', 'Fatton'],
    ['14', '48', '85', '90'],
    ['Nesti'],
    ['67'],
    { ...stadiumsStore.Switzerland?.jakob.locationAndNames } as StadiumInfo,
    '28 655'
  ),

  // 1/4 финала
  new Match(
    '26.06.1954',
    tournamentStages.quarterFinal,
    ['Austria', 'Switzerland'],
    [[7, 5], [], []],
    ['Wagner', 'A.Körner', 'Ocwirk', 'Probst'],
    ['25', '26', '27', '32', '34', '53', '76'],
    ['Ballaman', 'Hügi'],
    ['16', '17', '19', '39', '60'],
    { ...stadiumsStore.Switzerland?.pontaise.locationAndNames } as StadiumInfo,
    '30 340'
  ),

  new Match(
    '26.06.1954',
    tournamentStages.quarterFinal,
    ['Uruguay', 'England'],
    [[4, 2], [], []],
    ['Borges', 'Varela', 'Schiaffino', 'Ambrois'],
    ['5', '39', '46', '78'],
    ['Lofthouse', 'Finney'],
    ['16', '67'],
    { ...stadiumsStore.Switzerland?.jakob.locationAndNames } as StadiumInfo,
    '28 000'
  ),

  new Match(
    '27.06.1954',
    tournamentStages.quarterFinal,
    ['Germany', 'Yugoslavia'],
    [[2, 0], [], []],
    ['Horvat', 'Rahn'],
    ['9(o.g.)', '85'],
    [],
    [],
    { ...stadiumsStore.Switzerland?.charmilles.locationAndNames } as StadiumInfo,
    '17 000'
  ),

  new Match(
    '27.06.1954',
    tournamentStages.quarterFinal,
    ['Hungary', 'Brazil'],
    [[4, 2], [], []],
    ['Hidegkuti', 'Kocsis', 'Lantos'],
    ['4', '7', '60(p)', '88'],
    ['Djalma Santos', 'Julinho'],
    ['18(p)', '65'],
    { ...stadiumsStore.Switzerland?.wankdorf.locationAndNames } as StadiumInfo,
    '40 000'
  ),

  // 1/2 финала
  new Match(
    '30.06.1954',
    tournamentStages.semiFinal,
    ['Germany', 'Austria'],
    [[6, 1], [], []],
    ['Schäfer', 'Morlock', 'F.Walter', 'O.Walter'],
    ['31', '47', '54(p)', '61', '64(p)', '89'],
    ['Probst'],
    ['51'],
    { ...stadiumsStore.Switzerland?.jakob.locationAndNames } as StadiumInfo,
    '58 000'
  ),

  new Match(
    '30.06.1954',
    tournamentStages.semiFinal,
    ['Hungary', 'Uruguay'],
    [[2, 2], [2, 0], []],
    ['Czibor', 'Hidegkuti', 'Kocsis'],
    ['13', '46', '111', '116'],
    ['Hohberg'],
    ['75', '86'],
    { ...stadiumsStore.Switzerland?.pontaise.locationAndNames } as StadiumInfo,
    '45 000'
  ),

  // Матч за 3-е место
  new Match(
    '03.07.1954',
    tournamentStages.thirdPlace,
    ['Austria', 'Uruguay'],
    [[3, 1], [], []],
    ['Stojaspal', 'Cruz', 'Ocwirk'],
    ['16(p)', '59(o.g.)', '89'],
    ['Hohberg'],
    ['22'],
    { ...stadiumsStore.Switzerland?.hardturm.locationAndNames } as StadiumInfo,
    '32 000'
  ),

  // Финал
  new Match(
    '03.07.1954',
    tournamentStages.final,
    ['Germany', 'Hungary'],
    [[3, 2], [], []],
    ['Morlock', 'Rahn'],
    ['10', '18', '84'],
    ['Puskás', 'Czibor'],
    ['6', '8'],
    { ...stadiumsStore.Switzerland?.wankdorf.locationAndNames } as StadiumInfo,
    '62 500'
  ),
]
