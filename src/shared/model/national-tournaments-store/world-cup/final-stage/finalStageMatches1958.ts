// import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
// import { Match } from '@/shared/model/tournament-config/class-match/Match'
// import {
//   MatchInfo,
//   StadiumInfo,
// } from '@/shared/model/tournament-config/class-match/types'
// import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/CHAMPIONSHIP_STAGES'

// export const finalStageMatches1958: MatchInfo[] = [
//   new Match(
//     '08.06.1958',
//     tournamentStages.group1,
//     ['Germany', 'Argentina'],
//     [[3, 1], [], []],
//     ['Rahn', 'Seeler'],
//     ['32, 79', '42'],
//     ['Corbatta'],
//     ['3'],
//     { ...stadiumsStore.Sweden?.malmo.locationAndNames } as StadiumInfo,
//     '31 156'
//   ),

//   new Match(
//     '08.06.1958',
//     tournamentStages.group1,
//     ['North. Ireland', 'Czechoslovakia'],
//     [[1, 0], [], []],
//     ['Cush'],
//     ['21'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.orjansVall.locationAndNames } as StadiumInfo,
//     '10 647'
//   ),

//   new Match(
//     '11.06.1958',
//     tournamentStages.group1,
//     ['Germany', 'Czechoslovakia'],
//     [[2, 2], [], []],
//     ['Schäfer', 'Rahn'],
//     ['60', '71'],
//     ['Dvořák', 'Zikán'],
//     ['24(p)', '42'],
//     { ...stadiumsStore.Sweden?.olympiastadion.locationAndNames } as StadiumInfo,
//     '25 000'
//   ),

//   new Match(
//     '11.06.1958',
//     tournamentStages.group1,
//     ['Argentina', 'North. Ireland'],
//     [[3, 1], [], []],
//     ['Corbatta', 'Menéndez', 'Avio'],
//     ['37(p)', '56', '60'],
//     ['McParland'],
//     ['4'],
//     { ...stadiumsStore.Sweden?.orjansVall.locationAndNames } as StadiumInfo,
//     '14 174'
//   ),

//   new Match(
//     '15.06.1958',
//     tournamentStages.group1,
//     ['Germany', 'North. Ireland'],
//     [[2, 2], [], []],
//     ['Rahn', 'Seeler'],
//     ['20', '78'],
//     ['McParland'],
//     ['18, 60'],
//     { ...stadiumsStore.Sweden?.malmo.locationAndNames } as StadiumInfo,
//     '21 990'
//   ),

//   new Match(
//     '15.06.1958',
//     tournamentStages.group1,
//     ['Czechoslovakia', 'Argentina'],
//     [[6, 1], [], []],
//     ['Dvořák', 'Zikán', 'Feureisl', 'Hovorka'],
//     ['8', '17, 40', '69', '82, 89'],
//     ['Corbatta'],
//     ['65(p)'],
//     { ...stadiumsStore.Sweden?.olympiastadion.locationAndNames } as StadiumInfo,
//     '16 418'
//   ),

//   new Match(
//     '17.06.1958',
//     tournamentStages.group1,
//     ['North. Ireland', 'Czechoslovakia'],
//     [[1, 1], [1, 0], []],
//     ['McParland'],
//     ['44', '97'],
//     ['Zikán'],
//     ['18'],
//     { ...stadiumsStore.Sweden?.malmo.locationAndNames } as StadiumInfo,
//     '6 196'
//   ),

//   new Match(
//     '08.06.1958',
//     tournamentStages.group2,
//     ['France', 'Paraguay'],
//     [[7, 3], [], []],
//     ['Fontaine', 'Piantoni', 'Wisnieski', 'Kopa', 'Vincent'],
//     ['24, 30, 67', '52', '61', '70', '83'],
//     ['Amarilla', 'Romero'],
//     ['20, 44(p)', '50'],
//     { ...stadiumsStore.Sweden?.idrottsparken.locationAndNames } as StadiumInfo,
//     '16 518'
//   ),

//   new Match(
//     '08.06.1958',
//     tournamentStages.group2,
//     ['Yugoslavia', 'Scotland'],
//     [[1, 1], [], []],
//     ['Petaković'],
//     ['6'],
//     ['Murray'],
//     ['49'],
//     { ...stadiumsStore.Sweden?.arosvallen.locationAndNames } as StadiumInfo,
//     '9 591'
//   ),

//   new Match(
//     '11.06.1958',
//     tournamentStages.group2,
//     ['Yugoslavia', 'France'],
//     [[3, 2], [], []],
//     ['Petaković', 'Veselinović'],
//     ['16', '63, 88'],
//     ['Fontaine'],
//     ['4, 85'],
//     { ...stadiumsStore.Sweden?.arosvallen.locationAndNames } as StadiumInfo,
//     '12 217'
//   ),

//   new Match(
//     '11.06.1958',
//     tournamentStages.group2,
//     ['Paraguay', 'Scotland'],
//     [[3, 2], [], []],
//     ['Agüero', 'Ré', 'Parodi'],
//     ['4', '45', '73'],
//     ['Mudie', 'Collins'],
//     ['24', '74'],
//     { ...stadiumsStore.Sweden?.idrottsparken.locationAndNames } as StadiumInfo,
//     '11 665'
//   ),

//   new Match(
//     '15.06.1958',
//     tournamentStages.group2,
//     ['France', 'Scotland'],
//     [[2, 1], [], []],
//     ['Kopa', 'Fontaine'],
//     ['22', '44'],
//     ['Baird'],
//     ['58'],
//     { ...stadiumsStore.Sweden?.eyravallen.locationAndNames } as StadiumInfo,
//     '13 554'
//   ),

//   new Match(
//     '15.06.1958',
//     tournamentStages.group2,
//     ['Paraguay', 'Yugoslavia'],
//     [[3, 3], [], []],
//     ['Parodi', 'Agüero', 'Romero'],
//     ['20', '52', '80'],
//     ['Ognjanović', 'Veselinović', 'Rajkov'],
//     ['18', '21', '73'],
//     { ...stadiumsStore.Sweden?.tunavallen.locationAndNames } as StadiumInfo,
//     '13 103'
//   ),

//   new Match(
//     '08.06.1958',
//     tournamentStages.group3,
//     ['Sweden', 'Mexico'],
//     [[3, 0], [], []],
//     ['Simonsson', 'Liedholm'],
//     ['17, 64', '57(p)'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.rasunda.locationAndNames } as StadiumInfo,
//     '34 107'
//   ),

//   new Match(
//     '08.06.1958',
//     tournamentStages.group3,
//     ['Hungary', 'Wales'],
//     [[1, 1], [], []],
//     ['Bozsik'],
//     ['5'],
//     ['J.Charles'],
//     ['27'],
//     { ...stadiumsStore.Sweden?.eyravallen.locationAndNames } as StadiumInfo,
//     '15 343'
//   ),

//   new Match(
//     '11.06.1958',
//     tournamentStages.group3,
//     ['Mexico', 'Wales'],
//     [[1, 1], [], []],
//     ['Belmonte'],
//     ['89'],
//     ['I.Allchurch'],
//     ['32'],
//     { ...stadiumsStore.Sweden?.rasunda.locationAndNames } as StadiumInfo,
//     '15 150'
//   ),

//   new Match(
//     '12.06.1958',
//     tournamentStages.group3,
//     ['Sweden', 'Hungary'],
//     [[2, 1], [], []],
//     ['Hamrin'],
//     ['34, 55'],
//     ['Tichy'],
//     ['77'],
//     { ...stadiumsStore.Sweden?.rasunda.locationAndNames } as StadiumInfo,
//     '38 850'
//   ),

//   new Match(
//     '15.06.1958',
//     tournamentStages.group3,
//     ['Sweden', 'Wales'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.rasunda.locationAndNames } as StadiumInfo,
//     '30 287'
//   ),

//   new Match(
//     '15.06.1958',
//     tournamentStages.group3,
//     ['Hungary', 'Mexico'],
//     [[4, 0], [], []],
//     ['Tichy', 'Sándor', 'Bencsics'],
//     ['19, 46', '54', '69'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.jernvallen.locationAndNames } as StadiumInfo,
//     '13 300'
//   ),

//   new Match(
//     '17.06.1958',
//     tournamentStages.group3,
//     ['Wales', 'Hungary'],
//     [[2, 1], [], []],
//     ['I.Allchurch', 'Medwin'],
//     ['55', '76'],
//     ['Tichy'],
//     ['33'],
//     { ...stadiumsStore.Sweden?.rasunda.locationAndNames } as StadiumInfo,
//     '2 823'
//   ),

//   new Match(
//     '08.06.1958',
//     tournamentStages.group4,
//     ['Brazil', 'Austria'],
//     [[3, 0], [], []],
//     ['Altafini', 'Nílton Santos'],
//     ['37, 85', '50'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.rimnersvallen.locationAndNames } as StadiumInfo,
//     '17 778'
//   ),

//   new Match(
//     '08.06.1958',
//     tournamentStages.group4,
//     ['Soviet Union', 'England'],
//     [[2, 2], [], []],
//     ['Simonyan', 'A.Ivanov'],
//     ['13', '56'],
//     ['Kevan', 'Finney'],
//     ['66', '85(p)'],
//     { ...stadiumsStore.Sweden?.ullevi.locationAndNames } as StadiumInfo,
//     '49 348'
//   ),

//   new Match(
//     '11.06.1958',
//     tournamentStages.group4,
//     ['Brazil', 'England'],
//     [[0, 0], [], []],
//     [],
//     [],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.ullevi.locationAndNames } as StadiumInfo,
//     '40 895'
//   ),

//   new Match(
//     '11.06.1958',
//     tournamentStages.group4,
//     ['Soviet Union', 'Austria'],
//     [[2, 0], [], []],
//     ['Ilyin', 'V.Ivanov'],
//     ['15', '62'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.ryavallen.locationAndNames } as StadiumInfo,
//     '21 239'
//   ),

//   new Match(
//     '15.06.1958',
//     tournamentStages.group4,
//     ['England', 'Austria'],
//     [[2, 2], [], []],
//     ['Haynes', 'Kevan'],
//     ['56', '74'],
//     ['Koller', 'Körner'],
//     ['15', '71'],
//     { ...stadiumsStore.Sweden?.ryavallen.locationAndNames } as StadiumInfo,
//     '15 872'
//   ),

//   new Match(
//     '15.06.1958',
//     tournamentStages.group4,
//     ['Brazil', 'Soviet Union'],
//     [[2, 0], [], []],
//     ['Vavá'],
//     ['3, 77'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.ullevi.locationAndNames } as StadiumInfo,
//     '50 928'
//   ),

//   new Match(
//     '17.06.1958',
//     tournamentStages.group4,
//     ['Soviet Union', 'England'],
//     [[1, 0], [], []],
//     ['Ilyin'],
//     ['69'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.ullevi.locationAndNames } as StadiumInfo,
//     '23 182'
//   ),

//   new Match(
//     '19.06.1958',
//     tournamentStages.quarterFinal,
//     ['Brazil', 'Wales'],
//     [[1, 0], [], []],
//     ['Pelé'],
//     ['66'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.ullevi.locationAndNames } as StadiumInfo,
//     '25 923'
//   ),

//   new Match(
//     '19.06.1958',
//     tournamentStages.quarterFinal,
//     ['France', 'North. Ireland'],
//     [[4, 0], [], []],
//     ['Wisnieski', 'Fontaine', 'Piantoni'],
//     ['44', '55, 63', '68'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.idrottsparken.locationAndNames } as StadiumInfo,
//     '11 800'
//   ),

//   new Match(
//     '19.06.1958',
//     tournamentStages.quarterFinal,
//     ['Sweden', 'Soviet Union'],
//     [[2, 0], [], []],
//     ['Hamrin', 'Simonsson'],
//     ['49', '88'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.rasunda.locationAndNames } as StadiumInfo,
//     '31 900'
//   ),

//   new Match(
//     '19.06.1958',
//     tournamentStages.quarterFinal,
//     ['Germany', 'Yugoslavia'],
//     [[1, 0], [], []],
//     ['Rahn'],
//     ['12'],
//     [],
//     [],
//     { ...stadiumsStore.Sweden?.malmo.locationAndNames } as StadiumInfo,
//     '20 055'
//   ),

//   new Match(
//     '24.06.1958',
//     tournamentStages.semiFinal,
//     ['Brazil', 'France'],
//     [[5, 2], [], []],
//     ['Vavá', 'Didi', 'Pelé'],
//     ['2', '39', '52, 64, 75'],
//     ['Fontaine', 'Piantoni'],
//     ['9', '83'],
//     { ...stadiumsStore.Sweden?.rasunda.locationAndNames } as StadiumInfo,
//     '27 100'
//   ),

//   new Match(
//     '24.06.1958',
//     tournamentStages.semiFinal,
//     ['Sweden', 'Germany'],
//     [[3, 1], [], []],
//     ['Skoglund', 'Gren', 'Hamrin'],
//     ['32', '81', '88'],
//     ['Schäfer'],
//     ['24'],
//     { ...stadiumsStore.Sweden?.ullevi.locationAndNames } as StadiumInfo,
//     '49 471'
//   ),

//   new Match(
//     '28.06.1958',
//     tournamentStages.thirdPlace,
//     ['France', 'Germany'],
//     [[6, 3], [], []],
//     ['Fontaine', 'Kopa', 'Douis'],
//     ['16, 36, 78, 89', '27(p)', '50'],
//     ['Cieslarczyk', 'Rahn', 'Schäfer'],
//     ['18', '52', '84'],
//     { ...stadiumsStore.Sweden?.ullevi.locationAndNames } as StadiumInfo,
//     '32 483'
//   ),

//   new Match(
//     '29.06.1958',
//     tournamentStages.final,
//     ['Brazil', 'Sweden'],
//     [[5, 2], [], []],
//     ['Vavá', 'Pelé', 'Zagallo'],
//     ['9, 32', '55, 90', '68'],
//     ['Liedholm', 'Simonsson'],
//     ['4', '80'],
//     { ...stadiumsStore.Sweden?.rasunda.locationAndNames } as StadiumInfo,
//     '49 737'
//   ),
// ]
