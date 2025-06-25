import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1938: MatchInfo[] = [
  new Match(
    '04.06.1938',
    tournamentStages.roundOf16,
    ['Switzerland', 'Germany'],
    [[1, 1], [0, 0], []],
    ['Abegglen'],
    ['43'],
    ['Gauchel'],
    ['29'],
    { ...stadiumsStore.France?.parcDesPrinces.locationAndNames } as StadiumInfo,
    '27 152'
  ),

  new Match(
    '05.06.1938',
    tournamentStages.roundOf16,
    ['Hungary', 'Indonesia'],
    [[6, 0], [], []],
    ['Kohut', 'Toldi', 'G.Sárosi', 'Zsengellér'],
    ['13', '15', '28, 89', '35, 76'],
    [],
    [],
    { ...stadiumsStore.France?.velodromeReims.locationAndNames } as StadiumInfo,
    '9 000'
  ),

  new Match(
    '05.06.1938',
    tournamentStages.roundOf16,
    ['Sweden', ''],
    [[], [], []],
    [],
    [],
    [],
    [],
    { names: [{}], city: '', country: '' } as StadiumInfo,
    ''
  ),

  new Match(
    '05.06.1938',
    tournamentStages.roundOf16,
    ['Cuba', 'Romania'],
    [[2, 2], [1, 1], []],
    ['Socorro', 'Magriñá'],
    ['44, 103', '69'],
    ['Bindea', 'Barátky', 'Dobay'],
    ['35', '88', '105'],
    { ...stadiumsStore.France?.toec.locationAndNames } as StadiumInfo,
    '7 000'
  ),

  new Match(
    '05.06.1938',
    tournamentStages.roundOf16,
    ['France', 'Belgium'],
    [[3, 1], [], []],
    ['Veinante', 'Nicolas'],
    ['1', '16, 69'],
    ['Isemborghs'],
    ['38'],
    { ...stadiumsStore.France?.colombes.locationAndNames } as StadiumInfo,
    '30 454'
  ),

  new Match(
    '05.06.1938',
    tournamentStages.roundOf16,
    ['Italy', 'Norway'],
    [[1, 1], [1, 0], []],
    ['Ferraris', 'Piola'],
    ['2', '94'],
    ['Brustad'],
    ['83'],
    { ...stadiumsStore.France?.velodrome.locationAndNames } as StadiumInfo,
    '19 000'
  ),

  new Match(
    '05.06.1938',
    tournamentStages.roundOf16,
    ['Brazil', 'Poland'],
    [[4, 4], [2, 1], []],
    ['Leônidas', 'Romeu', 'Perácio'],
    ['18, 93, 104', '25', '44, 71'],
    ['Scherfke', 'Wilimowski'],
    ['23(p)', '53, 59, 89, 118'],
    { ...stadiumsStore.France?.meinau.locationAndNames } as StadiumInfo,
    '13 452'
  ),

  new Match(
    '05.06.1938',
    tournamentStages.roundOf16,
    ['Czechoslovakia', 'Netherlands'],
    [[0, 0], [3, 0], []],
    ['Košťálek', 'Zeman', 'Nejedlý'],
    ['93', '111', '118'],
    [],
    [],
    { ...stadiumsStore.France?.municipalHavre.locationAndNames } as StadiumInfo,
    '11 000'
  ),

  new Match(
    '09.06.1938',
    tournamentStages.roundOf16,
    ['Switzerland', 'Germany'],
    [[4, 2], [], []],
    ['Walaschek', 'Bickel', 'Abegglen'],
    ['42', '64', '75, 78'],
    ['Hahnemann', 'Lörtscher'],
    ['8', '22(o.g.)'],
    { ...stadiumsStore.France?.parcDesPrinces.locationAndNames } as StadiumInfo,
    '20 025'
  ),

  new Match(
    '09.06.1938',
    tournamentStages.roundOf16,
    ['Cuba', 'Romania'],
    [[2, 1], [], []],
    ['Socorro', 'Fernández'],
    ['51', '57'],
    ['Dobay'],
    ['35'],
    { ...stadiumsStore.France?.toec.locationAndNames } as StadiumInfo,
    '8 000'
  ),

  new Match(
    '12.06.1938',
    tournamentStages.quarterfinal,
    ['Hungary', 'Switzerland'],
    [[2, 0], [], []],
    ['G.Sárosi', 'Zsengellér'],
    ['40', '89'],
    [],
    [],
    { ...stadiumsStore.France?.boucquey.locationAndNames } as StadiumInfo,
    '15 000'
  ),

  new Match(
    '12.06.1938',
    tournamentStages.quarterfinal,
    ['Sweden', 'Cuba'],
    [[8, 0], [], []],
    ['H.Andersson', 'Wetterström', 'Keller', 'Nyberg'],
    ['9, 81, 89', '22, 37, 44', '80', '84'],
    [],
    [],
    { ...stadiumsStore.France?.fortCarre.locationAndNames } as StadiumInfo,
    '7 000'
  ),

  new Match(
    '12.06.1938',
    tournamentStages.quarterfinal,
    ['Italy', 'France'],
    [[3, 1], [], []],
    ['Colaussi', 'Piola'],
    ['9', '51, 72'],
    ['Heisserer'],
    ['10'],
    { ...stadiumsStore.France?.colombes.locationAndNames } as StadiumInfo,
    '58 455'
  ),

  new Match(
    '12.06.1938',
    tournamentStages.quarterfinal,
    ['Brazil', 'Czechoslovakia'],
    [[1, 1], [0, 0], []],
    ['Leônidas'],
    ['30'],
    ['Nejedlý'],
    ['65(p)'],
    { ...stadiumsStore.France?.lescure.locationAndNames } as StadiumInfo,
    '22 021'
  ),

  new Match(
    '14.06.1938',
    tournamentStages.quarterfinal,
    ['Brazil', 'Czechoslovakia'],
    [[2, 1], [], []],
    ['Leônidas', 'Roberto'],
    ['57', '62'],
    ['Kopecký'],
    ['25'],
    { ...stadiumsStore.France?.lescure.locationAndNames } as StadiumInfo,
    '18 141'
  ),

  new Match(
    '16.06.1938',
    tournamentStages.semifinal,
    ['Hungary', 'Sweden'],
    [[5, 1], [], []],
    ['Jacobsson', 'Titkos', 'Zsengellér', 'G.Sárosi'],
    ['19(o.g.)', '37', '39, 85', '65'],
    ['Nyberg'],
    ['1'],
    { ...stadiumsStore.France?.parcDesPrinces.locationAndNames } as StadiumInfo,
    '20 000'
  ),

  new Match(
    '16.06.1938',
    tournamentStages.semifinal,
    ['Italy', 'Brazil'],
    [[2, 1], [], []],
    ['Colaussi', 'Meazza'],
    ['51', '60(p)'],
    ['Romeu'],
    ['87'],
    { ...stadiumsStore.France?.velodrome.locationAndNames } as StadiumInfo,
    '33 000'
  ),

  new Match(
    '19.06.1938',
    tournamentStages.thirdPlace,
    ['Brazil', 'Sweden'],
    [[4, 2], [], []],
    ['Romeu', 'Leônidas', 'Perácio'],
    ['44', '63, 74', '80'],
    ['Jonasson', 'Nyberg'],
    ['28', '38'],
    { ...stadiumsStore.France?.lescure.locationAndNames } as StadiumInfo,
    '12 000'
  ),

  new Match(
    '19.06.1938',
    tournamentStages.final,
    ['Italy', 'Hungary'],
    [[4, 2], [], []],
    ['Colaussi', 'Piola'],
    ['6, 35', '16, 82'],
    ['Titkos', 'G.Sárosi'],
    ['8', '70'],
    { ...stadiumsStore.France?.colombes.locationAndNames } as StadiumInfo,
    '45 000'
  ),
]
