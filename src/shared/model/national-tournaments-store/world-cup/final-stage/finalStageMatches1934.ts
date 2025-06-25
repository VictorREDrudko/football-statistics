import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore'
import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { MatchInfo, StadiumInfo } from '@/shared/model/tournament-config/class-match/types'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const finalStageMatches1934: MatchInfo[] = [
  new Match(
    '27.05.1934',
    tournamentStages.roundOf16,
    ['Spain', 'Brazil'],
    [[3, 1], [], []],
    ['Iraragorri', 'Lángara'],
    ['18(p), 25', '29'],
    ['Leônidas'],
    ['55'],
    { ...stadiumsStore.Italy?.ferraris.locationAndNames } as StadiumInfo,
    '21 000'
  ),

  new Match(
    '27.05.1934',
    tournamentStages.roundOf16,
    ['Hungary', 'Egypt'],
    [[4, 2], [], []],
    ['Teleki', 'Toldi', 'Vincze'],
    ['11', '31, 61', '53'],
    ['Fawzi'],
    ['35, 39'],
    { ...stadiumsStore.Italy?.ascarelli.locationAndNames } as StadiumInfo,
    '9 000'
  ),

  new Match(
    '27.05.1934',
    tournamentStages.roundOf16,
    ['Switzerland', 'Netherlands'],
    [[3, 2], [], []],
    ['Kielholz', 'Abegglen'],
    ['7, 43', '66'],
    ['Smit', 'Vente'],
    ['29', '69'],
    { ...stadiumsStore.Italy?.sanSiro.locationAndNames } as StadiumInfo,
    '33 000'
  ),

  new Match(
    '27.05.1934',
    tournamentStages.roundOf16,
    ['Italy', 'United States'],
    [[7, 1], [], []],
    ['Schiavio', 'Orsi', 'Ferrari', 'Meazza'],
    ['18, 29, 64', '20, 69', '63', '90'],
    ['Donelli'],
    ['57'],
    { ...stadiumsStore.Italy?.nazionalePNF.locationAndNames } as StadiumInfo,
    '25 000'
  ),

  new Match(
    '27.05.1934',
    tournamentStages.roundOf16,
    ['Czechoslovakia', 'Romania'],
    [[2, 1], [], []],
    ['Puč', 'Nejedlý'],
    ['50', '67'],
    ['Dobay'],
    ['11'],
    { ...stadiumsStore.Italy?.dallAra.locationAndNames } as StadiumInfo,
    '9 000'
  ),

  new Match(
    '27.05.1934',
    tournamentStages.roundOf16,
    ['Sweden', 'Argentina'],
    [[3, 2], [], []],
    ['Jonasson', 'Kroon'],
    ['9', '79'],
    ['Belis', 'Galateo'],
    ['4', '48'],
    { ...stadiumsStore.Italy?.dallAra.locationAndNames } as StadiumInfo,
    '14 000'
  ),

  new Match(
    '27.05.1934',
    tournamentStages.roundOf16,
    ['Austria', 'France'],
    [[1, 1], [2, 1], []],
    ['Sindelar', 'Schall', 'Bican'],
    ['44', '93', '109'],
    ['Nicolas', 'Verriest'],
    ['18', '116(p)'],
    { ...stadiumsStore.Italy?.torino.locationAndNames } as StadiumInfo,
    '16 000'
  ),

  new Match(
    '27.05.1934',
    tournamentStages.roundOf16,
    ['Germany', 'Belgium'],
    [[5, 2], [], []],
    ['Kobierski', 'Siffling', 'Conen'],
    ['25', '49', '66, 70, 87'],
    ['Voorhoof'],
    ['29, 43'],
    { ...stadiumsStore.Italy?.franchi.locationAndNames } as StadiumInfo,
    '8 000'
  ),

  new Match(
    '31.05.1934',
    tournamentStages.quarterfinal,
    ['Austria', 'Hungary'],
    [[2, 1], [], []],
    ['Horvath', 'Zischek'],
    ['8', '51'],
    ['Sárosi'],
    ['60(p)'],
    { ...stadiumsStore.Italy?.dallAra.locationAndNames } as StadiumInfo,
    '23 000'
  ),

  new Match(
    '31.05.1934',
    tournamentStages.quarterfinal,
    ['Italy', 'Spain'],
    [[1, 1], [0, 0], []],
    ['Ferrari'],
    ['44'],
    ['Regueiro'],
    ['30'],
    { ...stadiumsStore.Italy?.franchi.locationAndNames } as StadiumInfo,
    '35 000'
  ),

  new Match(
    '31.05.1934',
    tournamentStages.quarterfinal,
    ['Germany', 'Sweden'],
    [[2, 1], [], []],
    ['Hohmann'],
    ['60, 63'],
    ['Dunker'],
    ['82'],
    { ...stadiumsStore.Italy?.sanSiro.locationAndNames } as StadiumInfo,
    '3 000'
  ),

  new Match(
    '31.05.1934',
    tournamentStages.quarterfinal,
    ['Czechoslovakia', 'Switzerland'],
    [[3, 2], [], []],
    ['Svoboda', 'Sobotka', 'Nejedlý'],
    ['24', '49', '82'],
    ['Kielholz', 'Jäggi'],
    ['18', '78'],
    { ...stadiumsStore.Italy?.torino.locationAndNames } as StadiumInfo,
    '12 000'
  ),

  new Match(
    '01.06.1934',
    tournamentStages.quarterfinal,
    ['Italy', 'Spain'],
    [[1, 0], [], []],
    ['Meazza'],
    ['11'],
    [],
    [],
    { ...stadiumsStore.Italy?.franchi.locationAndNames } as StadiumInfo,
    '43 000'
  ),

  new Match(
    '03.06.1934',
    tournamentStages.semifinal,
    ['Italy', 'Austria'],
    [[1, 0], [], []],
    ['Guaita'],
    ['19'],
    [],
    [],
    { ...stadiumsStore.Italy?.sanSiro.locationAndNames } as StadiumInfo,
    '35 000'
  ),

  new Match(
    '03.06.1934',
    tournamentStages.semifinal,
    ['Czechoslovakia', 'Germany'],
    [[3, 1], [], []],
    ['Nejedlý'],
    ['21, 69, 80'],
    ['Noack'],
    ['62'],
    { ...stadiumsStore.Italy?.nazionalePNF.locationAndNames } as StadiumInfo,
    '15 000'
  ),

  new Match(
    '07.06.1934',
    tournamentStages.thirdPlace,
    ['Germany', 'Austria'],
    [[3, 2], [], []],
    ['Lehner', 'Conen'],
    ['1, 42', '27'],
    ['Horvath', 'Sesta'],
    ['28', '54'],
    { ...stadiumsStore.Italy?.ascarelli.locationAndNames } as StadiumInfo,
    '7 000'
  ),

  new Match(
    '07.06.1934',
    tournamentStages.final,
    ['Italy', 'Czechoslovakia'],
    [[1, 1], [1, 0], []],
    ['Orsi', 'Schiavio'],
    ['81', '95'],
    ['Puč'],
    ['71'],
    { ...stadiumsStore.Italy?.nazionalePNF.locationAndNames } as StadiumInfo,
    '55 000'
  ),
]
