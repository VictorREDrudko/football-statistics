import { AboutProject, DataFifaWorldCup, Menu, StartPage } from './type-data'
import backgroundFootballLive from './../assets/football-live.png'
import logoProject from './../assets/logo.png'
import backgroundStartPage from './../assets/background-football.png'
import ratingIcon from './../assets/icon/rating-icon.png'
import projectIcon from './../assets/icon/project-icon.png'
import pitchImg from './../assets/pitch.png'

// DATA
export const aboutProject: AboutProject = {
  image: logoProject,
  title: 'football is life',
  description: 'This project is about football',
  question: 'Do you love football as much as I do?..'
}

export const startPage: StartPage = {
  title: 'association football',
  text: "Association football (or football / soccer) is a team sport played between two teams of 11 players each. The objective of the game is to score more goals than the opposing team. With an estimated 250 million players active in over 200 countries and territories, it is the world's most popular sport.",
  img: pitchImg,
  historicalData: [
    '1848 The Cambridge football rules',
    '1850s many clubs were created',
    '1857 codes of rules Sheffield Football Club',
    '1863 the first set of rules of The Football Association',
    '1872 The first official international football match and create oldest football competition is the Football Association Cup',
    '1888 was formed the first Football League',
    '1904 was formed FIFA',
    '1930 The first FIFA World Cup'
  ],
}

export const menu: Menu = [
  'About',
  'National tournaments',
  'Club tournaments',
  'National teams',
  'Clubs',
]

export const icons = {
  project: projectIcon,
  raiting: ratingIcon,

}






export const background = {
  startProject: backgroundFootballLive,
  startPage: backgroundStartPage,
}

// export const header = [
//   'FIFA',
//   'AFC',
//   'CAF',
//   'CONCACAF',
//   'CONMEBOL',
//   'OFC',
//   'UEFA',
// ]


















export const tournamentsWorldCup: number[] = [ 1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970, 1974, 
                              1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 
                              2018, 2022]


export const dataFifaWorldCup: DataFifaWorldCup = {
  ['1930'] : {
    // image: {
    //   background: background1930,
    //   background2: background1930_2,
    //   logo: logo1930,
    //   ball: ballImg,
    // },
    image: {
      background: 'background1930',
      background2: 'background1930_2',
      logo: 'logo1930',
      ball: 'ballImg',
    },
    statistic: {
      hostCountry: 'Uruguay',
      teamsInFinalStage: 13,
      teamsInQualification: 0,
      matches: 18,
      goals: 70,
      goalsPerMatch: 3.89,
      topScorer: 'G.Stábile',
      topScorerGoals: 8,
    },
    info: {
      title: '1930 FIFA World Cup',
      dates: "The first FIFA World Cup in football was the inaugural in Uruguay from 13 to 30 July 1930.",
      peculiarities: [
        "Only a handful of European teams chose to participate because of the difficulty of traveling to South America due to the Great Depression",
        "Francisco Varallo from Argentina was the last surviving player from this World Cup. He died in 2010 at the age of 100.",
        "The first World Cup was the only one without qualification.",
        "France's Lucien Laurent was the scorer of the first World Cup goal",
        "All matches were played in the Uruguayan capital, Montevideo."
      ]
    },
    qualification: 'Not qualification',
    finalStage: [
      {
        id: '1-1930',
        date: '13.07.1930',
        stage: 'group 1',
        teams: ['France', 'Mexico'],
        score: [[4, 1], [], []],
        goals: [
          { playersScoredGoal: ['L. Laurent', 'Langiller', 'Maschinot'],
            timeGoals: ['19', '40', '43, 87'] }, 
          { playersScoredGoal: ['Carreño'],
            timeGoals: ['80'] }, 
        ],
        stadium: 
        {title: 'Estadio Pocitos',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '4 444',
        }
      },
      {
        id: '2-1930',
        date: '13.07.1930',
        stage: 'group 4',
        teams: ['United States', 'Belgium'],
        score: [[3, 0], [], []],
        goals: [
          { playersScoredGoal: ['McGhee', 'Florie', 'Patenaude'],
            timeGoals: ['23', '45', '69'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '18 346',
        }
      },
      {
        id: '3-1930',
        date: '14.07.1930',
        stage: 'group 2',
        teams: ['Yugoslavia', 'Brazil'],
        score: [[2, 1], [], []],
        goals: [
          { playersScoredGoal: ['Tirnanić', 'Bek'],
            timeGoals: ['21', '30'] }, 
          { playersScoredGoal: ['Preguinho'],
            timeGoals: ['62'] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '24 059',
        }
      },
      {
        id: '4-1930',
        date: '14.07.1930',
        stage: 'group 3',
        teams: ['Romania', 'Peru'],
        score: [[3, 1], [], []],
        goals: [
          { playersScoredGoal: ['Deșu', 'Stanciu', 'Kovács'],
            timeGoals: ['1', '79', '89'] }, 
          { playersScoredGoal: ['De Souza'],
            timeGoals: ['75'] }, 
        ],
        stadium: 
        {title: 'Estadio Pocitos',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '2 549',
        }
      },
      {
        id: '5-1930',
        date: '15.07.1930',
        stage: 'group 1',
        teams: ['Argentina', 'France'],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ['Monti'],
            timeGoals: ['81'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '23 409',
        }
      },
      {
        id: '6-1930',
        date: '16.07.1930',
        stage: 'group 1',
        teams: ['Chile', 'Mexico'],
        score: [[3, 0], [], []],
        goals: [
          { playersScoredGoal: ['Vidal', 'M. Rosas'],
            timeGoals: ['1, 65', '52(o.g.)'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '9 249',
        }
      },
      {
        id: '7-1930',
        date: '17.07.1930',
        stage: 'group 2',
        teams: ['Yugoslavia', 'Bolivia'],
        score: [[4, 0], [], []],
        goals: [
          { playersScoredGoal: ['Bek', 'Marjanović', 'Vujadinović'],
            timeGoals: ['60, 67', '65', '85'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '18 306',
        }
      },
      {
        id: '8-1930',
        date: '17.07.1930',
        stage: 'group 4',
        teams: ['United States', 'Paraguay'],
        score: [[3, 0], [], []],
        goals: [
          { playersScoredGoal: ['Patenaude'],
            timeGoals: ['10, 15, 50'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '18 306',
        }
      },
      {
        id: '9-1930',
        date: '18.07.1930',
        stage: 'group 3',
        teams: ['Uruguay', 'Peru'],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ['Vargas Peña'],
            timeGoals: ['40'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '12 000',
        }
      },
      {
        id: '10-1930',
        date: '19.07.1930',
        stage: 'group 1',
        teams: ['Chile', 'France'],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ['Subiabre'],
            timeGoals: ['67'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '2 000',
        }
      },
      {
        id: '11-1930',
        date: '19.07.1930',
        stage: 'group 1',
        teams: ['Argentina', 'Mexico'],
        score: [[6, 3], [], []],
        goals: [
          { playersScoredGoal: ['Stábile', 'Zumelzú', 'Varallo'],
            timeGoals: ['8, 17, 80', '12, 55', '53'] }, 
          { playersScoredGoal: ['M. Rosas', 'Gayón'],
            timeGoals: ['42(pen.), 65', '75'] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '42 100',
        }
      },
      {
        id: '12-1930',
        date: '20.07.1930',
        stage: 'group 2',
        teams: ['Brazil', 'Bolivia'],
        score: [[4, 0], [], []],
        goals: [
          { playersScoredGoal: ['Moderato', 'Preguinho'],
            timeGoals: ['37, 73', '57, 83'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '25 466',
        }
      },
      {
        id: '13-1930',
        date: '20.07.1930',
        stage: 'group 4',
        teams: ['Paraguay', 'Belgium'],
        score: [[1, 0], [], []],
        goals: [
          { playersScoredGoal: ['Vargas Peña'],
            timeGoals: ['40',] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '12 000',
        }
      },
      {
        id: '14-1930',
        date: '21.07.1930',
        stage: 'group 3',
        teams: ['Uruguay', 'Romania'],
        score: [[4, 0], [], []],
        goals: [
          { playersScoredGoal: ['Dorado', 'Scarone', 'Anselmo', 'Cea'],
            timeGoals: ['7', '26', '31', '35'] }, 
          { playersScoredGoal: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '70 022',
        }
      },
      {
        id: '15-1930',
        date: '22.07.1930',
        stage: 'group 1',
        teams: ['Argentina', 'Chile'],
        score: [[3, 1], [], []],
        goals: [
          { playersScoredGoal: ['Stábile', 'M. Evaristo'],
            timeGoals: ['12, 13', '51'] }, 
          { playersScoredGoal: ['	Subiabre'],
            timeGoals: ['15'] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '41 459',
        }
      },
      {
        id: '16-1930',
        date: '26.07.1930',
        stage: '1/2 finals',
        teams: ['Argentina', 'United States'],
        score: [[6, 1], [2, 2], [5, 4]],
        goals: [
          { playersScoredGoal: ['Monti', 'Scopelli', 'Stábile', 'Peucelle'],
            timeGoals: ['20', '56', '69, 87', '80, 85'] }, 
          { playersScoredGoal: ['Brown'],
            timeGoals: ['89'] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '72 886',
        }
      },
      {
        id: '17-1930',
        date: '27.07.1930',
        stage: '1/2 finals',
        teams: ['Uruguay', 'Yugoslavia'],
        score: [[6, 1], [], []],
        goals: [
          { playersScoredGoal: ['Cea', 'Anselmo', 'Iriarte'],
            timeGoals: ['18, 67, 72', '20, 31', '61'] }, 
          { playersScoredGoal: ['Vujadinović'],
            timeGoals: ['4'] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '79 867',
        }
      },
      {
        id: '18-1930',
        date: '30.07.1930',
        stage: 'final',
        teams: ['Uruguay', 'Argentina'],
        score: [[4, 2], [], []],
        goals: [
          { playersScoredGoal: ['Dorado', 'Cea', 'Iriarte', 'Castro'],
            timeGoals: ['12', '57', '68', '89'] }, 
          { playersScoredGoal: ['Peucelle', 'Stábile'],
            timeGoals: ['20', '37'] }, 
        ],
        stadium: 
        {title: 'Estadio Centenario',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '68 346',
        }
      },
    ]
  },
}