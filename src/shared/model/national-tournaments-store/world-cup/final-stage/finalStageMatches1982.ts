import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1982: MatchInfo[] = [
  new Match(
    '14.06.1982',
    tournamentStages.group1,
    ['Italy', 'Poland'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Spain?.balaidos.locationAndNames } as StadiumInfo,
    '33 040'
  ),

  new Match(
    '15.06.1982',
    tournamentStages.group1,
    ['Peru', 'Cameroon'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Spain?.riazor.locationAndNames } as StadiumInfo,
    '11 000'
  ),

  new Match(
    '18.06.1982',
    tournamentStages.group1,
    ['Italy', 'Peru'],
    [[1, 1], [], []],
    ['Conti'],
    ['18'],
    ['Díaz'],
    ['83'],
    { ...stadiumsStore.Spain?.balaidos.locationAndNames } as StadiumInfo,
    '25 000'
  ),

  new Match(
    '19.06.1982',
    tournamentStages.group1,
    ['Poland', 'Cameroon'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Spain?.riazor.locationAndNames } as StadiumInfo,
    '19 000'
  ),

  new Match(
    '22.06.1982',
    tournamentStages.group1,
    ['Poland', 'Peru'],
    [[5, 1], [], []],
    ['Smolarek', 'Lato', 'Boniek', 'Buncol', 'Ciołek'],
    ['55', '58', '61', '68', '76'],
    ['La Rosa'],
    ['83'],
    { ...stadiumsStore.Spain?.riazor.locationAndNames } as StadiumInfo,
    '25 000'
  ),

  new Match(
    '23.06.1982',
    tournamentStages.group1,
    ['Italy', 'Cameroon'],
    [[1, 1], [], []],
    ['Graziani'],
    ['60'],
    ["M'Bida"],
    ['61'],
    { ...stadiumsStore.Spain?.balaidos.locationAndNames } as StadiumInfo,
    '20 000'
  ),

  new Match(
    '16.06.1982',
    tournamentStages.group2,
    ['Algeria', 'Germany'],
    [[2, 1], [], []],
    ['Madjer', 'Belloumi'],
    ['54', '68'],
    ['Rummenigge'],
    ['67'],
    { ...stadiumsStore.Spain?.molinon.locationAndNames } as StadiumInfo,
    '42 000'
  ),

  new Match(
    '17.06.1982',
    tournamentStages.group2,
    ['Austria', 'Chile'],
    [[1, 0], [], []],
    ['Schachner'],
    ['22'],
    [],
    [],
    { ...stadiumsStore.Spain?.tartiere.locationAndNames } as StadiumInfo,
    '22 500'
  ),

  new Match(
    '20.06.1982',
    tournamentStages.group2,
    ['Germany', 'Chile'],
    [[4, 1], [], []],
    ['Rummenigge', 'Reinders'],
    ['9, 57, 66', '83'],
    ['Moscoso'],
    ['90'],
    { ...stadiumsStore.Spain?.molinon.locationAndNames } as StadiumInfo,
    '42 000'
  ),

  new Match(
    '21.06.1982',
    tournamentStages.group2,
    ['Austria', 'Algeria'],
    [[2, 0], [], []],
    ['Schachner', 'Krankl'],
    ['55', '67'],
    [],
    [],
    { ...stadiumsStore.Spain?.tartiere.locationAndNames } as StadiumInfo,
    '22 000'
  ),

  new Match(
    '24.06.1982',
    tournamentStages.group2,
    ['Algeria', 'Chile'],
    [[3, 2], [], []],
    ['Assad', 'Bensaoula'],
    ['7, 31', '35'],
    [],
    [],
    { ...stadiumsStore.Spain?.tartiere.locationAndNames } as StadiumInfo,
    '16 000'
  ),

  new Match(
    '25.06.1982',
    tournamentStages.group2,
    ['Germany', 'Austria'],
    [[1, 0], [], []],
    ['Hrubesch'],
    ['10'],
    [],
    [],
    { ...stadiumsStore.Spain?.molinon.locationAndNames } as StadiumInfo,
    '41 000'
  ),

  new Match(
    '13.06.1982',
    tournamentStages.group3,
    ['Belgium', 'Argentina'],
    [[1, 0], [], []],
    ['Vandenbergh'],
    ['62'],
    [],
    [],
    { ...stadiumsStore.Spain?.campNou.locationAndNames } as StadiumInfo,
    '95 000'
  ),

  new Match(
    '15.06.1982',
    tournamentStages.group3,
    ['Hungary', 'El Salvador'],
    [[10, 1], [], []],
    ['Nyilasi', 'Pölöskei', 'Fazekas', 'Tóth', 'L.Kiss', 'Szentes'],
    ['4, 83', '11', '23, 54', '50', '69, 72, 76', '70'],
    ['Ramírez Zapata'],
    ['64'],
    { ...stadiumsStore.Spain?.nuevo.locationAndNames } as StadiumInfo,
    '23 000'
  ),

  new Match(
    '18.06.1982',
    tournamentStages.group3,
    ['Argentina', 'Hungary'],
    [[4, 1], [], []],
    ['Bertoni', 'Maradona', 'Ardiles'],
    ['26', '28, 57', '60'],
    ['Pölöskei'],
    ['76'],
    { ...stadiumsStore.Spain?.perez.locationAndNames } as StadiumInfo,
    '32 093'
  ),

  new Match(
    '19.06.1982',
    tournamentStages.group3,
    ['Belgium', 'El Salvador'],
    [[1, 0], [], []],
    ['Coeck'],
    ['19'],
    [],
    [],
    { ...stadiumsStore.Spain?.nuevo.locationAndNames } as StadiumInfo,
    '15 000'
  ),

  new Match(
    '22.06.1982',
    tournamentStages.group3,
    ['Belgium', 'Hungary'],
    [[1, 1], [], []],
    ['Czerniatynski'],
    ['76'],
    ['Varga'],
    ['27'],
    { ...stadiumsStore.Spain?.nuevo.locationAndNames } as StadiumInfo,
    '37 000'
  ),

  new Match(
    '23.06.1982',
    tournamentStages.group3,
    ['Argentina', 'El Salvador'],
    [[2, 0], [], []],
    ['Passarella', 'Bertoni'],
    ['22(p)', '54'],
    [],
    [],
    { ...stadiumsStore.Spain?.perez.locationAndNames } as StadiumInfo,
    '32 500'
  ),

  new Match(
    '16.06.1982',
    tournamentStages.group4,
    ['England', 'France'],
    [[3, 1], [], []],
    ['Robson', 'Mariner'],
    ['1, 67', '83'],
    ['Soler'],
    ['24'],
    { ...stadiumsStore.Spain?.mames.locationAndNames } as StadiumInfo,
    '44 172'
  ),

  new Match(
    '17.06.1982',
    tournamentStages.group4,
    ['Czechoslovakia', 'Kuwait'],
    [[1, 1], [], []],
    ['Panenka'],
    ['21(p)'],
    ['Al-Dakhil'],
    ['57'],
    { ...stadiumsStore.Spain?.zorrilla.locationAndNames } as StadiumInfo,
    '25 000'
  ),

  new Match(
    '20.06.1982',
    tournamentStages.group4,
    ['England', 'Czechoslovakia'],
    [[2, 0], [], []],
    ['Francis', 'Barmoš'],
    ['62', '66(o.g.)'],
    [],
    [],
    { ...stadiumsStore.Spain?.mames.locationAndNames } as StadiumInfo,
    '41 123'
  ),

  new Match(
    '21.06.1982',
    tournamentStages.group4,
    ['France', 'Kuwait'],
    [[4, 1], [], []],
    ['Genghini', 'Platini', 'Six', 'Bossis'],
    ['31', '43', '48', '89'],
    ['Al-Buloushi'],
    ['75'],
    { ...stadiumsStore.Spain?.zorrilla.locationAndNames } as StadiumInfo,
    '30 043'
  ),

  new Match(
    '24.06.1982',
    tournamentStages.group4,
    ['France', 'Czechoslovakia'],
    [[1, 1], [], []],
    ['Six'],
    ['66'],
    ['Panenka'],
    ['84(p)'],
    { ...stadiumsStore.Spain?.zorrilla.locationAndNames } as StadiumInfo,
    '28 000'
  ),

  new Match(
    '25.06.1982',
    tournamentStages.group4,
    ['England', 'Kuwait'],
    [[1, 0], [], []],
    ['Francis'],
    ['27'],
    [],
    [],
    { ...stadiumsStore.Spain?.mames.locationAndNames } as StadiumInfo,
    '39 700'
  ),

  new Match(
    '16.06.1982',
    tournamentStages.group5,
    ['Spain', 'Honduras'],
    [[1, 1], [], []],
    ['López Ufarte'],
    ['65(p)'],
    ['Zelaya'],
    ['8'],
    { ...stadiumsStore.Spain?.casanova.locationAndNames } as StadiumInfo,
    '49 562'
  ),

  new Match(
    '17.06.1982',
    tournamentStages.group5,
    ['Yugoslavia', 'North. Ireland'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Spain?.romareda.locationAndNames } as StadiumInfo,
    '25 000'
  ),

  new Match(
    '20.06.1982',
    tournamentStages.group5,
    ['Spain', 'Yugoslavia'],
    [[2, 1], [], []],
    ['Juanito', 'Saura'],
    ['14(p)', '66'],
    ['Gudelj'],
    ['10'],
    { ...stadiumsStore.Spain?.casanova.locationAndNames } as StadiumInfo,
    '48 000'
  ),

  new Match(
    '21.06.1982',
    tournamentStages.group5,
    ['North. Ireland', 'Honduras'],
    [[1, 1], [], []],
    ['Armstrong'],
    ['10'],
    ['Laing'],
    ['60'],
    { ...stadiumsStore.Spain?.romareda.locationAndNames } as StadiumInfo,
    '15 000'
  ),

  new Match(
    '24.06.1982',
    tournamentStages.group5,
    ['Yugoslavia', 'Honduras'],
    [[1, 0], [], []],
    ['Petrović'],
    ['88(p)'],
    [],
    [],
    { ...stadiumsStore.Spain?.romareda.locationAndNames } as StadiumInfo,
    '25 000'
  ),

  new Match(
    '25.06.1982',
    tournamentStages.group5,
    ['North. Ireland', 'Spain'],
    [[1, 0], [], []],
    ['Armstrong'],
    ['47'],
    [],
    [],
    { ...stadiumsStore.Spain?.casanova.locationAndNames } as StadiumInfo,
    '49 562'
  ),

  new Match(
    '14.06.1982',
    tournamentStages.group6,
    ['Brazil', 'Soviet Union'],
    [[2, 1], [], []],
    ['Sócrates', 'Éder'],
    ['75', '88'],
    ['Bal'],
    ['34'],
    { ...stadiumsStore.Spain?.pizjuan.locationAndNames } as StadiumInfo,
    '68 000'
  ),

  new Match(
    '15.06.1982',
    tournamentStages.group6,
    ['Scotland', 'New Zealand'],
    [[5, 2], [], []],
    ['Dalglish', 'Wark', 'Robertson', 'Archibald'],
    ['18', '29, 32', '73', '79'],
    ['Sumner', 'Wooddin'],
    ['54', '64'],
    { ...stadiumsStore.Spain?.rosaleda.locationAndNames } as StadiumInfo,
    '36 000'
  ),

  new Match(
    '18.06.1982',
    tournamentStages.group6,
    ['Brazil', 'Scotland'],
    [[4, 1], [], []],
    ['Zico', 'Oscar', 'Éder', 'Falcão'],
    ['33', '48', '63', '87'],
    ['Narey'],
    ['18'],
    { ...stadiumsStore.Spain?.villamarin.locationAndNames } as StadiumInfo,
    '47 379'
  ),

  new Match(
    '19.06.1982',
    tournamentStages.group6,
    ['Soviet Union', 'New Zealand'],
    [[3, 0], [], []],
    ['Gavrilov', 'Blokhin', 'Baltacha'],
    ['24', '48', '68'],
    [],
    [],
    { ...stadiumsStore.Spain?.rosaleda.locationAndNames } as StadiumInfo,
    '19 000'
  ),

  new Match(
    '22.06.1982',
    tournamentStages.group6,
    ['Soviet Union', 'Scotland'],
    [[2, 2], [], []],
    ['Chivadze', 'Shengelia'],
    ['59', '84'],
    ['Jordan', 'Souness'],
    ['15', '86'],
    { ...stadiumsStore.Spain?.rosaleda.locationAndNames } as StadiumInfo,
    '45 000'
  ),

  new Match(
    '23.06.1982',
    tournamentStages.group6,
    ['Brazil', 'New Zealand'],
    [[4, 0], [], []],
    ['Zico', 'Falcão', 'Serginho'],
    ['28, 31', '64', '70'],
    [],
    [],
    { ...stadiumsStore.Spain?.villamarin.locationAndNames } as StadiumInfo,
    '43 000'
  ),

  new Match(
    '28.06.1982',
    tournamentStages.secondGroupRoundA,
    ['Poland', 'Belgium'],
    [[3, 0], [], []],
    ['Boniek'],
    ['4, 26, 53'],
    [],
    [],
    { ...stadiumsStore.Spain?.campNou.locationAndNames } as StadiumInfo,
    '65 000'
  ),

  new Match(
    '01.07.1982',
    tournamentStages.secondGroupRoundA,
    ['Soviet Union', 'Belgium'],
    [[1, 0], [], []],
    ['Oganesian'],
    ['48'],
    [],
    [],
    { ...stadiumsStore.Spain?.campNou.locationAndNames } as StadiumInfo,
    '45 000'
  ),

  new Match(
    '04.07.1982',
    tournamentStages.secondGroupRoundA,
    ['Soviet Union', 'Poland'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Spain?.campNou.locationAndNames } as StadiumInfo,
    '65 000'
  ),

  new Match(
    '29.06.1982',
    tournamentStages.secondGroupRoundB,
    ['Germany', 'England'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Spain?.bernabeu.locationAndNames } as StadiumInfo,
    '75 000'
  ),

  new Match(
    '02.07.1982',
    tournamentStages.secondGroupRoundB,
    ['Germany', 'Spain'],
    [[2, 1], [], []],
    ['Littbarski', 'Fischer'],
    ['50', '75'],
    ['Zamora'],
    ['82'],
    { ...stadiumsStore.Spain?.bernabeu.locationAndNames } as StadiumInfo,
    '90 089'
  ),

  new Match(
    '05.07.1982',
    tournamentStages.secondGroupRoundB,
    ['Spain', 'England'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Spain?.bernabeu.locationAndNames } as StadiumInfo,
    '75 000'
  ),

  new Match(
    '29.06.1982',
    tournamentStages.secondGroupRoundC,
    ['Italy', 'Argentina'],
    [[2, 1], [], []],
    ['Tardelli', 'Cabrini'],
    ['57', '67'],
    ['Passarella'],
    ['83'],
    { ...stadiumsStore.Spain?.sarria.locationAndNames } as StadiumInfo,
    '43 000'
  ),

  new Match(
    '02.07.1982',
    tournamentStages.secondGroupRoundC,
    ['Brazil', 'Argentina'],
    [[3, 1], [], []],
    ['Zico', 'Serginho', 'Júnior'],
    ['11', '66', '75'],
    ['Díaz'],
    ['89'],
    { ...stadiumsStore.Spain?.sarria.locationAndNames } as StadiumInfo,
    '44 000'
  ),

  new Match(
    '05.07.1982',
    tournamentStages.secondGroupRoundC,
    ['Italy', 'Brazil'],
    [[3, 2], [], []],
    ['Rossi'],
    ['5, 24, 74'],
    ['Sócrates', 'Falcão'],
    ['12', '68'],
    { ...stadiumsStore.Spain?.sarria.locationAndNames } as StadiumInfo,
    '44 000'
  ),

  new Match(
    '28.06.1982',
    tournamentStages.secondGroupRoundD,
    ['France', 'Austria'],
    [[1, 0], [], []],
    ['Genghini'],
    ['39'],
    [],
    [],
    { ...stadiumsStore.Spain?.calderon.locationAndNames } as StadiumInfo,
    '37 000'
  ),

  new Match(
    '01.07.1982',
    tournamentStages.secondGroupRoundD,
    ['Austria', 'North. Ireland'],
    [[2, 2], [], []],
    ['Pezzey', 'Hintermaier'],
    ['50', '68'],
    ['Hamilton'],
    ['27, 75'],
    { ...stadiumsStore.Spain?.calderon.locationAndNames } as StadiumInfo,
    '20 000'
  ),

  new Match(
    '04.07.1982',
    tournamentStages.secondGroupRoundD,
    ['France', 'North. Ireland'],
    [[4, 1], [], []],
    ['Giresse'],
    ['33, 80', '46, 68'],
    ['Armstrong'],
    ['75'],
    { ...stadiumsStore.Spain?.calderon.locationAndNames } as StadiumInfo,
    '37 000'
  ),

  new Match(
    '08.07.1982',
    tournamentStages.semiFinal,
    ['Italy', 'Poland'],
    [[2, 0], [], []],
    ['Rossi'],
    ['22, 73'],
    [],
    [],
    { ...stadiumsStore.Spain?.campNou.locationAndNames } as StadiumInfo,
    '50 000'
  ),

  new Match(
    '08.07.1982',
    tournamentStages.semiFinal,
    ['Germany', 'France'],
    [
      [1, 1],
      [2, 2],
      [5, 4],
    ],
    ['Littbarski', 'Rummenigge', 'Fischer'],
    ['17', '102', '108'],
    ['Platini', 'Trésor', 'Giresse'],
    ['26(p)', '92', '98'],
    { ...stadiumsStore.Spain?.pizjuan.locationAndNames } as StadiumInfo,
    '70 000'
  ),

  new Match(
    '10.07.1982',
    tournamentStages.thirdPlace,
    ['Poland', 'France'],
    [[3, 2], [], []],
    ['Szarmach', 'Majewski', 'Kupcewicz'],
    ['40', '44', '46'],
    ['Girard', 'Couriol'],
    ['13', '72'],
    { ...stadiumsStore.Spain?.perez.locationAndNames } as StadiumInfo,
    '28 000'
  ),

  new Match(
    '11.07.1982',
    tournamentStages.final,
    ['Italy', 'Germany'],
    [[3, 1], [], []],
    ['Rossi', 'Tardelli', 'Altobelli'],
    ['57', '69', '81'],
    ['Breitner'],
    ['83'],
    { ...stadiumsStore.Spain?.bernabeu.locationAndNames } as StadiumInfo,
    '90 000'
  ),
]
