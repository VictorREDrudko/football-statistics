// import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
// import { Match } from '@/shared/model/tournament-config/class-match/Match'
// import {
//   MatchInfo,
//   StadiumInfo,
// } from '@/shared/model/tournament-config/class-match/types'
// import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/CHAMPIONSHIP_STAGES'

// export const finalStageMatches1990: MatchInfo[] = [
//   new Match(
//     '09.06.1990',
//     tournamentStages.groupA,
//     ['Italy', 'Austria'],
//     [[1, 0], [], []],
//     ['S.Schillaci'],
//     ['78'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.olimpico.locationAndNames } as StadiumInfo,
//     '73 303'
//   ),

//   new Match(
//     '10.06.1990',
//     tournamentStages.groupA,
//     ['Czechoslovakia', 'United States'],
//     [[5, 1], [], []],
//     ['T.Skuhravy', 'M.Bílek', 'I.Hašek', 'M.Luhovy'],
//     ['25, 78', '39', '50', '90'],
//     ['P.Caligiuri'],
//     ['61'],
//     { ...stadiumsStore.Italy?.franchi.locationAndNames } as StadiumInfo,
//     '33 266'
//   ),

//   new Match(
//     '14.06.1990',
//     tournamentStages.groupA,
//     ['Italy', 'United States'],
//     [[1, 0], [], []],
//     ['G.Giannini'],
//     ['11'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.olimpico.locationAndNames } as StadiumInfo,
//     '73 423'
//   ),

//   new Match(
//     '15.06.1990',
//     tournamentStages.groupA,
//     ['Czechoslovakia', 'Austria'],
//     [[1, 0], [], []],
//     ['M.Bílek'],
//     ['30'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.franchi.locationAndNames } as StadiumInfo,
//     '38 962'
//   ),

//   new Match(
//     '19.06.1990',
//     tournamentStages.groupA,
//     ['Italy', 'Czechoslovakia'],
//     [[2, 0], [], []],
//     ['S.Schillaci', 'R.Baggio'],
//     ['10', '78'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.olimpico.locationAndNames } as StadiumInfo,
//     '73 303'
//   ),

//   new Match(
//     '19.06.1990',
//     tournamentStages.groupA,
//     ['Austria', 'United States'],
//     [[2, 1], [], []],
//     ['A.Ogris', 'G.Rodax'],
//     ['52', '65'],
//     ['B.Murray'],
//     ['85'],
//     { ...stadiumsStore.Italy?.franchi.locationAndNames } as StadiumInfo,
//     '34 857'
//   ),

//   new Match(
//     '08.06.1990',
//     tournamentStages.groupB,
//     ['Cameroon', 'Argentina'],
//     [[1, 0], [], []],
//     ['F.Omam-Biyik'],
//     ['65'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.sanSiro.locationAndNames } as StadiumInfo,
//     '73 780'
//   ),

//   new Match(
//     '09.06.1990',
//     tournamentStages.groupB,
//     ['Romania', 'Soviet Union'],
//     [[2, 0], [], []],
//     ['M.Lăcătuș'],
//     ['41, 54(p)'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.nicola.locationAndNames } as StadiumInfo,
//     '42 960'
//   ),

//   new Match(
//     '13.06.1990',
//     tournamentStages.groupB,
//     ['Argentina', 'Soviet Union'],
//     [[2, 0], [], []],
//     ['P.Troglio', 'J.Burruchaga'],
//     ['27', '79'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.maradona.locationAndNames } as StadiumInfo,
//     '55 759'
//   ),

//   new Match(
//     '14.06.1990',
//     tournamentStages.groupB,
//     ['Cameroon', 'Romania'],
//     [[2, 1], [], []],
//     ['R.Milla'],
//     ['76, 86'],
//     ['G.Balint'],
//     ['88'],
//     { ...stadiumsStore.Italy?.nicola.locationAndNames } as StadiumInfo,
//     '38 687'
//   ),

//   new Match(
//     '18.06.1990',
//     tournamentStages.groupB,
//     ['Argentina', 'Romania'],
//     [[1, 1], [], []],
//     ['P.Monzón'],
//     ['62'],
//     ['G.Balint'],
//     ['68'],
//     { ...stadiumsStore.Italy?.maradona.locationAndNames } as StadiumInfo,
//     '52 733'
//   ),

//   new Match(
//     '18.06.1990',
//     tournamentStages.groupB,
//     ['Soviet Union', 'Cameroon'],
//     [[4, 0], [], []],
//     ['O.Protasov', 'A.Zygmantovich', 'O.Zavarov', 'I.Dobrovolskiy'],
//     ['20', '29', '52', '63'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.nicola.locationAndNames } as StadiumInfo,
//     '37 307'
//   ),

//   new Match(
//     '10.06.1990',
//     tournamentStages.groupC,
//     ['Brazil', 'Sweden'],
//     [[2, 1], [], []],
//     ['Careca'],
//     ['40, 63'],
//     ['T.Brolin'],
//     ['79'],
//     { ...stadiumsStore.Italy?.alpi.locationAndNames } as StadiumInfo,
//     '62 628'
//   ),

//   new Match(
//     '11.06.1990',
//     tournamentStages.groupC,
//     ['Costa Rica', 'Scotland'],
//     [[1, 0], [], []],
//     ['J.Cayasso'],
//     ['49'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.ferraris.locationAndNames } as StadiumInfo,
//     '30 867'
//   ),

//   new Match(
//     '16.06.1990',
//     tournamentStages.groupC,
//     ['Brazil', 'Costa Rica'],
//     [[1, 0], [], []],
//     ['Müller'],
//     ['33'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.alpi.locationAndNames } as StadiumInfo,
//     '58 007'
//   ),

//   new Match(
//     '16.06.1990',
//     tournamentStages.groupC,
//     ['Scotland', 'Sweden'],
//     [[2, 1], [], []],
//     ['S.McCall', 'M.Johnston'],
//     ['11', '80(p)'],
//     ['G.Strömberg'],
//     ['86'],
//     { ...stadiumsStore.Italy?.ferraris.locationAndNames } as StadiumInfo,
//     '31 823'
//   ),

//   new Match(
//     '20.06.1990',
//     tournamentStages.groupC,
//     ['Brazil', 'Scotland'],
//     [[1, 0], [], []],
//     ['Müller'],
//     ['82'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.alpi.locationAndNames } as StadiumInfo,
//     '62 502'
//   ),

//   new Match(
//     '20.06.1990',
//     tournamentStages.groupC,
//     ['Costa Rica', 'Sweden'],
//     [[2, 1], [], []],
//     ['R.Flores', 'H.Medford'],
//     ['75', '87'],
//     ['J.Ekstrom'],
//     ['32'],
//     { ...stadiumsStore.Italy?.ferraris.locationAndNames } as StadiumInfo,
//     '20 223'
//   ),

//   new Match(
//     '09.06.1990',
//     tournamentStages.groupD,
//     ['Colombia', 'U. A. Emirates'],
//     [[2, 0], [], []],
//     ['B.Redín', 'C.Valderrama'],
//     ['50', '85'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.dallAra.locationAndNames } as StadiumInfo,
//     '30 791'
//   ),

//   new Match(
//     '10.06.1990',
//     tournamentStages.groupD,
//     ['Germany', 'Yugoslavia'],
//     [[4, 1], [], []],
//     ['L.Matthäus', 'J.Klinsmann', 'R.Völler'],
//     ['28, 64', '39', '70'],
//     ['D.Jozić'],
//     ['55'],
//     { ...stadiumsStore.Italy?.sanSiro.locationAndNames } as StadiumInfo,
//     '74 765'
//   ),

//   new Match(
//     '14.06.1990',
//     tournamentStages.groupD,
//     ['Yugoslavia', 'Colombia'],
//     [[1, 0], [], []],
//     ['D.Jozić'],
//     ['73'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.dallAra.locationAndNames } as StadiumInfo,
//     '32 257'
//   ),

//   new Match(
//     '15.06.1990',
//     tournamentStages.groupD,
//     ['Germany', 'U. A. Emirates'],
//     [[5, 1], [], []],
//     ['R.Völler', 'J.Klinsmann', 'L.Matthäus', 'U.Bein'],
//     ['35, 75', '36', '47', '59'],
//     ['K.Ismaïl'],
//     ['46'],
//     { ...stadiumsStore.Italy?.sanSiro.locationAndNames } as StadiumInfo,
//     '71 167'
//   ),

//   new Match(
//     '19.06.1990',
//     tournamentStages.groupD,
//     ['Germany', 'Colombia'],
//     [[1, 1], [], []],
//     ['P.Littbarski'],
//     ['88'],
//     ['F.Rincón'],
//     ['90+3'],
//     { ...stadiumsStore.Italy?.sanSiro.locationAndNames } as StadiumInfo,
//     '72 510'
//   ),

//   new Match(
//     '19.06.1990',
//     tournamentStages.groupD,
//     ['Yugoslavia', 'U. A. Emirates'],
//     [[4, 1], [], []],
//     ['S.Sušić', 'D.Pancev', 'R.Prosinečki'],
//     ['5', '9, 46', '90'],
//     ["A.T.Juma'a"],
//     ['22'],
//     { ...stadiumsStore.Italy?.dallAra.locationAndNames } as StadiumInfo,
//     '27 833'
//   ),

//   new Match(
//     '12.06.1990',
//     tournamentStages.groupE,
//     ['Belgium', 'Korea Republic'],
//     [[2, 0], [], []],
//     ['M.Degryse', 'M.De Wolf'],
//     ['53', '64'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.bentegodi.locationAndNames } as StadiumInfo,
//     '32 486'
//   ),

//   new Match(
//     '13.06.1990',
//     tournamentStages.groupE,
//     ['Uruguay', 'Spain'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.friuli.locationAndNames } as StadiumInfo,
//     '35 713'
//   ),

//   new Match(
//     '17.06.1990',
//     tournamentStages.groupE,
//     ['Belgium', 'Uruguay'],
//     [[3, 1], [], []],
//     ['L.Clijsters', 'E.Scifo', 'J.Ceulemans'],
//     ['15', '22', '47'],
//     ['P.J.Bengoechea'],
//     ['73'],
//     { ...stadiumsStore.Italy?.bentegodi.locationAndNames } as StadiumInfo,
//     '33 759'
//   ),

//   new Match(
//     '17.06.1990',
//     tournamentStages.groupE,
//     ['Spain', 'Korea Republic'],
//     [[3, 1], [], []],
//     ['Michel'],
//     ['23, 61, 81'],
//     ['Hwang-Bo Kwan'],
//     ['43'],
//     { ...stadiumsStore.Italy?.friuli.locationAndNames } as StadiumInfo,
//     '32 733'
//   ),

//   new Match(
//     '21.06.1990',
//     tournamentStages.groupE,
//     ['Spain', 'Belgium'],
//     [[2, 1], [], []],
//     ['Michel', 'Górriz'],
//     ['27(p)', '38'],
//     ['P.Vervoort'],
//     ['29'],
//     { ...stadiumsStore.Italy?.bentegodi.locationAndNames } as StadiumInfo,
//     '35 950'
//   ),

//   new Match(
//     '21.06.1990',
//     tournamentStages.groupE,
//     ['Uruguay', 'Korea Republic'],
//     [[1, 0], [], []],
//     ['D.Fonseca'],
//     ['90'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.friuli.locationAndNames } as StadiumInfo,
//     '29 039'
//   ),

//   new Match(
//     '11.06.1990',
//     tournamentStages.groupF,
//     ['England', 'Ireland'],
//     [[1, 1], [], []],
//     ['G.Lineker'],
//     ['9'],
//     ['K.Sheedy'],
//     ['73'],
//     { ...stadiumsStore.Italy?.santElia.locationAndNames } as StadiumInfo,
//     '35 238'
//   ),

//   new Match(
//     '12.06.1990',
//     tournamentStages.groupF,
//     ['Netherlands', 'Egypt'],
//     [[1, 1], [], []],
//     ['W.Kieft'],
//     ['58'],
//     ['M.Abdelghany'],
//     ['83(p)'],
//     { ...stadiumsStore.Italy?.favorita.locationAndNames } as StadiumInfo,
//     '33 421'
//   ),

//   new Match(
//     '16.06.1990',
//     tournamentStages.groupF,
//     ['England', 'Netherlands'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.santElia.locationAndNames } as StadiumInfo,
//     '35 267'
//   ),

//   new Match(
//     '17.06.1990',
//     tournamentStages.groupF,
//     ['Ireland', 'Egypt'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.favorita.locationAndNames } as StadiumInfo,
//     '33 288'
//   ),

//   new Match(
//     '21.06.1990',
//     tournamentStages.groupF,
//     ['England', 'Egypt'],
//     [[1, 0], [], []],
//     ['M.Wright'],
//     ['58'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.santElia.locationAndNames } as StadiumInfo,
//     '34 959'
//   ),

//   new Match(
//     '21.06.1990',
//     tournamentStages.groupF,
//     ['Ireland', 'Netherlands'],
//     [[1, 1], [], []],
//     ['N.Quinn'],
//     ['71'],
//     ['R.Gullit'],
//     ['11'],
//     { ...stadiumsStore.Italy?.favorita.locationAndNames } as StadiumInfo,
//     '33 288'
//   ),

//   new Match(
//     '23.06.1990',
//     tournamentStages.roundOf16,
//     ['Cameroon', 'Colombia'],
//     [[0, 0], [2, 1], []],
//     ['R.Milla'],
//     ['106, 108'],
//     ['B.Redín'],
//     ['115'],
//     { ...stadiumsStore.Italy?.maradona.locationAndNames } as StadiumInfo,
//     '50 026'
//   ),

//   new Match(
//     '23.06.1990',
//     tournamentStages.roundOf16,
//     ['Czechoslovakia', 'Costa Rica'],
//     [[4, 1], [], []],
//     ['T.Skuhravy', 'L.Kubik'],
//     ['12, 63, 82', '76'],
//     ['R.González'],
//     ['55'],
//     { ...stadiumsStore.Italy?.nicola.locationAndNames } as StadiumInfo,
//     '47 673'
//   ),

//   new Match(
//     '24.06.1990',
//     tournamentStages.roundOf16,
//     ['Argentina', 'Brazil'],
//     [[1, 0], [], []],
//     ['C.Caniggia'],
//     ['81'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.alpi.locationAndNames } as StadiumInfo,
//     '61 381'
//   ),

//   new Match(
//     '24.06.1990',
//     tournamentStages.roundOf16,
//     ['Germany', 'Netherlands'],
//     [[2, 1], [], []],
//     ['J.Klinsmann', 'A.Brehme'],
//     ['51', '85'],
//     ['R.Koeman'],
//     ['89(p)'],
//     { ...stadiumsStore.Italy?.sanSiro.locationAndNames } as StadiumInfo,
//     '74 559'
//   ),

//   new Match(
//     '25.06.1990',
//     tournamentStages.roundOf16,
//     ['Ireland', 'Romania'],
//     [
//       [0, 0],
//       [0, 0],
//       [5, 4],
//     ],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.ferraris.locationAndNames } as StadiumInfo,
//     '31 818'
//   ),

//   new Match(
//     '25.06.1990',
//     tournamentStages.roundOf16,
//     ['Italy', 'Uruguay'],
//     [[2, 0], [], []],
//     ['S.Schillaci', 'A.Serena'],
//     ['65', '85'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.olimpico.locationAndNames } as StadiumInfo,
//     '73 303'
//   ),

//   new Match(
//     '26.06.1990',
//     tournamentStages.roundOf16,
//     ['Yugoslavia', 'Spain'],
//     [[1, 1], [1, 0], []],
//     ['D.Stojković'],
//     ['78', '92'],
//     ['J.Salinas'],
//     ['83'],
//     { ...stadiumsStore.Italy?.bentegodi.locationAndNames } as StadiumInfo,
//     '35 500'
//   ),

//   new Match(
//     '26.06.1990',
//     tournamentStages.roundOf16,
//     ['England', 'Belgium'],
//     [[0, 0], [1, 0], []],
//     ['D.Platt'],
//     ['119'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.dallAra.locationAndNames } as StadiumInfo,
//     '34 520'
//   ),

//   new Match(
//     '30.06.1990',
//     tournamentStages.quarterFinal,
//     ['Argentina', 'Yugoslavia'],
//     [
//       [0, 0],
//       [0, 0],
//       [3, 2],
//     ],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.franchi.locationAndNames } as StadiumInfo,
//     '38 971'
//   ),

//   new Match(
//     '30.06.1990',
//     tournamentStages.quarterFinal,
//     ['Italy', 'Ireland'],
//     [[1, 0], [], []],
//     ['S.Schillaci'],
//     ['38'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.olimpico.locationAndNames } as StadiumInfo,
//     '73 303'
//   ),

//   new Match(
//     '01.07.1990',
//     tournamentStages.quarterFinal,
//     ['Germany', 'Czechoslovakia'],
//     [[1, 0], [], []],
//     ['L.Matthäus'],
//     ['25(p)'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.sanSiro.locationAndNames } as StadiumInfo,
//     '73 347'
//   ),

//   new Match(
//     '01.07.1990',
//     tournamentStages.quarterFinal,
//     ['England', 'Cameroon'],
//     [[2, 2], [1, 0], []],
//     ['D.Platt', 'G.Lineker'],
//     ['25', '83(p), 105(p)'],
//     ['E.Kundé', 'E.Ekéké'],
//     ['61(p)', '65'],
//     { ...stadiumsStore.Italy?.maradona.locationAndNames } as StadiumInfo,
//     '55 205'
//   ),

//   new Match(
//     '03.07.1990',
//     tournamentStages.semiFinal,
//     ['Argentina', 'Italy'],
//     [
//       [1, 1],
//       [0, 0],
//       [4, 3],
//     ],
//     ['C.Caniggia'],
//     ['67'],
//     ['S.Schillaci'],
//     ['17'],
//     { ...stadiumsStore.Italy?.maradona.locationAndNames } as StadiumInfo,
//     '59 978'
//   ),

//   new Match(
//     '04.07.1990',
//     tournamentStages.semiFinal,
//     ['Germany', 'England'],
//     [
//       [1, 1],
//       [0, 0],
//       [4, 3],
//     ],
//     ['A.Brehme'],
//     ['60'],
//     ['G.Lineker'],
//     ['80'],
//     { ...stadiumsStore.Italy?.alpi.locationAndNames } as StadiumInfo,
//     '62 628'
//   ),

//   new Match(
//     '07.07.1990',
//     tournamentStages.thirdPlace,
//     ['Italy', 'England'],
//     [[2, 1], [], []],
//     ['R.Baggio', 'S.Schillaci'],
//     ['71', '86(p)'],
//     ['D.Platt'],
//     ['81'],
//     { ...stadiumsStore.Italy?.nicola.locationAndNames } as StadiumInfo,
//     '51 426'
//   ),

//   new Match(
//     '08.07.1990',
//     tournamentStages.final,
//     ['Germany', 'Argentina'],
//     [[1, 0], [], []],
//     ['A.Brehme'],
//     ['85(p)'],
//     [],
//     [],
//     { ...stadiumsStore.Italy?.olimpico.locationAndNames } as StadiumInfo,
//     '73 603'
//   ),
// ]
