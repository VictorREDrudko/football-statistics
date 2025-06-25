import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1986: MatchInfo[] = [
  new Match(
    '31.05.1986',
    tournamentStages.groupA,
    ['Bulgaria', 'Italy'],
    [[1, 1], [], []],
    ['Sirakov'],
    ['85'],
    ['Altobelli'],
    ['44'],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '96 000'
  ),

  new Match(
    '02.06.1986',
    tournamentStages.groupA,
    ['Argentina', 'Korea Republic'],
    [[3, 1], [], []],
    ['Valdano', 'Ruggeri'],
    ['6, 46', '18'],
    ['Park Chang-Sun'],
    ['73'],
    { ...stadiumsStore.Mexico?.olimpico.locationAndNames } as StadiumInfo,
    '60 000'
  ),

  new Match(
    '05.06.1986',
    tournamentStages.groupA,
    ['Argentina', 'Italy'],
    [[1, 1], [], []],
    ['Maradona'],
    ['34'],
    ['Altobelli'],
    ['6(p)'],
    { ...stadiumsStore.Mexico?.cuauhtemoc.locationAndNames } as StadiumInfo,
    '32 000'
  ),

  new Match(
    '05.06.1986',
    tournamentStages.groupA,
    ['Korea Republic', 'Bulgaria'],
    [[1, 1], [], []],
    ['Kim Jong-Boo'],
    ['70'],
    ['Getov'],
    ['11'],
    { ...stadiumsStore.Mexico?.olimpico.locationAndNames } as StadiumInfo,
    '45 000'
  ),

  new Match(
    '10.06.1986',
    tournamentStages.groupA,
    ['Italy', 'Korea Republic'],
    [[3, 2], [], []],
    ['Altobelli', 'Cho Kwang-Rae'],
    ['17, 73', '82(o.g.)'],
    ['Choi Soon-Ho', 'Huh Jung-Moo'],
    ['62', '89'],
    { ...stadiumsStore.Mexico?.cuauhtemoc.locationAndNames } as StadiumInfo,
    '20 000'
  ),

  new Match(
    '10.06.1986',
    tournamentStages.groupA,
    ['Argentina', 'Bulgaria'],
    [[2, 0], [], []],
    ['Valdano', 'Burruchaga'],
    ['4', '77'],
    [],
    [],
    { ...stadiumsStore.Mexico?.olimpico.locationAndNames } as StadiumInfo,
    '65 000'
  ),

  new Match(
    '03.06.1986',
    tournamentStages.groupB,
    ['Mexico', 'Belgium'],
    [[2, 1], [], []],
    ['Quirarte', 'Sánchez'],
    ['23', '39'],
    ['Vandenbergh'],
    ['45'],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '110 000'
  ),

  new Match(
    '04.06.1986',
    tournamentStages.groupB,
    ['Paraguay', 'Iraq'],
    [[1, 0], [], []],
    ['Romero'],
    ['35'],
    [],
    [],
    { ...stadiumsStore.Mexico?.dosal.locationAndNames } as StadiumInfo,
    '24 000'
  ),

  new Match(
    '07.06.1986',
    tournamentStages.groupB,
    ['Mexico', 'Paraguay'],
    [[1, 1], [], []],
    ['Flores'],
    ['3'],
    ['Romero'],
    ['85'],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '114 600'
  ),

  new Match(
    '08.06.1986',
    tournamentStages.groupB,
    ['Belgium', 'Iraq'],
    [[2, 1], [], []],
    ['Scifo', 'Claesen'],
    ['16', '21(p)'],
    ['Radhi'],
    ['59'],
    { ...stadiumsStore.Mexico?.dosal.locationAndNames } as StadiumInfo,
    '20 000'
  ),

  new Match(
    '11.06.1986',
    tournamentStages.groupB,
    ['Paraguay', 'Belgium'],
    [[2, 2], [], []],
    ['Cabañas'],
    ['50', '76'],
    ['Vercauteren', 'Veyt'],
    ['30', '59'],
    { ...stadiumsStore.Mexico?.dosal.locationAndNames } as StadiumInfo,
    '16 000'
  ),

  new Match(
    '11.06.1986',
    tournamentStages.groupB,
    ['Mexico', 'Iraq'],
    [[1, 0], [], []],
    ['Quirarte'],
    ['54'],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '103 763'
  ),

  new Match(
    '01.06.1986',
    tournamentStages.groupC,
    ['France', 'Canada'],
    [[1, 0], [], []],
    ['Papin'],
    ['79'],
    [],
    [],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '36 000'
  ),

  new Match(
    '02.06.1986',
    tournamentStages.groupC,
    ['Soviet Union', 'Hungary'],
    [[6, 0], [], []],
    ['Yakovenko', 'Aleinikov', 'Belanov', 'Yaremchuk', 'Dajka', 'Rodionov'],
    ['2', '4', '24(p)', '66', '73(o.g.)', '80'],
    [],
    [],
    { ...stadiumsStore.Mexico?.chavez.locationAndNames } as StadiumInfo,
    '16 500'
  ),

  new Match(
    '05.06.1986',
    tournamentStages.groupC,
    ['France', 'Soviet Union'],
    [[1, 1], [], []],
    ['Fernández'],
    ['62'],
    ['Rats'],
    ['53'],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '36 540'
  ),

  new Match(
    '06.06.1986',
    tournamentStages.groupC,
    ['Hungary', 'Canada'],
    [[2, 0], [], []],
    ['Esterházy', 'Détári'],
    ['2', '75'],
    [],
    [],
    { ...stadiumsStore.Mexico?.chavez.locationAndNames } as StadiumInfo,
    '13 800'
  ),

  new Match(
    '09.06.1986',
    tournamentStages.groupC,
    ['France', 'Hungary'],
    [[3, 0], [], []],
    ['Stopyra', 'Tigana', 'Rocheteau'],
    ['29', '62', '84'],
    [],
    [],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '31 420'
  ),

  new Match(
    '09.06.1986',
    tournamentStages.groupC,
    ['Soviet Union', 'Canada'],
    [[2, 0], [], []],
    ['Blokhin', 'Zavarov'],
    ['58', '74'],
    [],
    [],
    { ...stadiumsStore.Mexico?.chavez.locationAndNames } as StadiumInfo,
    '14 200'
  ),

  new Match(
    '01.06.1986',
    tournamentStages.groupD,
    ['Brazil', 'Spain'],
    [[1, 0], [], []],
    ['Sócrates'],
    ['62'],
    [],
    [],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '35 748'
  ),

  new Match(
    '03.06.1986',
    tournamentStages.groupD,
    ['Algeria', 'North. Ireland'],
    [[1, 1], [], []],
    ['D.Zidane'],
    ['59'],
    ['Whiteside'],
    ['6'],
    { ...stadiumsStore.Mexico?.marzo.locationAndNames } as StadiumInfo,
    '22 000'
  ),

  new Match(
    '06.06.1986',
    tournamentStages.groupD,
    ['Brazil', 'Algeria'],
    [[1, 0], [], []],
    ['Careca'],
    ['66'],
    [],
    [],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '48 000'
  ),

  new Match(
    '07.06.1986',
    tournamentStages.groupD,
    ['Spain', 'North. Ireland'],
    [[2, 1], [], []],
    ['Butragueño', 'Salinas'],
    ['1', '18'],
    ['Clarke'],
    ['46'],
    { ...stadiumsStore.Mexico?.marzo.locationAndNames } as StadiumInfo,
    '28 000'
  ),

  new Match(
    '12.06.1986',
    tournamentStages.groupD,
    ['Brazil', 'North. Ireland'],
    [[3, 0], [], []],
    ['Careca', 'Josimar'],
    ['15, 87', '42'],
    [],
    [],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '51 000'
  ),

  new Match(
    '12.06.1986',
    tournamentStages.groupD,
    ['Spain', 'Algeria'],
    [[3, 0], [], []],
    ['Calderé', 'Eloy'],
    ['15, 68', '70'],
    [],
    [],
    { ...stadiumsStore.Mexico?.tecnologico.locationAndNames } as StadiumInfo,
    '23 980'
  ),

  new Match(
    '04.06.1986',
    tournamentStages.groupE,
    ['Uruguay', 'Germany'],
    [[1, 1], [], []],
    ['Alzamendi'],
    ['4'],
    ['Allofs'],
    ['84'],
    { ...stadiumsStore.Mexico?.corregidora.locationAndNames } as StadiumInfo,
    '30 500'
  ),

  new Match(
    '04.06.1986',
    tournamentStages.groupE,
    ['Denmark', 'Scotland'],
    [[1, 0], [], []],
    ['Elkjær'],
    ['57'],
    [],
    [],
    { ...stadiumsStore.Mexico?.neza86.locationAndNames } as StadiumInfo,
    '18 000'
  ),

  new Match(
    '08.06.1986',
    tournamentStages.groupE,
    ['Germany', 'Scotland'],
    [[2, 1], [], []],
    ['Völler', 'Allofs'],
    ['23', '49'],
    ['Strachan'],
    ['18'],
    { ...stadiumsStore.Mexico?.corregidora.locationAndNames } as StadiumInfo,
    '30 000'
  ),

  new Match(
    '08.06.1986',
    tournamentStages.groupE,
    ['Denmark', 'Uruguay'],
    [[6, 1], [], []],
    ['Elkjær', 'Lerby', 'Laudrup', 'J.Olsen'],
    ['11, 76, 80', '41', '52', '88'],
    ['Francescoli'],
    ['45(p)'],
    { ...stadiumsStore.Mexico?.neza86.locationAndNames } as StadiumInfo,
    '26 500'
  ),

  new Match(
    '13.06.1986',
    tournamentStages.groupE,
    ['Denmark', 'Germany'],
    [[2, 0], [], []],
    ['J.Olsen', 'Eriksen'],
    ['43(p)', '62'],
    [],
    [],
    { ...stadiumsStore.Mexico?.corregidora.locationAndNames } as StadiumInfo,
    '36 000'
  ),

  new Match(
    '13.06.1986',
    tournamentStages.groupE,
    ['Scotland', 'Uruguay'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Mexico?.neza86.locationAndNames } as StadiumInfo,
    '20 000'
  ),

  new Match(
    '02.06.1986',
    tournamentStages.groupF,
    ['Morocco', 'Poland'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Mexico?.universitario.locationAndNames } as StadiumInfo,
    '19 900'
  ),

  new Match(
    '03.06.1986',
    tournamentStages.groupF,
    ['Portugal', 'England'],
    [[1, 0], [], []],
    ['Carlos Manuel'],
    ['75'],
    [],
    [],
    { ...stadiumsStore.Mexico?.tecnologico.locationAndNames } as StadiumInfo,
    '23 000'
  ),

  new Match(
    '06.06.1986',
    tournamentStages.groupF,
    ['Morocco', 'England'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Mexico?.tecnologico.locationAndNames } as StadiumInfo,
    '20 200'
  ),

  new Match(
    '07.06.1986',
    tournamentStages.groupF,
    ['Poland', 'Portugal'],
    [[1, 0], [], []],
    ['Smolarek'],
    ['68'],
    [],
    [],
    { ...stadiumsStore.Mexico?.universitario.locationAndNames } as StadiumInfo,
    '19 915'
  ),

  new Match(
    '11.06.1986',
    tournamentStages.groupF,
    ['England', 'Poland'],
    [[3, 0], [], []],
    ['Lineker'],
    ['8, 14, 36'],
    [],
    [],
    { ...stadiumsStore.Mexico?.universitario.locationAndNames } as StadiumInfo,
    '22 700'
  ),

  new Match(
    '11.06.1986',
    tournamentStages.groupF,
    ['Morocco', 'Portugal'],
    [[3, 1], [], []],
    ['Khairi', 'A.Merry'],
    ['19, 27', '62'],
    ['Diamantino'],
    ['80'],
    { ...stadiumsStore.Mexico?.marzo.locationAndNames } as StadiumInfo,
    '28 000'
  ),

  new Match(
    '15.06.1986',
    tournamentStages.roundOf16,
    ['Mexico', 'Bulgaria'],
    [[2, 0], [], []],
    ['Negrete', 'Servín'],
    ['34', '61'],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '114 580'
  ),

  new Match(
    '15.06.1986',
    tournamentStages.roundOf16,
    ['Belgium', 'Soviet Union'],
    [[2, 2], [2, 1], []],
    ['Scifo', 'Ceulemans', 'Demol', 'Claesen'],
    ['56', '77', '102', '110'],
    ['Belanov'],
    ['27, 70, 111(p)'],
    { ...stadiumsStore.Mexico?.nouCamp.locationAndNames } as StadiumInfo,
    '32 277'
  ),

  new Match(
    '16.06.1986',
    tournamentStages.roundOf16,
    ['Brazil', 'Poland'],
    [[4, 0], [], []],
    ['Sócrates', 'Josimar', 'Edinho', 'Careca'],
    ['30(p)', '55', '79', '83(p)'],
    [],
    [],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '45 000'
  ),

  new Match(
    '16.06.1986',
    tournamentStages.roundOf16,
    ['Argentina', 'Uruguay'],
    [[1, 0], [], []],
    ['Pasculli'],
    ['42'],
    [],
    [],
    { ...stadiumsStore.Mexico?.cuauhtemoc.locationAndNames } as StadiumInfo,
    '26 000'
  ),

  new Match(
    '17.06.1986',
    tournamentStages.roundOf16,
    ['France', 'Italy'],
    [[2, 0], [], []],
    ['Platini', 'Stopyra'],
    ['15', '57'],
    [],
    [],
    { ...stadiumsStore.Mexico?.olimpico.locationAndNames } as StadiumInfo,
    '70 000'
  ),

  new Match(
    '17.06.1986',
    tournamentStages.roundOf16,
    ['Germany', 'Morocco'],
    [[1, 0], [], []],
    ['Matthäus'],
    ['88'],
    [],
    [],
    { ...stadiumsStore.Mexico?.universitario.locationAndNames } as StadiumInfo,
    '19 800'
  ),

  new Match(
    '18.06.1986',
    tournamentStages.roundOf16,
    ['England', 'Paraguay'],
    [[3, 0], [], []],
    ['Lineker', 'Beardsley'],
    ['31, 73', '56'],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '98 728'
  ),

  new Match(
    '18.06.1986',
    tournamentStages.roundOf16,
    ['Spain', 'Denmark'],
    [[5, 1], [], []],
    ['Butragueño', 'Goikoetxea'],
    ['43, 56, 80, 88(p)', '68(p)'],
    ['J.Olsen'],
    ['33(p)'],
    { ...stadiumsStore.Mexico?.corregidora.locationAndNames } as StadiumInfo,
    '38 500'
  ),

  new Match(
    '21.06.1986',
    tournamentStages.quarterFinal,
    ['France', 'Brazil'],
    [
      [1, 1],
      [0, 0],
      [4, 3],
    ],
    ['Platini'],
    ['40'],
    ['Careca'],
    ['17'],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '65 000'
  ),

  new Match(
    '21.06.1986',
    tournamentStages.quarterFinal,
    ['Germany', 'Mexico'],
    [
      [0, 0],
      [0, 0],
      [4, 1],
    ],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Mexico?.universitario.locationAndNames } as StadiumInfo,
    '41 700'
  ),

  new Match(
    '22.06.1986',
    tournamentStages.quarterFinal,
    ['Argentina', 'England'],
    [[2, 1], [], []],
    ['Maradona'],
    ['51, 55'],
    ['Lineker'],
    ['81'],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '114 580'
  ),

  new Match(
    '22.06.1986',
    tournamentStages.quarterFinal,
    ['Belgium', 'Spain'],
    [
      [1, 1],
      [0, 0],
      [5, 4],
    ],
    ['Ceulemans'],
    ['35'],
    ['Señor'],
    ['85'],
    { ...stadiumsStore.Mexico?.cuauhtemoc.locationAndNames } as StadiumInfo,
    '45 000'
  ),

  new Match(
    '25.06.1986',
    tournamentStages.semiFinal,
    ['Germany', 'France'],
    [[2, 0], [], []],
    ['Brehme', 'Völler'],
    ['9', '89'],
    [],
    [],
    { ...stadiumsStore.Mexico?.jalisco.locationAndNames } as StadiumInfo,
    '45 000'
  ),

  new Match(
    '25.06.1986',
    tournamentStages.semiFinal,
    ['Argentina', 'Belgium'],
    [[2, 0], [], []],
    ['Maradona'],
    ['51, 63'],
    [],
    [],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '114 500'
  ),

  new Match(
    '28.06.1986',
    tournamentStages.thirdPlace,
    ['France', 'Belgium'],
    [[2, 2], [2, 0], []],
    ['Ferreri', 'Papin', 'Genghini', 'Amoros'],
    ['27', '43', '104', '111(p)'],
    ['Ceulemans', 'Claesen'],
    ['11', '73'],
    { ...stadiumsStore.Mexico?.cuauhtemoc.locationAndNames } as StadiumInfo,
    '21 000'
  ),

  new Match(
    '29.06.1986',
    tournamentStages.final,
    ['Argentina', 'Germany'],
    [[3, 2], [], []],
    ['Brown', 'Valdano', 'Burruchaga'],
    ['23', '55', '83'],
    ['Rummenigge', 'Völler'],
    ['74', '80'],
    { ...stadiumsStore.Mexico?.azteca.locationAndNames } as StadiumInfo,
    '114 600'
  ),
]
