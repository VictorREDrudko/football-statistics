// import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
// import { Match } from '@/shared/model/tournament-config/class-match/Match'
// import {
//   MatchInfo,
//   StadiumInfo,
// } from '@/shared/model/tournament-config/class-match/types'
// import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/CHAMPIONSHIP_STAGES'

// export const finalStageMatches1994: MatchInfo[] = [
//   new Match(
//     '18.06.1994',
//     tournamentStages.groupA,
//     ['United States', 'Switzerland'],
//     [[1, 1], [], []],
//     ['E.Wynalda'],
//     ['45'],
//     ['G.Bregy'],
//     ['39'],
//     {
//       ...stadiumsStore['United States']?.pontiac.locationAndNames,
//     } as StadiumInfo,
//     '73 425'
//   ),

//   new Match(
//     '18.06.1994',
//     tournamentStages.groupA,
//     ['Romania', 'Colombia'],
//     [[3, 1], [], []],
//     ['F.Răducioiu', 'G.Hagi'],
//     ['16, 89', '34'],
//     ['A.Valencia'],
//     ['43'],
//     { ...stadiumsStore['United States']?.rose.locationAndNames } as StadiumInfo,
//     '91 856'
//   ),

//   new Match(
//     '22.06.1994',
//     tournamentStages.groupA,
//     ['Switzerland', 'Romania'],
//     [[4, 1], [], []],
//     ['A.Sutter', 'S.Chapuisat', 'A.Knup'],
//     ['16', '52', '66, 72'],
//     ['G.Hagi'],
//     ['35'],
//     {
//       ...stadiumsStore['United States']?.pontiac.locationAndNames,
//     } as StadiumInfo,
//     '61 428'
//   ),

//   new Match(
//     '22.06.1994',
//     tournamentStages.groupA,
//     ['United States', 'Colombia'],
//     [[2, 1], [], []],
//     ['A.Escobar', 'E.Stewart'],
//     ['35(o.g.)', '52'],
//     ['A.Valencia'],
//     ['90'],
//     { ...stadiumsStore['United States']?.rose.locationAndNames } as StadiumInfo,
//     '93 869'
//   ),

//   new Match(
//     '26.06.1994',
//     tournamentStages.groupA,
//     ['Colombia', 'Switzerland'],
//     [[2, 0], [], []],
//     ['H.Gaviria', 'H.Lozano'],
//     ['44', '90+1'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.stanford.locationAndNames,
//     } as StadiumInfo,
//     '83 401'
//   ),

//   new Match(
//     '26.06.1994',
//     tournamentStages.groupA,
//     ['Romania', 'United States'],
//     [[1, 0], [], []],
//     ['D.Petrescu'],
//     ['18'],
//     [],
//     [],
//     { ...stadiumsStore['United States']?.rose.locationAndNames } as StadiumInfo,
//     '93 869'
//   ),

//   new Match(
//     '19.06.1994',
//     tournamentStages.groupB,
//     ['Cameroon', 'Sweden'],
//     [[2, 2], [], []],
//     ['J.-D.Embe', 'F.Omam-Biyik'],
//     ['31', '47'],
//     ['R.Ljung', 'M.Dahlin'],
//     ['8', '75'],
//     { ...stadiumsStore['United States']?.rose.locationAndNames } as StadiumInfo,
//     '93 194'
//   ),

//   new Match(
//     '20.06.1994',
//     tournamentStages.groupB,
//     ['Brazil', 'Russia'],
//     [[2, 0], [], []],
//     ['Romário', 'Raí'],
//     ['26', '52(p)'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.stanford.locationAndNames,
//     } as StadiumInfo,
//     '81 061'
//   ),

//   new Match(
//     '24.06.1994',
//     tournamentStages.groupB,
//     ['Brazil', 'Cameroon'],
//     [[3, 0], [], []],
//     ['Romário', 'Márcio Santos', 'Bebeto'],
//     ['39', '66', '73'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.stanford.locationAndNames,
//     } as StadiumInfo,
//     '83 401'
//   ),

//   new Match(
//     '24.06.1994',
//     tournamentStages.groupB,
//     ['Sweden', 'Russia'],
//     [[3, 1], [], []],
//     ['T.Brolin', 'M.Dahlin'],
//     ['37(p)', '59, 81'],
//     ['O.Salenko'],
//     ['4(p)'],
//     {
//       ...stadiumsStore['United States']?.pontiac.locationAndNames,
//     } as StadiumInfo,
//     '71 528'
//   ),

//   new Match(
//     '28.06.1994',
//     tournamentStages.groupB,
//     ['Russia', 'Cameroon'],
//     [[6, 1], [], []],
//     ['O.Salenko', 'D.Radchenko'],
//     ['15, 41, 44(p), 72, 75', '81'],
//     ['R.Milla'],
//     ['46'],
//     {
//       ...stadiumsStore['United States']?.stanford.locationAndNames,
//     } as StadiumInfo,
//     '74 914'
//   ),

//   new Match(
//     '28.06.1994',
//     tournamentStages.groupB,
//     ['Brazil', 'Sweden'],
//     [[1, 1], [], []],
//     ['Romário'],
//     ['47'],
//     ['K.Andersson'],
//     ['23'],
//     {
//       ...stadiumsStore['United States']?.pontiac.locationAndNames,
//     } as StadiumInfo,
//     '77 217'
//   ),

//   new Match(
//     '17.06.1994',
//     tournamentStages.groupC,
//     ['Germany', 'Bolivia'],
//     [[1, 0], [], []],
//     ['J.Klinsmann'],
//     ['61'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.soldier.locationAndNames,
//     } as StadiumInfo,
//     '63 117'
//   ),

//   new Match(
//     '17.06.1994',
//     tournamentStages.groupC,
//     ['Spain', 'Korea Republic'],
//     [[2, 2], [], []],
//     ['J.Salinas', 'A.Goikoetxea'],
//     ['51', '56'],
//     ['Hong Myung-bo', 'Seo Jung-won'],
//     ['85', '90'],
//     {
//       ...stadiumsStore['United States']?.cotton.locationAndNames,
//     } as StadiumInfo,
//     '56 247'
//   ),

//   new Match(
//     '21.06.1994',
//     tournamentStages.groupC,
//     ['Germany', 'Spain'],
//     [[1, 1], [], []],
//     ['J.Klinsmann'],
//     ['48'],
//     ['A.Goikoetxea'],
//     ['14'],
//     {
//       ...stadiumsStore['United States']?.soldier.locationAndNames,
//     } as StadiumInfo,
//     '63 113'
//   ),

//   new Match(
//     '23.06.1994',
//     tournamentStages.groupC,
//     ['Korea Republic', 'Bolivia'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.foxboro.locationAndNames,
//     } as StadiumInfo,
//     '54 453'
//   ),

//   new Match(
//     '27.06.1994',
//     tournamentStages.groupC,
//     ['Spain', 'Bolivia'],
//     [[3, 1], [], []],
//     ['P.Guardiola', 'J.L.Caminero'],
//     ['19(p)', '66, 70'],
//     ['E.Sanchez'],
//     ['67'],
//     {
//       ...stadiumsStore['United States']?.soldier.locationAndNames,
//     } as StadiumInfo,
//     '63 089'
//   ),

//   new Match(
//     '27.06.1994',
//     tournamentStages.groupC,
//     ['Germany', 'Korea Republic'],
//     [[3, 2], [], []],
//     ['J.Klinsmann', 'K.-H.Riedle'],
//     ['12, 37', '20'],
//     ['Hwang Sun-hong', 'Hong Myung-bo'],
//     ['52', '63'],
//     {
//       ...stadiumsStore['United States']?.cotton.locationAndNames,
//     } as StadiumInfo,
//     '63 998'
//   ),

//   new Match(
//     '21.06.1994',
//     tournamentStages.groupD,
//     ['Argentina', 'Greece'],
//     [[4, 0], [], []],
//     ['G.Batistuta', 'D.Maradona'],
//     ['2, 44, 90(p)', '60'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.foxboro.locationAndNames,
//     } as StadiumInfo,
//     '54 456'
//   ),

//   new Match(
//     '21.06.1994',
//     tournamentStages.groupD,
//     ['Nigeria', 'Bulgaria'],
//     [[3, 0], [], []],
//     ['R.Yekini', 'D.Amokachi', 'E.Amunike'],
//     ['21', '43', '55'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.cotton.locationAndNames,
//     } as StadiumInfo,
//     '44 132'
//   ),

//   new Match(
//     '25.06.1994',
//     tournamentStages.groupD,
//     ['Argentina', 'Nigeria'],
//     [[2, 1], [], []],
//     ['C.Caniggia'],
//     ['21, 28'],
//     ['S.Siasia'],
//     ['8'],
//     {
//       ...stadiumsStore['United States']?.foxboro.locationAndNames,
//     } as StadiumInfo,
//     '54 453'
//   ),

//   new Match(
//     '26.06.1994',
//     tournamentStages.groupD,
//     ['Bulgaria', 'Greece'],
//     [[4, 0], [], []],
//     ['H.Stoichkov', 'Y.Letchkov', 'D.Borimirov'],
//     ['5(p), 55', '66', '90'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.soldier.locationAndNames,
//     } as StadiumInfo,
//     '63 160'
//   ),

//   new Match(
//     '30.06.1994',
//     tournamentStages.groupD,
//     ['Bulgaria', 'Argentina'],
//     [[2, 0], [], []],
//     ['H.Stoichkov', 'N.Sirakov'],
//     ['61', '90+3'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.cotton.locationAndNames,
//     } as StadiumInfo,
//     '63 998'
//   ),

//   new Match(
//     '30.06.1994',
//     tournamentStages.groupD,
//     ['Nigeria', 'Greece'],
//     [[2, 0], [], []],
//     ['F.George', 'D.Amokachi'],
//     ['45+2', '90+5'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.foxboro.locationAndNames,
//     } as StadiumInfo,
//     '53 001'
//   ),

//   new Match(
//     '18.06.1994',
//     tournamentStages.groupE,
//     ['Ireland', 'Italy'],
//     [[1, 0], [], []],
//     ['R.Houghton'],
//     ['12'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.giants.locationAndNames,
//     } as StadiumInfo,
//     '75 338'
//   ),

//   new Match(
//     '19.06.1994',
//     tournamentStages.groupE,
//     ['Norway', 'Mexico'],
//     [[1, 0], [], []],
//     ['K.Rekdal'],
//     ['85'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.kennedy.locationAndNames,
//     } as StadiumInfo,
//     '52 395'
//   ),

//   new Match(
//     '23.06.1994',
//     tournamentStages.groupE,
//     ['Italy', 'Norway'],
//     [[1, 0], [], []],
//     ['D.Baggio'],
//     ['69'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.giants.locationAndNames,
//     } as StadiumInfo,
//     '74 624'
//   ),

//   new Match(
//     '24.06.1994',
//     tournamentStages.groupE,
//     ['Mexico', 'Ireland'],
//     [[2, 1], [], []],
//     ['Luis Garcia'],
//     ['42, 65'],
//     ['J.Aldridge'],
//     ['84'],
//     {
//       ...stadiumsStore['United States']?.citrus.locationAndNames,
//     } as StadiumInfo,
//     '60 790'
//   ),

//   new Match(
//     '28.06.1994',
//     tournamentStages.groupE,
//     ['Italy', 'Mexico'],
//     [[1, 1], [], []],
//     ['D.Massaro'],
//     ['48'],
//     ['M.Bernal'],
//     ['57'],
//     {
//       ...stadiumsStore['United States']?.kennedy.locationAndNames,
//     } as StadiumInfo,
//     '52 535'
//   ),

//   new Match(
//     '28.06.1994',
//     tournamentStages.groupE,
//     ['Ireland', 'Norway'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.giants.locationAndNames,
//     } as StadiumInfo,
//     '72 404'
//   ),

//   new Match(
//     '19.06.1994',
//     tournamentStages.groupF,
//     ['Belgium', 'Morocco'],
//     [[1, 0], [], []],
//     ['M.Degryse'],
//     ['11'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.citrus.locationAndNames,
//     } as StadiumInfo,
//     '61 219'
//   ),

//   new Match(
//     '20.06.1994',
//     tournamentStages.groupF,
//     ['Netherlands', 'Saudi Arabia'],
//     [[2, 1], [], []],
//     ['W.Jonk', 'G.Taument'],
//     ['50', '86'],
//     ['F.Amin'],
//     ['18'],
//     {
//       ...stadiumsStore['United States']?.kennedy.locationAndNames,
//     } as StadiumInfo,
//     '50 535'
//   ),

//   new Match(
//     '25.06.1994',
//     tournamentStages.groupF,
//     ['Belgium', 'Netherlands'],
//     [[1, 0], [], []],
//     ['P.Albert'],
//     ['65'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.citrus.locationAndNames,
//     } as StadiumInfo,
//     '62 387'
//   ),

//   new Match(
//     '25.06.1994',
//     tournamentStages.groupF,
//     ['Saudi Arabia', 'Morocco'],
//     [[2, 1], [], []],
//     ['Sami Al Jaber', 'F.Amin'],
//     ['7(p)', '45'],
//     ['M.Chaouch'],
//     ['26'],
//     {
//       ...stadiumsStore['United States']?.giants.locationAndNames,
//     } as StadiumInfo,
//     '76 322'
//   ),

//   new Match(
//     '29.06.1994',
//     tournamentStages.groupF,
//     ['Saudi Arabia', 'Belgium'],
//     [[1, 0], [], []],
//     ['Said Al Owayran'],
//     ['5'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.kennedy.locationAndNames,
//     } as StadiumInfo,
//     '52 959'
//   ),

//   new Match(
//     '29.06.1994',
//     tournamentStages.groupF,
//     ['Netherlands', 'Morocco'],
//     [[2, 1], [], []],
//     ['D.Bergkamp', 'B.Roy'],
//     ['43', '77'],
//     ['H.Nader'],
//     ['47'],
//     {
//       ...stadiumsStore['United States']?.citrus.locationAndNames,
//     } as StadiumInfo,
//     '60 578'
//   ),

//   new Match(
//     '02.07.1994',
//     tournamentStages.roundOf16,
//     ['Germany', 'Belgium'],
//     [[3, 2], [], []],
//     ['R.Völler', 'J.Klinsmann'],
//     ['6, 38', '11'],
//     ['G.Grün', 'P.Albert'],
//     ['8', '90'],
//     {
//       ...stadiumsStore['United States']?.soldier.locationAndNames,
//     } as StadiumInfo,
//     '60 246'
//   ),

//   new Match(
//     '02.07.1994',
//     tournamentStages.roundOf16,
//     ['Spain', 'Switzerland'],
//     [[3, 0], [], []],
//     ['F.Hierro', 'Luis Enrique', 'Beguiristáin'],
//     ['15', '74', '86(p)'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.kennedy.locationAndNames,
//     } as StadiumInfo,
//     '53 121'
//   ),

//   new Match(
//     '03.07.1994',
//     tournamentStages.roundOf16,
//     ['Sweden', 'Saudi Arabia'],
//     [[3, 1], [], []],
//     ['M.Dahlin', 'K.Andersson'],
//     ['6', '51, 88'],
//     ['Fahad Al Ghesheyan'],
//     ['85'],
//     {
//       ...stadiumsStore['United States']?.cotton.locationAndNames,
//     } as StadiumInfo,
//     '60 277'
//   ),

//   new Match(
//     '03.07.1994',
//     tournamentStages.roundOf16,
//     ['Romania', 'Argentina'],
//     [[3, 2], [], []],
//     ['I.Dumitrescu', 'G.Hagi'],
//     ['11, 18', '58'],
//     ['G.Batistuta', 'A.Balbo'],
//     ['16(p)', '75'],
//     { ...stadiumsStore['United States']?.rose.locationAndNames } as StadiumInfo,
//     '90 469'
//   ),

//   new Match(
//     '04.07.1994',
//     tournamentStages.roundOf16,
//     ['Netherlands', 'Ireland'],
//     [[2, 0], [], []],
//     ['D.Bergkamp', 'W.Jonk'],
//     ['11', '41'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.citrus.locationAndNames,
//     } as StadiumInfo,
//     '61 355'
//   ),

//   new Match(
//     '04.07.1994',
//     tournamentStages.roundOf16,
//     ['Brazil', 'United States'],
//     [[1, 0], [], []],
//     ['Bebeto'],
//     ['72'],
//     [],
//     [],
//     {
//       ...stadiumsStore['United States']?.stanford.locationAndNames,
//     } as StadiumInfo,
//     '84 147'
//   ),

//   new Match(
//     '05.07.1994',
//     tournamentStages.roundOf16,
//     ['Italy', 'Nigeria'],
//     [[1, 1], [1, 0], []],
//     ['R.Baggio'],
//     ['88', '102'],
//     ['E.Amunike'],
//     ['25'],
//     {
//       ...stadiumsStore['United States']?.foxboro.locationAndNames,
//     } as StadiumInfo,
//     '54 367'
//   ),

//   new Match(
//     '05.07.1994',
//     tournamentStages.roundOf16,
//     ['Bulgaria', 'Mexico'],
//     [
//       [1, 1],
//       [0, 0],
//       [3, 1],
//     ],
//     ['H.Stoichkov'],
//     ['6'],
//     ['García Aspe'],
//     ['18(p)'],
//     {
//       ...stadiumsStore['United States']?.giants.locationAndNames,
//     } as StadiumInfo,
//     '71 030'
//   ),

//   new Match(
//     '09.07.1994',
//     tournamentStages.quarterFinal,
//     ['Italy', 'Spain'],
//     [[2, 1], [], []],
//     ['D.Baggio', 'R.Baggio'],
//     ['25', '88'],
//     ['J.L.Caminero'],
//     ['58'],
//     {
//       ...stadiumsStore['United States']?.foxboro.locationAndNames,
//     } as StadiumInfo,
//     '53 400'
//   ),

//   new Match(
//     '09.07.1994',
//     tournamentStages.quarterFinal,
//     ['Brazil', 'Netherlands'],
//     [[3, 2], [], []],
//     ['Romário', 'Bebeto', 'Branco'],
//     ['53', '63', '81'],
//     ['D.Bergkamp', 'A.Winter'],
//     ['64', '76'],
//     {
//       ...stadiumsStore['United States']?.cotton.locationAndNames,
//     } as StadiumInfo,
//     '63 500'
//   ),

//   new Match(
//     '10.07.1994',
//     tournamentStages.quarterFinal,
//     ['Bulgaria', 'Germany'],
//     [[2, 1], [], []],
//     ['H.Stoichkov', 'Y.Letchkov'],
//     ['75', '78'],
//     ['L.Matthäus'],
//     ['47(p)'],
//     {
//       ...stadiumsStore['United States']?.giants.locationAndNames,
//     } as StadiumInfo,
//     '72 416'
//   ),

//   new Match(
//     '10.07.1994',
//     tournamentStages.quarterFinal,
//     ['Sweden', 'Romania'],
//     [
//       [1, 1],
//       [1, 1],
//       [5, 4],
//     ],
//     ['T.Brolin', 'K.Andersson'],
//     ['78', '115'],
//     ['F.Răducioiu'],
//     ['88, 101'],
//     {
//       ...stadiumsStore['United States']?.stanford.locationAndNames,
//     } as StadiumInfo,
//     '83 500'
//   ),

//   new Match(
//     '13.07.1994',
//     tournamentStages.semiFinal,
//     ['Italy', 'Bulgaria'],
//     [[2, 1], [], []],
//     ['R.Baggio'],
//     ['21, 25'],
//     ['H.Stoichkov'],
//     ['44(p)'],
//     {
//       ...stadiumsStore['United States']?.giants.locationAndNames,
//     } as StadiumInfo,
//     '74 110'
//   ),

//   new Match(
//     '13.07.1994',
//     tournamentStages.semiFinal,
//     ['Brazil', 'Sweden'],
//     [[1, 0], [], []],
//     ['Romário'],
//     ['80'],
//     [],
//     [],
//     { ...stadiumsStore['United States']?.rose.locationAndNames } as StadiumInfo,
//     '91 856'
//   ),

//   new Match(
//     '16.07.1994',
//     tournamentStages.thirdPlace,
//     ['Sweden', 'Bulgaria'],
//     [[4, 0], [], []],
//     ['T.Brolin', 'H.Mild', 'H.Larsson', 'K.Andersson'],
//     ['8', '30', '37', '39'],
//     [],
//     [],
//     { ...stadiumsStore['United States']?.rose.locationAndNames } as StadiumInfo,
//     '91 500'
//   ),

//   new Match(
//     '17.07.1994',
//     tournamentStages.final,
//     ['Brazil', 'Italy'],
//     [
//       [0, 0],
//       [0, 0],
//       [3, 2],
//     ],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore['United States']?.rose.locationAndNames } as StadiumInfo,
//     '94 194'
//   ),
// ]
