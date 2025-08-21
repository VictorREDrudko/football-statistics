import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import {
  MatchInfo,
  StadiumInfo,
} from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/CHAMPIONSHIP_STAGES'

export const finalStageMatches2002: MatchInfo[] = [
  new Match(
    '31.05.2002',
    tournamentStages.groupA,
    ['Senegal', 'France'],
    [[1, 0], [], []],
    ['Bouba Diop'],
    ['30'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.seoul.locationAndNames,
    } as StadiumInfo,
    '62 561'
  ),

  new Match(
    '01.06.2002',
    tournamentStages.groupA,
    ['Denmark', 'Uruguay'],
    [[2, 1], [], []],
    ['J.D.Tomasson'],
    ['45, 83'],
    ['D.Rodríguez'],
    ['47'],
    {
      ...stadiumsStore['Korea Republic']?.ulsan.locationAndNames,
    } as StadiumInfo,
    '30 157'
  ),

  new Match(
    '06.06.2002',
    tournamentStages.groupA,
    ['Denmark', 'Senegal'],
    [[1, 1], [], []],
    ['J.D.Tomasson'],
    ['16(p)'],
    ['S.Diao'],
    ['52'],
    {
      ...stadiumsStore['Korea Republic']?.daegu.locationAndNames,
    } as StadiumInfo,
    '43 500'
  ),

  new Match(
    '06.06.2002',
    tournamentStages.groupA,
    ['France', 'Uruguay'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.busan.locationAndNames,
    } as StadiumInfo,
    '38 289'
  ),

  new Match(
    '11.06.2002',
    tournamentStages.groupA,
    ['Denmark', 'France'],
    [[2, 0], [], []],
    ['D.Rommedahl', 'J.D.Tomasson'],
    ['22', '67'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.incheon.locationAndNames,
    } as StadiumInfo,
    '48 100'
  ),

  new Match(
    '11.06.2002',
    tournamentStages.groupA,
    ['Senegal', 'Uruguay'],
    [[3, 3], [], []],
    ['K.Fadiga', 'Bouba Diop'],
    ['20(p)', '26, 38'],
    ['R.Morales', 'D.Forlán', 'A.Recoba'],
    ['46', '69', '88(p)'],
    {
      ...stadiumsStore['Korea Republic']?.suwon.locationAndNames,
    } as StadiumInfo,
    '33 681'
  ),

  new Match(
    '02.06.2002',
    tournamentStages.groupB,
    ['Paraguay', 'South Africa'],
    [[2, 2], [], []],
    ['R.Santa Cruz', 'F.J. Arce Rolón'],
    ['39', '55'],
    ['T.Mokoena', 'Q.Fortune'],
    ['63', '90+1(p)'],
    {
      ...stadiumsStore['Korea Republic']?.busan.locationAndNames,
    } as StadiumInfo,
    '25 186'
  ),

  new Match(
    '02.06.2002',
    tournamentStages.groupB,
    ['Spain', 'Slovenia'],
    [[3, 1], [], []],
    ['Raul', 'J.Carlos Valerón', 'F.Hierro'],
    ['44', '74', '87(p)'],
    ['S.Cimirotič'],
    ['82'],
    {
      ...stadiumsStore['Korea Republic']?.gwangju.locationAndNames,
    } as StadiumInfo,
    '28 598'
  ),

  new Match(
    '07.06.2002',
    tournamentStages.groupB,
    ['Spain', 'Paraguay'],
    [[3, 1], [], []],
    ['F.Morientes', 'F.Hierro'],
    ['53, 69', '83(p)'],
    ['C.Puyol'],
    ['10(o.g.)'],
    {
      ...stadiumsStore['Korea Republic']?.jeonju.locationAndNames,
    } as StadiumInfo,
    '24 000'
  ),

  new Match(
    '08.06.2002',
    tournamentStages.groupB,
    ['South Africa', 'Slovenia'],
    [[1, 0], [], []],
    ['S.Nomvethe'],
    ['4'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.daegu.locationAndNames,
    } as StadiumInfo,
    '47 226'
  ),

  new Match(
    '12.06.2002',
    tournamentStages.groupB,
    ['Spain', 'South Africa'],
    [[3, 2], [], []],
    ['Raul', 'G.Mendieta'],
    ['4, 56', '45+1'],
    ['B.McCarthy', 'L.Radebe'],
    ['31', '53'],
    {
      ...stadiumsStore['Korea Republic']?.daejeon.locationAndNames,
    } as StadiumInfo,
    '31 024'
  ),

  new Match(
    '12.06.2002',
    tournamentStages.groupB,
    ['Paraguay', 'Slovenia'],
    [[3, 1], [], []],
    ['N.Cuevas', 'J.Campos'],
    ['65, 84', '73'],
    ['M.Ačimovič'],
    ['45+1'],
    {
      ...stadiumsStore['Korea Republic']?.jeju.locationAndNames,
    } as StadiumInfo,
    '30 176'
  ),

  new Match(
    '03.06.2002',
    tournamentStages.groupC,
    ['Brazil', 'Turkey'],
    [[2, 1], [], []],
    ['Ronaldo', 'Rivaldo'],
    ['50', '87(p)'],
    ['Hasan Şaş'],
    ['45+2'],
    {
      ...stadiumsStore['Korea Republic']?.ulsan.locationAndNames,
    } as StadiumInfo,
    '33 842'
  ),

  new Match(
    '04.06.2002',
    tournamentStages.groupC,
    ['Costa Rica', 'China'],
    [[2, 0], [], []],
    ['R.Gomez', 'M.Wright'],
    ['61', '65'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.gwangju.locationAndNames,
    } as StadiumInfo,
    '27 217'
  ),

  new Match(
    '08.06.2002',
    tournamentStages.groupC,
    ['Brazil', 'China'],
    [[4, 0], [], []],
    ['Roberto Carlos', 'Rivaldo', 'Ronaldinho', 'Ronaldo'],
    ['15', '32', '45(p)', '55'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.jeju.locationAndNames,
    } as StadiumInfo,
    '36 750'
  ),

  new Match(
    '09.06.2002',
    tournamentStages.groupC,
    ['Costa Rica', 'Turkey'],
    [[1, 1], [], []],
    ['W.Parks'],
    ['86'],
    ['Emre Belözoglu'],
    ['56'],
    {
      ...stadiumsStore['Korea Republic']?.incheon.locationAndNames,
    } as StadiumInfo,
    '42 299'
  ),

  new Match(
    '13.06.2002',
    tournamentStages.groupC,
    ['Brazil', 'Costa Rica'],
    [[5, 2], [], []],
    ['Ronaldo', 'Edmilson', 'Rivaldo', 'Júnior'],
    ['10, 13', '38', '62', '64'],
    ['P.Wanchope', 'R.Gómez'],
    ['39', '56'],
    {
      ...stadiumsStore['Korea Republic']?.suwon.locationAndNames,
    } as StadiumInfo,
    '38 524'
  ),

  new Match(
    '13.06.2002',
    tournamentStages.groupC,
    ['Turkey', 'China'],
    [[3, 0], [], []],
    ['Hasan Şaş', 'Bulent Korkmaz', 'Ü.Davala'],
    ['6', '9', '62', '85'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.seoul.locationAndNames,
    } as StadiumInfo,
    '43 605'
  ),

  new Match(
    '04.06.2002',
    tournamentStages.groupD,
    ['Korea Republic', 'Poland'],
    [[2, 0], [], []],
    ['Hwang Sun-hong', 'Yoo Sang-chul'],
    ['26', '53'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.busan.locationAndNames,
    } as StadiumInfo,
    '48 760'
  ),

  new Match(
    '05.06.2002',
    tournamentStages.groupD,
    ['United States', 'Portugal'],
    [[3, 2], [], []],
    ["J.O'Brien", 'J.Costa', 'B.McBride'],
    ['4', '29(o.g.)', '36'],
    ['Beto', 'J.Agoos'],
    ['39', '71(o.g.)'],
    {
      ...stadiumsStore['Korea Republic']?.suwon.locationAndNames,
    } as StadiumInfo,
    '37 306'
  ),

  new Match(
    '10.06.2002',
    tournamentStages.groupD,
    ['Korea Republic', 'United States'],
    [[1, 1], [], []],
    ['Ahn Jung-hwan'],
    ['78'],
    ['C.Mathis'],
    ['24'],
    {
      ...stadiumsStore['Korea Republic']?.daegu.locationAndNames,
    } as StadiumInfo,
    '60 778'
  ),

  new Match(
    '10.06.2002',
    tournamentStages.groupD,
    ['Portugal', 'Poland'],
    [[4, 0], [], []],
    ['Pedro Pauleta', 'Rui Costa'],
    ['14, 65, 77', '88'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.jeonju.locationAndNames,
    } as StadiumInfo,
    '31 000'
  ),

  new Match(
    '14.06.2002',
    tournamentStages.groupD,
    ['Korea Republic', 'Portugal'],
    [[1, 0], [], []],
    ['Park Ji-sung'],
    ['70'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.incheon.locationAndNames,
    } as StadiumInfo,
    '50 239'
  ),

  new Match(
    '14.06.2002',
    tournamentStages.groupD,
    ['Poland', 'United States'],
    [[3, 1], [], []],
    ['E.Olisadebe', 'P.Kryszałowicz', 'M.Żewłakow'],
    ['3', '5', '66'],
    ['L.Donovan'],
    ['83'],
    {
      ...stadiumsStore['Korea Republic']?.daejeon.locationAndNames,
    } as StadiumInfo,
    '26 482'
  ),

  new Match(
    '01.06.2002',
    tournamentStages.groupE,
    ['Ireland', 'Cameroon'],
    [[1, 1], [], []],
    ['M.Holland'],
    ['52'],
    ["H.M'Boma"],
    ['39'],
    { ...stadiumsStore.Japan?.niigata.locationAndNames } as StadiumInfo,
    '33 679'
  ),

  new Match(
    '01.06.2002',
    tournamentStages.groupE,
    ['Germany', 'Saudi Arabia'],
    [[8, 0], [], []],
    [
      'M.Klose',
      'M.Ballack',
      'C.Jancker',
      'T.Linke',
      'O.Bierhoff',
      'B.Schneider',
    ],
    ['20, 25, 70', '40', '45+1', '73', '84', '90+1'],
    [],
    [],
    { ...stadiumsStore.Japan?.sapporo.locationAndNames } as StadiumInfo,
    '32 218'
  ),

  new Match(
    '05.06.2002',
    tournamentStages.groupE,
    ['Germany', 'Ireland'],
    [[1, 1], [], []],
    ['M.Klose'],
    ['19'],
    ['Robbie Keane'],
    ['90+2'],
    { ...stadiumsStore.Japan?.kashima.locationAndNames } as StadiumInfo,
    '35 854'
  ),

  new Match(
    '06.06.2002',
    tournamentStages.groupE,
    ['Cameroon', 'Saudi Arabia'],
    [[1, 0], [], []],
    ["S.Eto'o"],
    ['66'],
    [],
    [],
    { ...stadiumsStore.Japan?.saitama.locationAndNames } as StadiumInfo,
    '52 328'
  ),

  new Match(
    '11.06.2002',
    tournamentStages.groupE,
    ['Germany', 'Cameroon'],
    [[2, 0], [], []],
    ['M.Bode', 'M.Klose'],
    ['50', '79'],
    [],
    [],
    { ...stadiumsStore.Japan?.shizuoka.locationAndNames } as StadiumInfo,
    '47 085'
  ),

  new Match(
    '11.06.2002',
    tournamentStages.groupE,
    ['Ireland', 'Saudi Arabia'],
    [[3, 0], [], []],
    ['Robbie Keane', 'G.Breen', 'D.Duff'],
    ['7', '61', '87'],
    [],
    [],
    { ...stadiumsStore.Japan?.yokohama.locationAndNames } as StadiumInfo,
    '65 320'
  ),

  new Match(
    '02.06.2002',
    tournamentStages.groupF,
    ['Argentina', 'Nigeria'],
    [[1, 0], [], []],
    ['G.Batistuta'],
    ['63'],
    [],
    [],
    { ...stadiumsStore.Japan?.kashima.locationAndNames } as StadiumInfo,
    '34 050'
  ),

  new Match(
    '02.06.2002',
    tournamentStages.groupF,
    ['England', 'Sweden'],
    [[1, 1], [], []],
    ['Sol Campbell'],
    ['63'],
    ['N.Alexandersson'],
    ['59'],
    { ...stadiumsStore.Japan?.saitama.locationAndNames } as StadiumInfo,
    '52 721'
  ),

  new Match(
    '07.06.2002',
    tournamentStages.groupF,
    ['Sweden', 'Nigeria'],
    [[2, 1], [], []],
    ['H.Larsson'],
    ['35, 63(p)'],
    ['J.Aghahowa'],
    ['27'],
    { ...stadiumsStore.Japan?.kobe.locationAndNames } as StadiumInfo,
    '36 194'
  ),

  new Match(
    '07.06.2002',
    tournamentStages.groupF,
    ['England', 'Argentina'],
    [[1, 0], [], []],
    ['D.Beckham'],
    ['44(p)'],
    [],
    [],
    { ...stadiumsStore.Japan?.sapporo.locationAndNames } as StadiumInfo,
    '35 927'
  ),

  new Match(
    '12.06.2002',
    tournamentStages.groupF,
    ['Sweden', 'Argentina'],
    [[1, 1], [], []],
    ['A.Svensson'],
    ['59'],
    ['H.Crespo'],
    ['88'],
    { ...stadiumsStore.Japan?.miyagi.locationAndNames } as StadiumInfo,
    '45 777'
  ),

  new Match(
    '12.06.2002',
    tournamentStages.groupF,
    ['Nigeria', 'England'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.Japan?.nagai.locationAndNames } as StadiumInfo,
    '44 864'
  ),

  new Match(
    '03.06.2002',
    tournamentStages.groupG,
    ['Mexico', 'Croatia'],
    [[1, 0], [], []],
    ['Cuauhtémoc Blanco'],
    ['60(p)'],
    [],
    [],
    { ...stadiumsStore.Japan?.niigata.locationAndNames } as StadiumInfo,
    '32 239'
  ),

  new Match(
    '03.06.2002',
    tournamentStages.groupG,
    ['Italy', 'Ecuador'],
    [[2, 0], [], []],
    ['C.Vieri'],
    ['7, 27'],
    [],
    [],
    { ...stadiumsStore.Japan?.sapporo.locationAndNames } as StadiumInfo,
    '31 081'
  ),

  new Match(
    '08.06.2002',
    tournamentStages.groupG,
    ['Croatia', 'Italy'],
    [[2, 1], [], []],
    ['I.Olić', 'M.Rapaić'],
    ['73', '76'],
    ['C.Vieri'],
    ['55'],
    { ...stadiumsStore.Japan?.kashima.locationAndNames } as StadiumInfo,
    '36 472'
  ),

  new Match(
    '09.06.2002',
    tournamentStages.groupG,
    ['Mexico', 'Ecuador'],
    [[2, 1], [], []],
    ['J.Borgetti', 'Gerardo Torrado'],
    ['28', '57'],
    ['A.Delgado'],
    ['5'],
    { ...stadiumsStore.Japan?.miyagi.locationAndNames } as StadiumInfo,
    '45 610'
  ),

  new Match(
    '13.06.2002',
    tournamentStages.groupG,
    ['Mexico', 'Italy'],
    [[1, 1], [], []],
    ['J.Borgetti'],
    ['34'],
    ['A.Del Piero'],
    ['85'],
    { ...stadiumsStore.Japan?.oita.locationAndNames } as StadiumInfo,
    '39 291'
  ),

  new Match(
    '13.06.2002',
    tournamentStages.groupG,
    ['Ecuador', 'Croatia'],
    [[1, 0], [], []],
    ['É.Méndez'],
    ['48'],
    [],
    [],
    { ...stadiumsStore.Japan?.yokohama.locationAndNames } as StadiumInfo,
    '65 862'
  ),

  new Match(
    '04.06.2002',
    tournamentStages.groupH,
    ['Japan', 'Belgium'],
    [[2, 2], [], []],
    ['T.Suzuki', 'J.Inamoto'],
    ['59', '67'],
    ['M.Wilmots', 'P.Van der Heyden'],
    ['57', '75'],
    { ...stadiumsStore.Japan?.saitama.locationAndNames } as StadiumInfo,
    '55 256'
  ),

  new Match(
    '05.06.2002',
    tournamentStages.groupH,
    ['Russia', 'Tunisia'],
    [[2, 0], [], []],
    ['Y.Titov', 'V.Karpin'],
    ['59', '64(p)'],
    [],
    [],
    { ...stadiumsStore.Japan?.kobe.locationAndNames } as StadiumInfo,
    '30 957'
  ),

  new Match(
    '09.06.2002',
    tournamentStages.groupH,
    ['Japan', 'Russia'],
    [[1, 0], [], []],
    ['J.Inamoto'],
    ['51'],
    [],
    [],
    { ...stadiumsStore.Japan?.yokohama.locationAndNames } as StadiumInfo,
    '66 108'
  ),

  new Match(
    '10.06.2002',
    tournamentStages.groupH,
    ['Tunisia', 'Belgium'],
    [[1, 1], [], []],
    ['R.Bouzaiene'],
    ['17'],
    ['M.Wilmots'],
    ['13'],
    { ...stadiumsStore.Japan?.oita.locationAndNames } as StadiumInfo,
    '39 700'
  ),

  new Match(
    '14.06.2002',
    tournamentStages.groupH,
    ['Japan', 'Tunisia'],
    [[2, 0], [], []],
    ['H.Morishima', 'H.Nakata'],
    ['48', '75'],
    [],
    [],
    { ...stadiumsStore.Japan?.nagai.locationAndNames } as StadiumInfo,
    '45 213'
  ),

  new Match(
    '14.06.2002',
    tournamentStages.groupH,
    ['Belgium', 'Russia'],
    [[3, 2], [], []],
    ['J.Walem', 'W.Sonck', 'M.Wilmots'],
    ['7', '78', '82'],
    ['V.Beschastnykh', 'D.Sychev'],
    ['52', '88'],
    { ...stadiumsStore.Japan?.shizuoka.locationAndNames } as StadiumInfo,
    '46 640'
  ),

  new Match(
    '15.06.2002',
    tournamentStages.roundOf16,
    ['Germany', 'Paraguay'],
    [[1, 0], [], []],
    ['O.Neuville'],
    ['88'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.jeju.locationAndNames,
    } as StadiumInfo,
    '25 176'
  ),

  new Match(
    '15.06.2002',
    tournamentStages.roundOf16,
    ['England', 'Denmark'],
    [[3, 0], [], []],
    ['R.Ferdinand', 'M.Owen', 'E.Heskey'],
    ['5', '22', '44'],
    [],
    [],
    { ...stadiumsStore.Japan?.niigata.locationAndNames } as StadiumInfo,
    '40 582'
  ),

  new Match(
    '16.06.2002',
    tournamentStages.roundOf16,
    ['Senegal', 'Sweden'],
    [[1, 1], [1, 0], []],
    ['H.Camara'],
    ['37', '104'],
    ['H.Larsson'],
    ['11'],
    { ...stadiumsStore.Japan?.oita.locationAndNames } as StadiumInfo,
    '39 747'
  ),

  new Match(
    '16.06.2002',
    tournamentStages.roundOf16,
    ['Spain', 'Ireland'],
    [
      [1, 1],
      [0, 0],
      [3, 2],
    ],
    ['F.Morientes'],
    ['8'],
    ['Robbie Keane'],
    ['90(p)'],
    {
      ...stadiumsStore['Korea Republic']?.suwon.locationAndNames,
    } as StadiumInfo,
    '38 926'
  ),

  new Match(
    '17.06.2002',
    tournamentStages.roundOf16,
    ['United States', 'Mexico'],
    [[2, 0], [], []],
    ['B.McBride', 'L.Donovan'],
    ['8', '65'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.jeonju.locationAndNames,
    } as StadiumInfo,
    '36 380'
  ),

  new Match(
    '17.06.2002',
    tournamentStages.roundOf16,
    ['Brazil', 'Belgium'],
    [[2, 0], [], []],
    ['Rivaldo', 'Ronaldo'],
    ['67', '87'],
    [],
    [],
    { ...stadiumsStore.Japan?.kobe.locationAndNames } as StadiumInfo,
    '40 440'
  ),

  new Match(
    '18.06.2002',
    tournamentStages.roundOf16,
    ['Turkey', 'Japan'],
    [[1, 0], [], []],
    ['Ümit Davala'],
    ['12'],
    [],
    [],
    { ...stadiumsStore.Japan?.miyagi.locationAndNames } as StadiumInfo,
    '45 666'
  ),

  new Match(
    '18.06.2002',
    tournamentStages.roundOf16,
    ['Korea Republic', 'Italy'],
    [[1, 1], [1, 0], []],
    ['Seol Ki-Hyeon', 'Ahn Jung-Hwan'],
    ['88', '117'],
    ['C.Vieri'],
    ['18'],
    {
      ...stadiumsStore['Korea Republic']?.daejeon.locationAndNames,
    } as StadiumInfo,
    '38 588'
  ),

  new Match(
    '21.06.2002',
    tournamentStages.quarterFinal,
    ['Brazil', 'England'],
    [[2, 1], [], []],
    ['Rivaldo', 'Ronaldinho'],
    ['45+2', '50'],
    ['M.Owen'],
    ['23'],
    { ...stadiumsStore.Japan?.shizuoka.locationAndNames } as StadiumInfo,
    '47 436'
  ),

  new Match(
    '21.06.2002',
    tournamentStages.quarterFinal,
    ['Germany', 'United States'],
    [[1, 0], [], []],
    ['M.Ballack'],
    ['39'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.ulsan.locationAndNames,
    } as StadiumInfo,
    '37 337'
  ),

  new Match(
    '22.06.2002',
    tournamentStages.quarterFinal,
    ['Korea Republic', 'Spain'],
    [
      [0, 0],
      [0, 0],
      [5, 3],
    ],
    [],
    [],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.gwangju.locationAndNames,
    } as StadiumInfo,
    '42 114'
  ),

  new Match(
    '22.06.2002',
    tournamentStages.quarterFinal,
    ['Turkey', 'Senegal'],
    [[0, 0], [1, 0], []],
    ['Ilhan Mansiz'],
    ['94'],
    [],
    [],
    { ...stadiumsStore.Japan?.nagai.locationAndNames } as StadiumInfo,
    '44 233'
  ),

  new Match(
    '25.06.2002',
    tournamentStages.semiFinal,
    ['Germany', 'Korea Republic'],
    [[1, 0], [], []],
    ['M.Ballack'],
    ['75'],
    [],
    [],
    {
      ...stadiumsStore['Korea Republic']?.seoul.locationAndNames,
    } as StadiumInfo,
    '65 256'
  ),

  new Match(
    '26.06.2002',
    tournamentStages.semiFinal,
    ['Brazil', 'Turkey'],
    [[1, 0], [], []],
    ['Ronaldo'],
    ['49'],
    [],
    [],
    { ...stadiumsStore.Japan?.saitama.locationAndNames } as StadiumInfo,
    '61 058'
  ),

  new Match(
    '29.06.2002',
    tournamentStages.thirdPlace,
    ['Turkey', 'Korea Republic'],
    [[3, 2], [], []],
    ['Hakan Sukur', 'Ilhan Mansiz'],
    ['1', '13, 32'],
    ['Lee Eul-yong', 'Song Chong-gug'],
    ['9', '90+3'],
    {
      ...stadiumsStore['Korea Republic']?.daegu.locationAndNames,
    } as StadiumInfo,
    '63 483'
  ),

  new Match(
    '30.06.2002',
    tournamentStages.final,
    ['Brazil', 'Germany'],
    [[2, 0], [], []],
    ['Ronaldo'],
    ['67, 79'],
    [],
    [],
    { ...stadiumsStore.Japan?.yokohama.locationAndNames } as StadiumInfo,
    '69 029'
  ),
]
