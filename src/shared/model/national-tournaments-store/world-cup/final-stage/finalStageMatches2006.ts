// import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
// import { Match } from '@/shared/model/tournament-config/class-match/Match'
// import {
//   MatchInfo,
//   StadiumInfo,
// } from '@/shared/model/tournament-config/class-match/types'
// import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/CHAMPIONSHIP_STAGES'

// export const finalStageMatches2006: MatchInfo[] = [
//   new Match(
//     '09.06.2006',
//     tournamentStages.groupA,
//     ['Germany', 'Costa Rica'],
//     [[4, 2], [], []],
//     ['Ph.Lahm', 'M.Klose', 'T.Frings'],
//     ['6', '17, 61', '87'],
//     ['Paulo Wanchope'],
//     ['12, 73'],
//     { ...stadiumsStore.Germany?.allianz.locationAndNames } as StadiumInfo,
//     '66 000'
//   ),

//   new Match(
//     '09.06.2006',
//     tournamentStages.groupA,
//     ['Ecuador', 'Poland'],
//     [[2, 0], [], []],
//     ['C.Tenorio', 'A.Delgado'],
//     ['24', '80'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.aufSchalke.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '14.06.2006',
//     tournamentStages.groupA,
//     ['Germany', 'Poland'],
//     [[1, 0], [], []],
//     ['O.Neuville'],
//     ['90+1'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.westfalen.locationAndNames } as StadiumInfo,
//     '65 000'
//   ),

//   new Match(
//     '15.06.2006',
//     tournamentStages.groupA,
//     ['Ecuador', 'Costa Rica'],
//     [[3, 0], [], []],
//     ['C.Tenorio', 'A.Delgado', 'I.Kaviedes'],
//     ['8', '54', '90+2'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.volkspark.locationAndNames } as StadiumInfo,
//     '50 000'
//   ),

//   new Match(
//     '20.06.2006',
//     tournamentStages.groupA,
//     ['Germany', 'Ecuador'],
//     [[3, 0], [], []],
//     ['M.Klose', 'L.Podolski'],
//     ['4, 44', '57'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.olympiaB.locationAndNames } as StadiumInfo,
//     '72 000'
//   ),

//   new Match(
//     '20.06.2006',
//     tournamentStages.groupA,
//     ['Poland', 'Costa Rica'],
//     [[2, 1], [], []],
//     ['B.Bosacki'],
//     ['33, 65'],
//     ['R.Gomez'],
//     ['25'],
//     { ...stadiumsStore.Germany?.niedersachsen.locationAndNames } as StadiumInfo,
//     '43 000'
//   ),

//   new Match(
//     '10.06.2006',
//     tournamentStages.groupB,
//     ['England', 'Paraguay'],
//     [[1, 0], [], []],
//     ['C.Gamarra'],
//     ['4(o.g.)'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.wald.locationAndNames } as StadiumInfo,
//     '48 000'
//   ),

//   new Match(
//     '10.06.2006',
//     tournamentStages.groupB,
//     ['Trinidad & Tobago', 'Sweden'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.westfalen.locationAndNames } as StadiumInfo,
//     '62 959'
//   ),

//   new Match(
//     '15.06.2006',
//     tournamentStages.groupB,
//     ['England', 'Trinidad & Tobago'],
//     [[2, 0], [], []],
//     ['P.Crouch', 'S.Gerrard'],
//     ['83', '90+1'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.easyCredit.locationAndNames } as StadiumInfo,
//     '41 000'
//   ),

//   new Match(
//     '15.06.2006',
//     tournamentStages.groupB,
//     ['Sweden', 'Paraguay'],
//     [[1, 0], [], []],
//     ['K.Ljungberg'],
//     ['89'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.olympiaB.locationAndNames } as StadiumInfo,
//     '72 000'
//   ),

//   new Match(
//     '20.06.2006',
//     tournamentStages.groupB,
//     ['Sweden', 'England'],
//     [[2, 2], [], []],
//     ['M.Allbäck', 'H.Larsson'],
//     ['51', '90'],
//     ['J.Cole', 'S.Gerrard'],
//     ['34', '85'],
//     { ...stadiumsStore.Germany?.rheinEnergie.locationAndNames } as StadiumInfo,
//     '45 000'
//   ),

//   new Match(
//     '20.06.2006',
//     tournamentStages.groupB,
//     ['Paraguay', 'Trinidad & Tobago'],
//     [[2, 0], [], []],
//     ['B.Sancho', 'N.Cuevas'],
//     ['25(o.g.)', '86'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.fritzWalter.locationAndNames } as StadiumInfo,
//     '46 000'
//   ),

//   new Match(
//     '10.06.2006',
//     tournamentStages.groupC,
//     ['Argentina', 'Ivory Coast'],
//     [[2, 1], [], []],
//     ['H.Crespo', 'Javier Saviola'],
//     ['24', '38'],
//     ['D.Drogba'],
//     ['82'],
//     { ...stadiumsStore.Germany?.volkspark.locationAndNames } as StadiumInfo,
//     '49 480'
//   ),

//   new Match(
//     '11.06.2006',
//     tournamentStages.groupC,
//     ['Netherlands', 'Serbia'],
//     [[1, 0], [], []],
//     ['A.Robben'],
//     ['18'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.zentral.locationAndNames } as StadiumInfo,
//     '43 000'
//   ),

//   new Match(
//     '16.06.2006',
//     tournamentStages.groupC,
//     ['Argentina', 'Serbia'],
//     [[6, 0], [], []],
//     ['M.Rodríguez', 'E.Cambiasso', 'H.Crespo', 'Carlos Tévez', 'L.Messi'],
//     ['6, 41', '31', '78', '84', '88'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.aufSchalke.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '16.06.2006',
//     tournamentStages.groupC,
//     ['Netherlands', 'Ivory Coast'],
//     [[2, 1], [], []],
//     ['R.van Persie', 'Ruud van Nistelrooy'],
//     ['24', '27'],
//     ['B.Koné'],
//     ['38'],
//     { ...stadiumsStore.Germany?.daimler.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '21.06.2006',
//     tournamentStages.groupC,
//     ['Netherlands', 'Argentina'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.wald.locationAndNames } as StadiumInfo,
//     '48 000'
//   ),

//   new Match(
//     '21.06.2006',
//     tournamentStages.groupC,
//     ['Ivory Coast', 'Serbia'],
//     [[3, 2], [], []],
//     ['A.Dindane', 'B.Kalou'],
//     ['37(p), 67', '86(p)'],
//     ['N.Žigić', 'S.Ilić'],
//     ['10', '20'],
//     { ...stadiumsStore.Germany?.allianz.locationAndNames } as StadiumInfo,
//     '66 000'
//   ),

//   new Match(
//     '11.06.2006',
//     tournamentStages.groupD,
//     ['Mexico', 'Iran'],
//     [[3, 1], [], []],
//     ['Omar Bravo', 'Sinha'],
//     ['28, 76', '79'],
//     ['Y.Golmohammadi'],
//     ['36'],
//     { ...stadiumsStore.Germany?.easyCredit.locationAndNames } as StadiumInfo,
//     '41 000'
//   ),

//   new Match(
//     '11.06.2006',
//     tournamentStages.groupD,
//     ['Portugal', 'Angola'],
//     [[1, 0], [], []],
//     ['Pedro Pauleta'],
//     ['4'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.rheinEnergie.locationAndNames } as StadiumInfo,
//     '45 000'
//   ),

//   new Match(
//     '16.06.2006',
//     tournamentStages.groupD,
//     ['Mexico', 'Angola'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.niedersachsen.locationAndNames } as StadiumInfo,
//     '43 000'
//   ),

//   new Match(
//     '17.06.2006',
//     tournamentStages.groupD,
//     ['Portugal', 'Iran'],
//     [[2, 0], [], []],
//     ['Deco', 'C.Ronaldo'],
//     ['63', '80(pen)'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.wald.locationAndNames } as StadiumInfo,
//     '48 000'
//   ),

//   new Match(
//     '21.06.2006',
//     tournamentStages.groupD,
//     ['Portugal', 'Mexico'],
//     [[2, 1], [], []],
//     ['Maniche', 'Simão'],
//     ['6', '24(pen)'],
//     ['J.Fonseca'],
//     ['29'],
//     { ...stadiumsStore.Germany?.aufSchalke.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '21.06.2006',
//     tournamentStages.groupD,
//     ['Iran', 'Angola'],
//     [[1, 1], [], []],
//     ['S.Bakhtiarizadeh'],
//     ['75'],
//     ['Flávio Amado'],
//     ['60'],
//     { ...stadiumsStore.Germany?.zentral.locationAndNames } as StadiumInfo,
//     '38 000'
//   ),

//   new Match(
//     '12.06.2006',
//     tournamentStages.groupE,
//     ['Czech Republic', 'United States'],
//     [[3, 0], [], []],
//     ['J.Koller', 'T.Rosický'],
//     ['5', '36, 76'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.aufSchalke.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '12.06.2006',
//     tournamentStages.groupE,
//     ['Italy', 'Ghana'],
//     [[2, 0], [], []],
//     ['A.Pirlo', 'V.Iaquinta'],
//     ['40', '83'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.niedersachsen.locationAndNames } as StadiumInfo,
//     '43 000'
//   ),

//   new Match(
//     '17.06.2006',
//     tournamentStages.groupE,
//     ['Ghana', 'Czech Republic'],
//     [[2, 0], [], []],
//     ['A.Gyan', 'S.Muntari'],
//     ['2', '82'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.rheinEnergie.locationAndNames } as StadiumInfo,
//     '45 000'
//   ),

//   new Match(
//     '17.06.2006',
//     tournamentStages.groupE,
//     ['Italy', 'United States'],
//     [[1, 1], [], []],
//     ['A.Gilardino'],
//     ['22'],
//     ['C.Zaccardo'],
//     ['27(o.g.)'],
//     { ...stadiumsStore.Germany?.fritzWalter.locationAndNames } as StadiumInfo,
//     '46 000'
//   ),

//   new Match(
//     '22.06.2006',
//     tournamentStages.groupE,
//     ['Italy', 'Czech Republic'],
//     [[2, 0], [], []],
//     ['M.Materazzi', 'F.Inzaghi'],
//     ['26', '87'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.volkspark.locationAndNames } as StadiumInfo,
//     '50 000'
//   ),

//   new Match(
//     '22.06.2006',
//     tournamentStages.groupE,
//     ['Ghana', 'United States'],
//     [[2, 1], [], []],
//     ['H.Draman', 'S.Appiah'],
//     ['22', '45+2(p)'],
//     ['C.Dempsey'],
//     ['43'],
//     { ...stadiumsStore.Germany?.easyCredit.locationAndNames } as StadiumInfo,
//     '41 000'
//   ),

//   new Match(
//     '12.06.2006',
//     tournamentStages.groupF,
//     ['Australia', 'Japan'],
//     [[3, 1], [], []],
//     ['T.Cahill', 'J.Aloisi'],
//     ['84, 89', '90+2'],
//     ['S.Nakamura'],
//     ['26'],
//     { ...stadiumsStore.Germany?.fritzWalter.locationAndNames } as StadiumInfo,
//     '46 000'
//   ),

//   new Match(
//     '13.06.2006',
//     tournamentStages.groupF,
//     ['Brazil', 'Croatia'],
//     [[1, 0], [], []],
//     ['Kaká'],
//     ['44'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.olympiaM.locationAndNames } as StadiumInfo,
//     '72 000'
//   ),

//   new Match(
//     '18.06.2006',
//     tournamentStages.groupF,
//     ['Japan', 'Croatia'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.easyCredit.locationAndNames } as StadiumInfo,
//     '41 000'
//   ),

//   new Match(
//     '18.06.2006',
//     tournamentStages.groupF,
//     ['Brazil', 'Australia'],
//     [[2, 0], [], []],
//     ['Adriano', 'Fred'],
//     ['49', '90'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.allianz.locationAndNames } as StadiumInfo,
//     '66 000'
//   ),

//   new Match(
//     '22.06.2006',
//     tournamentStages.groupF,
//     ['Brazil', 'Japan'],
//     [[4, 1], [], []],
//     ['Ronaldo', 'Juninho', 'Gilberto'],
//     ['45+1, 81', '53', '59'],
//     ['K.Tamada'],
//     ['34'],
//     { ...stadiumsStore.Germany?.westfalen.locationAndNames } as StadiumInfo,
//     '65 000'
//   ),

//   new Match(
//     '22.06.2006',
//     tournamentStages.groupF,
//     ['Croatia', 'Australia'],
//     [[2, 2], [], []],
//     ['D.Srna', 'N.Kovač'],
//     ['2', '56'],
//     ['C.Moore', 'H.Kewell'],
//     ['38(p)', '79'],
//     { ...stadiumsStore.Germany?.daimler.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '13.06.2006',
//     tournamentStages.groupG,
//     ['Korea Republic', 'Togo'],
//     [[2, 1], [], []],
//     ['Lee Chun-soo', 'Ahn Jung-hwan'],
//     ['54', '72'],
//     ['M.Kader Touré'],
//     ['31'],
//     { ...stadiumsStore.Germany?.wald.locationAndNames } as StadiumInfo,
//     '48 000'
//   ),

//   new Match(
//     '13.06.2006',
//     tournamentStages.groupG,
//     ['France', 'Switzerland'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.daimler.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '18.06.2006',
//     tournamentStages.groupG,
//     ['France', 'Korea Republic'],
//     [[1, 1], [], []],
//     ['T.Henry'],
//     ['9'],
//     ['Park Ji-sung'],
//     ['81'],
//     { ...stadiumsStore.Germany?.zentral.locationAndNames } as StadiumInfo,
//     '43 000'
//   ),

//   new Match(
//     '19.06.2006',
//     tournamentStages.groupG,
//     ['Switzerland', 'Togo'],
//     [[2, 0], [], []],
//     ['A.Frei', 'T.Barnetta'],
//     ['16', '88'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.westfalen.locationAndNames } as StadiumInfo,
//     '65 000'
//   ),

//   new Match(
//     '23.06.2006',
//     tournamentStages.groupG,
//     ['France', 'Togo'],
//     [[2, 0], [], []],
//     ['P.Vieira', 'T.Henry'],
//     ['55', '61'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.rheinEnergie.locationAndNames } as StadiumInfo,
//     '45 000'
//   ),

//   new Match(
//     '23.06.2006',
//     tournamentStages.groupG,
//     ['Switzerland', 'Korea Republic'],
//     [[2, 0], [], []],
//     ['P.Senderos', 'A.Frei'],
//     ['23', '77'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.niedersachsen.locationAndNames } as StadiumInfo,
//     '43 000'
//   ),

//   new Match(
//     '14.06.2006',
//     tournamentStages.groupH,
//     ['Spain', 'Ukraine'],
//     [[4, 0], [], []],
//     ['Xabi Alonso', 'D.Villa', 'F.Torres'],
//     ['13', '17, 48(p)', '81'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.zentral.locationAndNames } as StadiumInfo,
//     '43 000'
//   ),

//   new Match(
//     '14.06.2006',
//     tournamentStages.groupH,
//     ['Tunisia', 'Saudi Arabia'],
//     [[2, 2], [], []],
//     ['Z.Jaziri', 'R.Jaïdi'],
//     ['23', '90+2'],
//     ['Yasser Al Qahtani', 'Sami Al Jaber'],
//     ['57', '84'],
//     { ...stadiumsStore.Germany?.allianz.locationAndNames } as StadiumInfo,
//     '66 000'
//   ),

//   new Match(
//     '19.06.2006',
//     tournamentStages.groupH,
//     ['Ukraine', 'Saudi Arabia'],
//     [[4, 0], [], []],
//     ['A.Rusol', 'S.Rebrov', 'A.Shevchenko', 'M.Kalynychenko'],
//     ['4', '36', '46', '84'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.volkspark.locationAndNames } as StadiumInfo,
//     '50 000'
//   ),

//   new Match(
//     '19.06.2006',
//     tournamentStages.groupH,
//     ['Spain', 'Tunisia'],
//     [[3, 1], [], []],
//     ['Raúl', 'F.Torres'],
//     ['71', '76, 90+1(p)'],
//     ['J.Mnari'],
//     ['8'],
//     { ...stadiumsStore.Germany?.daimler.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '23.06.2006',
//     tournamentStages.groupH,
//     ['Spain', 'Saudi Arabia'],
//     [[1, 0], [], []],
//     ['Juanito'],
//     ['36'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.fritzWalter.locationAndNames } as StadiumInfo,
//     '46 000'
//   ),

//   new Match(
//     '23.06.2006',
//     tournamentStages.groupH,
//     ['Ukraine', 'Tunisia'],
//     [[1, 0], [], []],
//     ['A.Shevchenko'],
//     ['70(p)'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.olympiaB.locationAndNames } as StadiumInfo,
//     '72 000'
//   ),

//   new Match(
//     '24.06.2006',
//     tournamentStages.roundOf16,
//     ['Germany', 'Sweden'],
//     [[2, 0], [], []],
//     ['L.Podolski'],
//     ['4, 12'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.allianz.locationAndNames } as StadiumInfo,
//     '66 000'
//   ),

//   new Match(
//     '24.06.2006',
//     tournamentStages.roundOf16,
//     ['Argentina', 'Mexico'],
//     [[1, 1], [1, 0], []],
//     ['H.Crespo', 'M.Rodríguez'],
//     ['10', '98'],
//     ['R.Márquez'],
//     ['6'],
//     { ...stadiumsStore.Germany?.zentral.locationAndNames } as StadiumInfo,
//     '43 000'
//   ),

//   new Match(
//     '25.06.2006',
//     tournamentStages.roundOf16,
//     ['England', 'Ecuador'],
//     [[1, 0], [], []],
//     ['D.Beckham'],
//     ['60'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.daimler.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '25.06.2006',
//     tournamentStages.roundOf16,
//     ['Portugal', 'Netherlands'],
//     [[1, 0], [], []],
//     ['Maniche'],
//     ['23'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.easyCredit.locationAndNames } as StadiumInfo,
//     '41 000'
//   ),

//   new Match(
//     '26.06.2006',
//     tournamentStages.roundOf16,
//     ['Italy', 'Australia'],
//     [[1, 0], [], []],
//     ['F.Totti'],
//     ['90+5(p)'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.fritzWalter.locationAndNames } as StadiumInfo,
//     '46 000'
//   ),

//   new Match(
//     '26.06.2006',
//     tournamentStages.roundOf16,
//     ['Ukraine', 'Switzerland'],
//     [
//       [0, 0],
//       [0, 0],
//       [3, 0],
//     ],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.rheinEnergie.locationAndNames } as StadiumInfo,
//     '45 000'
//   ),

//   new Match(
//     '27.06.2006',
//     tournamentStages.roundOf16,
//     ['Brazil', 'Ghana'],
//     [[3, 0], [], []],
//     ['Ronaldo', 'Adriano', 'Zé Roberto'],
//     ['5', '45+1', '84'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.westfalen.locationAndNames } as StadiumInfo,
//     '65 000'
//   ),

//   new Match(
//     '27.06.2006',
//     tournamentStages.roundOf16,
//     ['France', 'Spain'],
//     [[3, 1], [], []],
//     ['F.Ribéry', 'P.Vieira', 'Z.Zidane'],
//     ['41', '83', '90+2'],
//     ['D.Villa'],
//     ['28(p)'],
//     { ...stadiumsStore.Germany?.niedersachsen.locationAndNames } as StadiumInfo,
//     '43 000'
//   ),

//   new Match(
//     '30.06.2006',
//     tournamentStages.quarterFinal,
//     ['Germany', 'Argentina'],
//     [
//       [1, 1],
//       [0, 0],
//       [4, 2],
//     ],
//     ['M.Klose'],
//     ['80'],
//     ['R.F.Ayala'],
//     ['49'],
//     { ...stadiumsStore.Germany?.olympiaB.locationAndNames } as StadiumInfo,
//     '72 000'
//   ),

//   new Match(
//     '30.06.2006',
//     tournamentStages.quarterFinal,
//     ['Italy', 'Ukraine'],
//     [[3, 0], [], []],
//     ['G.Zambrotta', 'L.Toni'],
//     ['6', '59, 69'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.volkspark.locationAndNames } as StadiumInfo,
//     '50 000'
//   ),

//   new Match(
//     '01.07.2006',
//     tournamentStages.quarterFinal,
//     ['Portugal', 'England'],
//     [
//       [0, 0],
//       [0, 0],
//       [3, 1],
//     ],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.aufSchalke.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '01.07.2006',
//     tournamentStages.quarterFinal,
//     ['France', 'Brazil'],
//     [[1, 0], [], []],
//     ['T.Henry'],
//     ['57'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.wald.locationAndNames } as StadiumInfo,
//     '48 000'
//   ),

//   new Match(
//     '04.07.2006',
//     tournamentStages.semiFinal,
//     ['Italy', 'Germany'],
//     [[0, 0], [2, 0], []],
//     ['F.Grosso', 'A.Del Piero'],
//     ['119', '120+1'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.westfalen.locationAndNames } as StadiumInfo,
//     '65 000'
//   ),

//   new Match(
//     '05.07.2006',
//     tournamentStages.semiFinal,
//     ['France', 'Portugal'],
//     [[1, 0], [], []],
//     ['Z.Zidane'],
//     ['33(p)'],
//     [],
//     [],
//     { ...stadiumsStore.Germany?.allianz.locationAndNames } as StadiumInfo,
//     '66 000'
//   ),

//   new Match(
//     '08.07.2006',
//     tournamentStages.thirdPlace,
//     ['Germany', 'Portugal'],
//     [[3, 1], [], []],
//     ['B.Schweinsteiger', 'Petit'],
//     ['56, 78', '60(o.g.)'],
//     ['Nuno Gomes'],
//     ['88'],
//     { ...stadiumsStore.Germany?.daimler.locationAndNames } as StadiumInfo,
//     '52 000'
//   ),

//   new Match(
//     '09.07.2006',
//     tournamentStages.final,
//     ['Italy', 'France'],
//     [
//       [1, 1],
//       [0, 0],
//       [5, 3],
//     ],
//     ['M.Materazzi'],
//     ['19'],
//     ['Z.Zidane'],
//     ['7(p)'],
//     { ...stadiumsStore.Germany?.olympiaB.locationAndNames } as StadiumInfo,
//     '69 000'
//   ),
// ]
