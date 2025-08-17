import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1998: MatchInfo[] = [
  new Match(
    '10.06.1998',
    tournamentStages.groupA,
    ['Brazil', 'Scotland'],
    [[2, 1], [], []],
    ['César Sampaio', 'T.Boyd'],
    ['5', '74(o.g.)'],
    ['J.Collins'],
    ['38(p)'],
    { ...stadiumsStore.France?.stadeDeFrance.locationAndNames } as StadiumInfo,
    '80 000'
  ),

  new Match(
    '10.06.1998',
    tournamentStages.groupA,
    ['Morocco', 'Norway'],
    [[2, 2], [], []],
    ['M.Hadji', 'A.Hadda'],
    ['37', '60'],
    ['Y.Chippo', 'D.Eggen'],
    ['45+1(o.g.)', '61'],
    { ...stadiumsStore.France?.mosson.locationAndNames } as StadiumInfo,
    '29 800'
  ),

  new Match(
    '16.06.1998',
    tournamentStages.groupA,
    ['Scotland', 'Norway'],
    [[1, 1], [], []],
    ['C.Burley'],
    ['66'],
    ['H.Flo'],
    ['46'],
    { ...stadiumsStore.France?.lescure.locationAndNames } as StadiumInfo,
    '31 800'
  ),

  new Match(
    '16.06.1998',
    tournamentStages.groupA,
    ['Brazil', 'Morocco'],
    [[3, 0], [], []],
    ['Ronaldo', 'Rivaldo', 'Bebeto'],
    ['9', '45+2', '50'],
    [],
    [],
    { ...stadiumsStore.France?.beaujoire.locationAndNames } as StadiumInfo,
    '35 500'
  ),

  new Match(
    '23.06.1998',
    tournamentStages.groupA,
    ['Morocco', 'Scotland'],
    [[3, 0], [], []],
    ['S.Bassir', 'A.Hadda'],
    ['23, 85', '46'],
    [],
    [],
    { ...stadiumsStore.France?.geoffroyGuichard.locationAndNames } as StadiumInfo,
    '30 600'
  ),

  new Match(
    '23.06.1998',
    tournamentStages.groupA,
    ['Norway', 'Brazil'],
    [[2, 1], [], []],
    ['T.A.Flo', 'K.Rekdal'],
    ['83', '89(p)'],
    ['Bebeto'],
    ['78'],
    { ...stadiumsStore.France?.velodrome.locationAndNames } as StadiumInfo,
    '57 000'
  ),

  new Match(
    '11.06.1998',
    tournamentStages.groupB,
    ['Italy', 'Chile'],
    [[2, 2], [], []],
    ['C.Vieri', 'R.Baggio'],
    ['10', '84(p)'],
    ['Marcelo Salas'],
    ['45+3, 50'],
    { ...stadiumsStore.France?.lescure.locationAndNames } as StadiumInfo,
    '31 800'
  ),

  new Match(
    '11.06.1998',
    tournamentStages.groupB,
    ['Cameroon', 'Austria'],
    [[1, 1], [], []],
    ['P.Njanka'],
    ['77'],
    ['T.Polster'],
    ['90+1'],
    { ...stadiumsStore.France?.toulouse.locationAndNames } as StadiumInfo,
    '33 500'
  ),

  new Match(
    '17.06.1998',
    tournamentStages.groupB,
    ['Chile', 'Austria'],
    [[1, 1], [], []],
    ['Marcelo Salas'],
    ['70'],
    ['I.Vastić'],
    ['90+2'],
    { ...stadiumsStore.France?.geoffroyGuichard.locationAndNames } as StadiumInfo,
    '30 600'
  ),

  new Match(
    '17.06.1998',
    tournamentStages.groupB,
    ['Italy', 'Cameroon'],
    [[3, 0], [], []],
    ['L.Di Biagio', 'C.Vieri'],
    ['7', '75, 89'],
    [],
    [],
    { ...stadiumsStore.France?.mosson.locationAndNames } as StadiumInfo,
    '29 800'
  ),

  new Match(
    '23.06.1998',
    tournamentStages.groupB,
    ['Italy', 'Austria'],
    [[2, 1], [], []],
    ['C.Vieri', 'R.Baggio'],
    ['48', '90'],
    ['A.Herzog'],
    ['90+2'],
    { ...stadiumsStore.France?.stadeDeFrance.locationAndNames } as StadiumInfo,
    '80 000'
  ),

  new Match(
    '23.06.1998',
    tournamentStages.groupB,
    ['Chile', 'Cameroon'],
    [[1, 1], [], []],
    ['J.Sierra'],
    ['20'],
    ['H.P.Mboma'],
    ['56'],
    { ...stadiumsStore.France?.beaujoire.locationAndNames } as StadiumInfo,
    '35 500'
  ),

  new Match(
    '12.06.1998',
    tournamentStages.groupC,
    ['Denmark', 'Saudi Arabia'],
    [[1, 0], [], []],
    ['M.Rieper'],
    ['69'],
    [],
    [],
    { ...stadiumsStore.France?.felixBollaert.locationAndNames } as StadiumInfo,
    '38 100'
  ),

  new Match(
    '12.06.1998',
    tournamentStages.groupC,
    ['France', 'South Africa'],
    [[3, 0], [], []],
    ['C.Dugarry', 'P.Issa', 'T.Henry'],
    ['36', '77(o.g.)', '90+2'],
    [],
    [],
    { ...stadiumsStore.France?.velodrome.locationAndNames } as StadiumInfo,
    '55 000'
  ),

  new Match(
    '18.06.1998',
    tournamentStages.groupC,
    ['South Africa', 'Denmark'],
    [[1, 1], [], []],
    ['B.McCarthy'],
    ['51'],
    ['A.Nielsen'],
    ['12'],
    { ...stadiumsStore.France?.toulouse.locationAndNames } as StadiumInfo,
    '33 500'
  ),

  new Match(
    '18.06.1998',
    tournamentStages.groupC,
    ['France', 'Saudi Arabia'],
    [[4, 0], [], []],
    ['T.Henry', 'D.Trezeguet', 'B.Lizarazu'],
    ['37, 78', '68', '85'],
    [],
    [],
    { ...stadiumsStore.France?.stadeDeFrance.locationAndNames } as StadiumInfo,
    '80 000'
  ),

  new Match(
    '24.06.1998',
    tournamentStages.groupC,
    ['France', 'Denmark'],
    [[2, 1], [], []],
    ['Y.Djorkaeff', 'E.Petit'],
    ['12(p)', '56'],
    ['M.Laudrup'],
    ['42(p)'],
    { ...stadiumsStore.France?.gerland.locationAndNames } as StadiumInfo,
    '39 100'
  ),

  new Match(
    '24.06.1998',
    tournamentStages.groupC,
    ['South Africa', 'Saudi Arabia'],
    [[2, 2], [], []],
    ['S.Bartlett'],
    ['18, 90+3(p)'],
    ['Sami Al Jaber', 'Youssef Al Tunayan'],
    ['45+2(p)', '74(p)'],
    { ...stadiumsStore.France?.lescure.locationAndNames } as StadiumInfo,
    '31 800'
  ),

  new Match(
    '12.06.1998',
    tournamentStages.groupD,
    ['Paraguay', 'Bulgaria'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.France?.mosson.locationAndNames } as StadiumInfo,
    '29 800'
  ),

  new Match(
    '13.06.1998',
    tournamentStages.groupD,
    ['Nigeria', 'Spain'],
    [[3, 2], [], []],
    ['M.Adepoju', 'A.Zubizarreta', 'S.Oliseh'],
    ['24', '73(o.g.)', '78'],
    ['F.Hierro', 'Raúl'],
    ['21', '47'],
    { ...stadiumsStore.France?.beaujoire.locationAndNames } as StadiumInfo,
    '35 500'
  ),

  new Match(
    '19.06.1998',
    tournamentStages.groupD,
    ['Nigeria', 'Bulgaria'],
    [[1, 0], [], []],
    ['V.Ikpeba'],
    ['28'],
    [],
    [],
    { ...stadiumsStore.France?.parcDesPrinces.locationAndNames } as StadiumInfo,
    '45 500'
  ),

  new Match(
    '19.06.1998',
    tournamentStages.groupD,
    ['Spain', 'Paraguay'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.France?.geoffroyGuichard.locationAndNames } as StadiumInfo,
    '30 600'
  ),

  new Match(
    '24.06.1998',
    tournamentStages.groupD,
    ['Paraguay', 'Nigeria'],
    [[3, 1], [], []],
    ['C.Ayala', 'M.Benitez', 'J.Cardozo'],
    ['1', '58', '86'],
    ['W.Oruma'],
    ['11'],
    { ...stadiumsStore.France?.toulouse.locationAndNames } as StadiumInfo,
    '33 500'
  ),

  new Match(
    '24.06.1998',
    tournamentStages.groupD,
    ['Spain', 'Bulgaria'],
    [[6, 1], [], []],
    ['F.Hierro', 'Luis Enrique', 'F.Morientes', 'G.Bachev', 'Kiko'],
    ['6(p)', '18', '55, 81', '88(o.g.)', '90+4'],
    ['E.Kostadinov'],
    ['58'],
    { ...stadiumsStore.France?.felixBollaert.locationAndNames } as StadiumInfo,
    '38 100'
  ),

  new Match(
    '13.06.1998',
    tournamentStages.groupE,
    ['Mexico', 'Korea Republic'],
    [[3, 1], [], []],
    ['R.Pelaez', 'Luis Hernandez'],
    ['50', '75, 84'],
    ['Ha Seok-ju'],
    ['27'],
    { ...stadiumsStore.France?.gerland.locationAndNames } as StadiumInfo,
    '39 100'
  ),

  new Match(
    '13.06.1998',
    tournamentStages.groupE,
    ['Netherlands', 'Belgium'],
    [[0, 0], [], []],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.France?.stadeDeFrance.locationAndNames } as StadiumInfo,
    '77 000'
  ),

  new Match(
    '20.06.1998',
    tournamentStages.groupE,
    ['Belgium', 'Mexico'],
    [[2, 2], [], []],
    ['M.Wilmots'],
    ['42, 47'],
    ['García Aspe', 'C.Blanco'],
    ['55(p)', '62'],
    { ...stadiumsStore.France?.lescure.locationAndNames } as StadiumInfo,
    '31 800'
  ),

  new Match(
    '20.06.1998',
    tournamentStages.groupE,
    ['Netherlands', 'Korea Republic'],
    [[5, 0], [], []],
    ['P.Cocu', 'M.Overmars', 'D.Bergkamp', 'P. van Hooijdonk', 'R. de Boer'],
    ['37', '41', '71', '80', '83'],
    [],
    [],
    { ...stadiumsStore.France?.velodrome.locationAndNames } as StadiumInfo,
    '55 000'
  ),

  new Match(
    '25.06.1998',
    tournamentStages.groupE,
    ['Netherlands', 'Mexico'],
    [[2, 2], [], []],
    ['P.Cocu', 'R. de Boer'],
    ['4', '18'],
    ['R.Pelaez', 'Luis Hernandez'],
    ['75', '90+4'],
    { ...stadiumsStore.France?.geoffroyGuichard.locationAndNames } as StadiumInfo,
    '30 600'
  ),

  new Match(
    '25.06.1998',
    tournamentStages.groupE,
    ['Belgium', 'Korea Republic'],
    [[1, 1], [], []],
    ['L.Nilis'],
    ['7'],
    ['Yoo Sang-chul'],
    ['72'],
    { ...stadiumsStore.France?.parcDesPrinces.locationAndNames } as StadiumInfo,
    '45 500'
  ),

  new Match(
    '14.06.1998',
    tournamentStages.groupF,
    ['Serbia', 'Iran'],
    [[1, 0], [], []],
    ['S.Mihajlović'],
    ['73'],
    [],
    [],
    { ...stadiumsStore.France?.geoffroyGuichard.locationAndNames } as StadiumInfo,
    '30 600'
  ),

  new Match(
    '15.06.1998',
    tournamentStages.groupF,
    ['Germany', 'United States'],
    [[2, 0], [], []],
    ['A.Möller', 'J.Klinsmann'],
    ['9', '65'],
    [],
    [],
    { ...stadiumsStore.France?.parcDesPrinces.locationAndNames } as StadiumInfo,
    '45 500'
  ),

  new Match(
    '21.06.1998',
    tournamentStages.groupF,
    ['Germany', 'Serbia'],
    [[2, 2], [], []],
    ['S.Mihajlović', 'O.Bierhoff'],
    ['72(o.g.)', '78'],
    ['P.Mijatović', 'D.Stojković'],
    ['13', '52'],
    { ...stadiumsStore.France?.felixBollaert.locationAndNames } as StadiumInfo,
    '38 100'
  ),

  new Match(
    '21.06.1998',
    tournamentStages.groupF,
    ['Iran', 'United States'],
    [[2, 1], [], []],
    ['H.Estili', 'M.Mahdavikia'],
    ['40', '84'],
    ['B.McBride'],
    ['87'],
    { ...stadiumsStore.France?.gerland.locationAndNames } as StadiumInfo,
    '39 100'
  ),

  new Match(
    '25.06.1998',
    tournamentStages.groupF,
    ['Germany', 'Iran'],
    [[2, 0], [], []],
    ['O.Bierhoff', 'J.Klinsmann'],
    ['50', '57'],
    [],
    [],
    { ...stadiumsStore.France?.mosson.locationAndNames } as StadiumInfo,
    '29 800'
  ),

  new Match(
    '25.06.1998',
    tournamentStages.groupF,
    ['Serbia', 'United States'],
    [[1, 0], [], []],
    ['S.Komljenović'],
    ['4'],
    [],
    [],
    { ...stadiumsStore.France?.beaujoire.locationAndNames } as StadiumInfo,
    '35 500'
  ),

  new Match(
    '15.06.1998',
    tournamentStages.groupG,
    ['England', 'Tunisia'],
    [[2, 0], [], []],
    ['A.Shearer', 'P.Scholes'],
    ['42', '89'],
    [],
    [],
    { ...stadiumsStore.France?.velodrome.locationAndNames } as StadiumInfo,
    '54 587'
  ),

  new Match(
    '15.06.1998',
    tournamentStages.groupG,
    ['Romania', 'Colombia'],
    [[1, 0], [], []],
    ['B.Ilie'],
    ['45+1'],
    [],
    [],
    { ...stadiumsStore.France?.gerland.locationAndNames } as StadiumInfo,
    '39 100'
  ),

  new Match(
    '22.06.1998',
    tournamentStages.groupG,
    ['Colombia', 'Tunisia'],
    [[1, 0], [], []],
    ['L.Preciado'],
    ['83'],
    [],
    [],
    { ...stadiumsStore.France?.mosson.locationAndNames } as StadiumInfo,
    '29 800'
  ),

  new Match(
    '22.06.1998',
    tournamentStages.groupG,
    ['Romania', 'England'],
    [[2, 1], [], []],
    ['V.Moldovan', 'D.Petrescu'],
    ['46', '90'],
    ['M.Owen'],
    ['81'],
    { ...stadiumsStore.France?.toulouse.locationAndNames } as StadiumInfo,
    '33 500'
  ),

  new Match(
    '26.06.1998',
    tournamentStages.groupG,
    ['England', 'Colombia'],
    [[2, 0], [], []],
    ['D.Anderton', 'D.Beckham'],
    ['20', '29'],
    [],
    [],
    { ...stadiumsStore.France?.felixBollaert.locationAndNames } as StadiumInfo,
    '38 100'
  ),

  new Match(
    '26.06.1998',
    tournamentStages.groupG,
    ['Romania', 'Tunisia'],
    [[1, 1], [], []],
    ['V.Moldovan'],
    ['20'],
    ['S.Souayah'],
    ['12(p)'],
    { ...stadiumsStore.France?.stadeDeFrance.locationAndNames } as StadiumInfo,
    '77 000'
  ),

  new Match(
    '14.06.1998',
    tournamentStages.groupH,
    ['Argentina', 'Japan'],
    [[1, 0], [], []],
    ['G.Batistuta'],
    ['28'],
    [],
    [],
    { ...stadiumsStore.France?.toulouse.locationAndNames } as StadiumInfo,
    '33 500'
  ),

  new Match(
    '14.06.1998',
    tournamentStages.groupH,
    ['Croatia', 'Jamaica'],
    [[3, 1], [], []],
    ['M.Stanić', 'R.Prosinečki', 'D.Šuker'],
    ['27', '53', '69'],
    ['R.Earle'],
    ['45'],
    { ...stadiumsStore.France?.felixBollaert.locationAndNames } as StadiumInfo,
    '38 100'
  ),

  new Match(
    '20.06.1998',
    tournamentStages.groupH,
    ['Croatia', 'Japan'],
    [[1, 0], [], []],
    ['D.Šuker'],
    ['77'],
    [],
    [],
    { ...stadiumsStore.France?.beaujoire.locationAndNames } as StadiumInfo,
    '35 500'
  ),

  new Match(
    '21.06.1998',
    tournamentStages.groupH,
    ['Argentina', 'Jamaica'],
    [[5, 0], [], []],
    ['A.Ortega', 'G.Batistuta'],
    ['32, 55', '73, 78, 83(p)'],
    [],
    [],
    { ...stadiumsStore.France?.parcDesPrinces.locationAndNames } as StadiumInfo,
    '45 500'
  ),

  new Match(
    '26.06.1998',
    tournamentStages.groupH,
    ['Argentina', 'Croatia'],
    [[1, 0], [], []],
    ['M.Pineda'],
    ['36'],
    [],
    [],
    { ...stadiumsStore.France?.lescure.locationAndNames } as StadiumInfo,
    '31 800'
  ),

  new Match(
    '26.06.1998',
    tournamentStages.groupH,
    ['Jamaica', 'Japan'],
    [[2, 1], [], []],
    ['T.Whitmore'],
    ['39, 54'],
    ['M.Nakayama'],
    ['74'],
    { ...stadiumsStore.France?.gerland.locationAndNames } as StadiumInfo,
    '39 100'
  ),

  new Match(
    '27.06.1998',
    tournamentStages.roundOf16,
    ['Italy', 'Norway'],
    [[1, 0], [], []],
    ['C.Vieri'],
    ['18'],
    [],
    [],
    { ...stadiumsStore.France?.velodrome.locationAndNames } as StadiumInfo,
    '55 000'
  ),

  new Match(
    '27.06.1998',
    tournamentStages.roundOf16,
    ['Brazil', 'Chile'],
    [[4, 1], [], []],
    ['Cesar Sampaio', 'Ronaldo'],
    ['11, 26', '45+3(p), 72'],
    ['Marcelo Salas'],
    ['70'],
    { ...stadiumsStore.France?.parcDesPrinces.locationAndNames } as StadiumInfo,
    '45 500'
  ),

  new Match(
    '28.06.1998',
    tournamentStages.roundOf16,
    ['France', 'Paraguay'],
    [[0, 0], [1, 0], []],
    ['L.Blanc'],
    ['114'],
    [],
    [],
    { ...stadiumsStore.France?.felixBollaert.locationAndNames } as StadiumInfo,
    '31 800'
  ),

  new Match(
    '28.06.1998',
    tournamentStages.roundOf16,
    ['Denmark', 'Nigeria'],
    [[4, 1], [], []],
    ['P.Møller', 'B.Laudrup', 'E.Sand', 'T.Helveg'],
    ['3', '12', '58', '76'],
    ['T.Babangida'],
    ['77'],
    { ...stadiumsStore.France?.stadeDeFrance.locationAndNames } as StadiumInfo,
    '77 000'
  ),

  new Match(
    '29.06.1998',
    tournamentStages.roundOf16,
    ['Germany', 'Mexico'],
    [[2, 1], [], []],
    ['J.Klinsmann', 'O.Bierhoff'],
    ['74', '86'],
    ['Luis Hernandez'],
    ['47'],
    { ...stadiumsStore.France?.mosson.locationAndNames } as StadiumInfo,
    '29 800'
  ),

  new Match(
    '29.06.1998',
    tournamentStages.roundOf16,
    ['Netherlands', 'Serbia'],
    [[2, 1], [], []],
    ['D.Bergkamp', 'E.Davids'],
    ['38', '90+2'],
    ['S.Komljenović'],
    ['48'],
    { ...stadiumsStore.France?.toulouse.locationAndNames } as StadiumInfo,
    '33 500'
  ),

  new Match(
    '30.06.1998',
    tournamentStages.roundOf16,
    ['Croatia', 'Romania'],
    [[1, 0], [], []],
    ['D.Šuker'],
    ['45+2(p)'],
    [],
    [],
    { ...stadiumsStore.France?.lescure.locationAndNames } as StadiumInfo,
    '31 800'
  ),

  new Match(
    '30.06.1998',
    tournamentStages.roundOf16,
    ['Argentina', 'England'],
    [
      [2, 2],
      [0, 0],
      [4, 3],
    ],
    ['G.Batistuta', 'J.Zanetti'],
    ['5(p)', '45+1'],
    ['A.Shearer', 'M.Owen'],
    ['9(p)', '16'],
    { ...stadiumsStore.France?.geoffroyGuichard.locationAndNames } as StadiumInfo,
    '30 600'
  ),

  new Match(
    '03.07.1998',
    tournamentStages.quarterFinal,
    ['France', 'Italy'],
    [
      [0, 0],
      [0, 0],
      [4, 3],
    ],
    [],
    [],
    [],
    [],
    { ...stadiumsStore.France?.stadeDeFrance.locationAndNames } as StadiumInfo,
    '77 000'
  ),

  new Match(
    '03.07.1998',
    tournamentStages.quarterFinal,
    ['Brazil', 'Denmark'],
    [[3, 2], [], []],
    ['Bebeto', 'Rivaldo'],
    ['10', '25, 59'],
    ['M.Jørgensen', 'B.Laudrup'],
    ['2', '50'],
    { ...stadiumsStore.France?.beaujoire.locationAndNames } as StadiumInfo,
    '35 500'
  ),

  new Match(
    '04.07.1998',
    tournamentStages.quarterFinal,
    ['Netherlands', 'Argentina'],
    [[2, 1], [], []],
    ['P.Kluivert', 'D.Bergkamp'],
    ['12', '90'],
    ['Claudio López'],
    ['17'],
    { ...stadiumsStore.France?.velodrome.locationAndNames } as StadiumInfo,
    '55 000'
  ),

  new Match(
    '04.07.1998',
    tournamentStages.quarterFinal,
    ['Croatia', 'Germany'],
    [[3, 0], [], []],
    ['R.Jarni', 'G.Vlaović', 'D.Šuker'],
    ['45+3', '80', '85'],
    [],
    [],
    { ...stadiumsStore.France?.gerland.locationAndNames } as StadiumInfo,
    '39 100'
  ),

  new Match(
    '07.07.1998',
    tournamentStages.semiFinal,
    ['Brazil', 'Netherlands'],
    [
      [1, 1],
      [0, 0],
      [4, 2],
    ],
    ['Ronaldo'],
    ['46'],
    ['P.Kluivert'],
    ['87'],
    { ...stadiumsStore.France?.velodrome.locationAndNames } as StadiumInfo,
    '54 000'
  ),

  new Match(
    '08.07.1998',
    tournamentStages.semiFinal,
    ['France', 'Croatia'],
    [[2, 1], [], []],
    ['L.Thuram'],
    ['47, 70'],
    ['D.Šuker'],
    ['46'],
    { ...stadiumsStore.France?.stadeDeFrance.locationAndNames } as StadiumInfo,
    '76 000'
  ),

  new Match(
    '11.07.1998',
    tournamentStages.thirdPlace,
    ['Croatia', 'Netherlands'],
    [[2, 1], [], []],
    ['R.Prosinečki', 'D.Šuker'],
    ['14', '36'],
    ['B.Zenden'],
    ['22'],
    { ...stadiumsStore.France?.parcDesPrinces.locationAndNames } as StadiumInfo,
    '45 500'
  ),

  new Match(
    '12.07.1998',
    tournamentStages.final,
    ['France', 'Brazil'],
    [[3, 0], [], []],
    ['Z.Zidane', 'E.Petit'],
    ['27, 45+1', '90+3'],
    [],
    [],
    { ...stadiumsStore.France?.stadeDeFrance.locationAndNames } as StadiumInfo,
    '75 000'
  ),
]
