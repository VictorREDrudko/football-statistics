import { Match } from '@/shared/model/tournament-config/class-match/Match'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const worldCupFinalStage1930 = [
  new Match(
    '13.07.1930',
    tournamentStages.group[1],
    ['France', 'Mexico'],
    [[4, 1], [], []],
    ['L. Laurent', 'Langiller', 'Maschinot'],
    ['19', '40', '43, 87'],
    ['Carreño'],
    ['80'],
    stadiumsData.Uruguay.pocitos,
    '4 444'
  ),
  {
    id: v1(),
    date: '15.07.1930',
    stage: stage.group[1],
    teams: ['Argentina', 'France'],
    score: [[1, 0], [], []],
    goals: [
      { playersScoredGoal: ['Monti'], timeGoals: ['81'] },
      { playersScoredGoal: [], timeGoals: [] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.parqueCentral,
      attendance: '23 409',
    },
  },
  {
    id: v1(),
    date: '16.07.1930',
    stage: stage.group[1],
    teams: ['Chile', 'Mexico'],
    score: [[3, 0], [], []],
    goals: [
      {
        playersScoredGoal: ['Vidal', 'M. Rosas'],
        timeGoals: ['1, 65', '52(o.g.)'],
      },
      { playersScoredGoal: [], timeGoals: [] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.parqueCentral,
      attendance: '9 249',
    },
  },
  {
    id: v1(),
    date: '19.07.1930',
    stage: stage.group[1],
    teams: ['Chile', 'France'],
    score: [[1, 0], [], []],
    goals: [
      { playersScoredGoal: ['Subiabre'], timeGoals: ['67'] },
      { playersScoredGoal: [], timeGoals: [] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.centenario,
      attendance: '2 000',
    },
  },
  {
    id: v1(),
    date: '19.07.1930',
    stage: stage.group[1],
    teams: ['Argentina', 'Mexico'],
    score: [[6, 3], [], []],
    goals: [
      {
        playersScoredGoal: ['Stábile', 'Zumelzú', 'Varallo'],
        timeGoals: ['8, 17, 80', '12, 55', '53'],
      },
      {
        playersScoredGoal: ['M. Rosas', 'Gayón'],
        timeGoals: ['42(p), 65', '75'],
      },
    ],
    stadium: {
      ...stadiumsData.Uruguay.centenario,
      attendance: '42 100',
    },
  },
  {
    id: v1(),
    date: '22.07.1930',
    stage: stage.group[1],
    teams: ['Argentina', 'Chile'],
    score: [[3, 1], [], []],
    goals: [
      {
        playersScoredGoal: ['Stábile', 'M. Evaristo'],
        timeGoals: ['12, 13', '51'],
      },
      { playersScoredGoal: ['Subiabre'], timeGoals: ['15'] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.centenario,
      attendance: '41 459',
    },
  },
  {
    id: v1(),
    date: '14.07.1930',
    stage: stage.group[2],
    teams: ['Yugoslavia', 'Brazil'],
    score: [[2, 1], [], []],
    goals: [
      { playersScoredGoal: ['Tirnanić', 'Bek'], timeGoals: ['21', '30'] },
      { playersScoredGoal: ['Preguinho'], timeGoals: ['62'] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.parqueCentral,
      attendance: '24 059',
    },
  },
  {
    id: v1(),
    date: '17.07.1930',
    stage: stage.group[2],
    teams: ['Yugoslavia', 'Bolivia'],
    score: [[4, 0], [], []],
    goals: [
      {
        playersScoredGoal: ['Bek', 'Marjanović', 'Vujadinović'],
        timeGoals: ['60, 67', '65', '85'],
      },
      { playersScoredGoal: [], timeGoals: [] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.parqueCentral,
      attendance: '18 306',
    },
  },
  {
    id: v1(),
    date: '20.07.1930',
    stage: stage.group[2],
    teams: ['Brazil', 'Bolivia'],
    score: [[4, 0], [], []],
    goals: [
      {
        playersScoredGoal: ['Moderato', 'Preguinho'],
        timeGoals: ['37, 73', '57, 83'],
      },
      { playersScoredGoal: [], timeGoals: [] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.centenario,
      attendance: '25 466',
    },
  },
  {
    id: v1(),
    date: '14.07.1930',
    stage: stage.group[3],
    teams: ['Romania', 'Peru'],
    score: [[3, 1], [], []],
    goals: [
      {
        playersScoredGoal: ['Deșu', 'Stanciu', 'Kovács'],
        timeGoals: ['1', '79', '89'],
      },
      { playersScoredGoal: ['De Souza'], timeGoals: ['75'] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.pocitos,
      attendance: '2 549',
    },
  },
  {
    id: v1(),
    date: '18.07.1930',
    stage: stage.group[3],
    teams: ['Uruguay', 'Peru'],
    score: [[1, 0], [], []],
    goals: [
      { playersScoredGoal: ['Vargas Peña'], timeGoals: ['40'] },
      { playersScoredGoal: [], timeGoals: [] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.centenario,
      attendance: '57 735',
    },
  },
  {
    id: v1(),
    date: '21.07.1930',
    stage: stage.group[3],
    teams: ['Uruguay', 'Romania'],
    score: [[4, 0], [], []],
    goals: [
      {
        playersScoredGoal: ['Dorado', 'Scarone', 'Anselmo', 'Cea'],
        timeGoals: ['7', '26', '31', '35'],
      },
      { playersScoredGoal: [], timeGoals: [] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.centenario,
      attendance: '70 022',
    },
  },

  {
    id: v1(),
    date: '13.07.1930',
    stage: stage.group[4],
    teams: ['United States', 'Belgium'],
    score: [[3, 0], [], []],
    goals: [
      {
        playersScoredGoal: ['McGhee', 'Florie', 'Patenaude'],
        timeGoals: ['23', '45', '69'],
      },
      { playersScoredGoal: [], timeGoals: [] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.parqueCentral,
      attendance: '18 346',
    },
  },
  {
    id: v1(),
    date: '17.07.1930',
    stage: stage.group[4],
    teams: ['United States', 'Paraguay'],
    score: [[3, 0], [], []],
    goals: [
      { playersScoredGoal: ['Patenaude'], timeGoals: ['10, 15, 50'] },
      { playersScoredGoal: [], timeGoals: [] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.parqueCentral,
      attendance: '18 306',
    },
  },
  {
    id: v1(),
    date: '20.07.1930',
    stage: stage.group[4],
    teams: ['Paraguay', 'Belgium'],
    score: [[1, 0], [], []],
    goals: [
      { playersScoredGoal: ['Vargas Peña'], timeGoals: ['40'] },
      { playersScoredGoal: [], timeGoals: [] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.centenario,
      attendance: '12 000',
    },
  },
  {
    id: v1(),
    date: '26.07.1930',
    stage: stage[1_2],
    teams: ['Argentina', 'United States'],
    score: [[6, 1], [], []],
    goals: [
      {
        playersScoredGoal: ['Monti', 'Scopelli', 'Stábile', 'Peucelle'],
        timeGoals: ['20', '56', '69, 87', '80, 85'],
      },
      { playersScoredGoal: ['Brown'], timeGoals: ['89'] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.centenario,
      attendance: '72 886',
    },
  },
  {
    id: v1(),
    date: '27.07.1930',
    stage: stage[1_2],
    teams: ['Uruguay', 'Yugoslavia'],
    score: [[6, 1], [], []],
    goals: [
      {
        playersScoredGoal: ['Cea', 'Anselmo', 'Iriarte'],
        timeGoals: ['18, 67, 72', '20, 31', '61'],
      },
      { playersScoredGoal: ['Vujadinović'], timeGoals: ['4'] },
    ],
    stadium: {
      ...stadiumsData.Uruguay.centenario,
      attendance: '79 867',
    },
  },
  {
    id: v1(),
    date: '30.07.1930',
    stage: stage.final,
    teams: ['Uruguay', 'Argentina'],
    score: [[4, 2], [], []],
    goals: [
      {
        playersScoredGoal: ['Dorado', 'Cea', 'Iriarte', 'Castro'],
        timeGoals: ['12', '57', '68', '89'],
      },
      {
        playersScoredGoal: ['Peucelle', 'Stábile'],
        timeGoals: ['20', '37'],
      },
    ],
    stadium: {
      ...stadiumsData.Uruguay.centenario,
      attendance: '68 346',
    },
  },
]
