import { AboutProject, DataFifaWorldCup, Menu, NationalTeams, StartPage } from './type-data'
import backgroundFootballLive from './../assets/football-live.png'
import logoProject from './../assets/logo.png'
import backgroundStartPage from './../assets/background-football.png'
import ratingIcon from './../assets/icon/rating-icon.png'
import projectIcon from './../assets/icon/project-icon.png'
import pitchImg from './../assets/pitch.png'
import iconGermany from './../assets/icon/national/Germany.png'
import flagGermany from './../assets/icon/flag/Germany.png'
import coatOfArmsGermany from './../assets/icon/coat-of-arms/Germany.png'
import iconEngland from './../assets/icon/national/England.png'
import flagEngland from './../assets/icon/flag/England.png'
import coatOfArmsEngland from './../assets/icon/coat-of-arms/England.png'
import iconItaly from './../assets/icon/national/Italy.png'
import flagItaly from './../assets/icon/flag/Italy.png'
import coatOfArmsItaly from './../assets/icon/coat-of-arms/Italy.png'
import iconSpain from './../assets/icon/national/Spain.png'
import flagSpain from './../assets/icon/flag/Spain.png'
import coatOfArmsSpain from './../assets/icon/coat-of-arms/Spain.png'
import iconFrance from './../assets/icon/national/France.png'
import flagFrance from './../assets/icon/flag/France.png'
import coatOfArmsFrance from './../assets/icon/coat-of-arms/France.png'
import iconAlbania from './../assets/icon/national/Albania.png'
import flagAlbania from './../assets/icon/flag/Albania.png'
import coatOfArmsAlbania from './../assets/icon/coat-of-arms/Albania.png'
import iconAndorra from './../assets/icon/national/Andorra.png'
import flagAndorra from './../assets/icon/flag/Andorra.png'
import coatOfArmsAndorra from './../assets/icon/coat-of-arms/Andorra.png'
import iconArmenia from './../assets/icon/national/Armenia.png'
import flagArmenia from './../assets/icon/flag/Armenia.png'
import coatOfArmsArmenia from './../assets/icon/coat-of-arms/Armenia.png'
import iconAustria from './../assets/icon/national/Austria.png'
import flagAustria from './../assets/icon/flag/Austria.png'
import coatOfArmsAustria from './../assets/icon/coat-of-arms/Austria.png'
import iconAzerbaijan from './../assets/icon/national/Azerbaijan.png'
import flagAzerbaijan from './../assets/icon/flag/Azerbaijan.png'
import coatOfArmsAzerbaijan from './../assets/icon/coat-of-arms/Azerbaijan.png'
import iconBelarus from './../assets/icon/national/Belarus.png'
import flagBelarus from './../assets/icon/flag/Belarus.png'
import coatOfArmsBelarus from './../assets/icon/coat-of-arms/Belarus.png'
import iconBelgium from './../assets/icon/national/Belgium.png'
import flagBelgium from './../assets/icon/flag/Belgium.png'
import coatOfArmsBelgium from './../assets/icon/coat-of-arms/Belgium.png'
import iconBosniaAndHerzegovina from './../assets/icon/national/Bosnia-and-Herzegovina.png'
import flagBosniaAndHerzegovina from './../assets/icon/flag/Bosnia-and-Herzegovina.png'
import coatOfArmsBosniaAndHerzegovina from './../assets/icon/coat-of-arms/Bosnia-and-Herzegovina.png'
import iconBulgaria from './../assets/icon/national/Bulgaria.png'
import flagBulgaria from './../assets/icon/flag/Bulgaria.png'
import coatOfArmsBulgaria from './../assets/icon/coat-of-arms/Bulgaria.png'
import iconCroatia from './../assets/icon/national/Croatia.png'
import flagCroatia from './../assets/icon/flag/Croatia.png'
import coatOfArmsCroatia from './../assets/icon/coat-of-arms/Croatia.png'
import iconCyprus from './../assets/icon/national/Cyprus.png'
import flagCyprus from './../assets/icon/flag/Cyprus.png'
import coatOfArmsCyprus from './../assets/icon/coat-of-arms/Cyprus.png'
import iconCzechRepublic from './../assets/icon/national/Czech-Republic.png'
import flagCzechRepublic from './../assets/icon/flag/Czech-Republic.png'
import coatOfArmsCzechRepublic from './../assets/icon/coat-of-arms/Czech-Republic.png'
import iconDenmark from './../assets/icon/national/Denmark.png'
import flagDenmark from './../assets/icon/flag/Denmark.png'
import coatOfArmsDenmark from './../assets/icon/coat-of-arms/Denmark.png'
import iconEstonia from './../assets/icon/national/Estonia.png'
import flagEstonia from './../assets/icon/flag/Estonia.png'
import coatOfArmsEstonia from './../assets/icon/coat-of-arms/Estonia.png'
import iconFaroeIslands from './../assets/icon/national/Faroe-Islands.png'
import flagFaroeIslands from './../assets/icon/flag/Faroe-Islands.png'
import coatOfArmsFaroeIslands from './../assets/icon/coat-of-arms/Faroe-Islands.png'
import iconFinland from './../assets/icon/national/Finland.png'
import flagFinland from './../assets/icon/flag/Finland.png'
import coatOfArmsFinland from './../assets/icon/coat-of-arms/Finland.png'

import iconUefa from './../assets/icon/confederation/icon-uefa.png'
import iconCup from './../assets/icon/icon-cup.png'
import iconMedal from './../assets/icon/icon-medal.png'
import { v1 } from 'uuid'

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
  {title: 'About', path: 'about'},
  {title: 'National tournaments', path: 'national-tournaments'},
  {title: 'Club tournaments', path: 'club-tournaments'},
  {title: 'National teams', path: 'teams'},
  {title: 'Clubs', path: 'clubs'},
]

export const icons = {
  project: projectIcon,
  raiting: ratingIcon,
  confederation: {
    uefa: iconUefa,
  },
  trophy: {
    cup: iconCup,
    medal: iconMedal,
  }
}

export const countWorldCup = 0
export const uefaCup = 0


export const nameTeams = {
  uefa: ['Germany', 'England', 'Italy', 'Spain', 'France', 'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Faroe Islands', 'Finland']
}


export const nationalTeams: NationalTeams = {
  'Germany': {
    id: v1(),
    name: ['Germany'],
    flag: [flagGermany],
    coatOfArms: coatOfArmsGermany,
    associationIcon: iconGermany,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1900,
      fifaAffiliation: 1904,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'England': {
    id: v1(),
    name: ['England'],
    flag: [flagEngland],
    coatOfArms: coatOfArmsEngland,
    associationIcon: iconEngland,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1863,
      fifaAffiliation: 1905,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Italy': {
    id: v1(),
    name: ['Italy'],
    flag: [flagItaly],
    coatOfArms: coatOfArmsItaly,
    associationIcon: iconItaly,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1898,
      fifaAffiliation: 1905,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Spain': {
    id: v1(),
    name: ['Spain'],
    flag: [flagSpain],
    coatOfArms: coatOfArmsSpain,
    associationIcon: iconSpain,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1913,
      fifaAffiliation: 1914,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'France': {
    id: v1(),
    name: ['France'],
    flag: [flagFrance],
    coatOfArms: coatOfArmsFrance,
    associationIcon: iconFrance,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1919,
      fifaAffiliation: 1919,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Albania': {
    id: v1(),
    name: ['Albania'],
    flag: [flagAlbania],
    coatOfArms: coatOfArmsAlbania,
    associationIcon: iconAlbania,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1930,
      fifaAffiliation: 1932,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Andorra': {
    id: v1(),
    name: ['Andorra'],
    flag: [flagAndorra],
    coatOfArms: coatOfArmsAndorra,
    associationIcon: iconAndorra,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1994,
      fifaAffiliation: 1996,
      uefaAffiliation: 1996,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Armenia': {
    id: v1(),
    name: ['Armenia'],
    flag: [flagArmenia],
    coatOfArms: coatOfArmsArmenia,
    associationIcon: iconArmenia,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1992,
      fifaAffiliation: 1992,
      uefaAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Austria': {
    id: v1(),
    name: ['Austria'],
    flag: [flagAustria],
    coatOfArms: coatOfArmsAustria,
    associationIcon: iconAustria,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1904,
      fifaAffiliation: 1905,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Azerbaijan': {
    id: v1(),
    name: ['Azerbaijan'],
    flag: [flagAzerbaijan],
    coatOfArms: coatOfArmsAzerbaijan,
    associationIcon: iconAzerbaijan,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1992,
      fifaAffiliation: 1994,
      uefaAffiliation: 1994,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Belarus': {
    id: v1(),
    name: ['Belarus'],
    flag: [flagBelarus],
    coatOfArms: coatOfArmsBelarus,
    associationIcon: iconBelarus,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1989,
      fifaAffiliation: 1992,
      uefaAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Belgium': {
    id: v1(),
    name: ['Belgium'],
    flag: [flagBelgium],
    coatOfArms: coatOfArmsBelgium,
    associationIcon: iconBelgium,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1895,
      fifaAffiliation: 1904,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bosnia and Herzegovina': {
    id: v1(),
    name: ['Bosnia and Herzegovina'],
    flag: [flagBosniaAndHerzegovina],
    coatOfArms: coatOfArmsBosniaAndHerzegovina,
    associationIcon: iconBosniaAndHerzegovina,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1920,
      fifaAffiliation: 1996,
      uefaAffiliation: 1998,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Bulgaria': {
    id: v1(),
    name: ['Bulgaria'],
    flag: [flagBulgaria],
    coatOfArms: coatOfArmsBulgaria,
    associationIcon: iconBulgaria,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1923,
      fifaAffiliation: 1924,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Croatia': {
    id: v1(),
    name: ['Croatia'],
    flag: [flagCroatia],
    coatOfArms: coatOfArmsCroatia,
    associationIcon: iconCroatia,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1912,
      fifaAffiliation: 1941,
      uefaAffiliation: 1993,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Cyprus': {
    id: v1(),
    name: ['Cyprus'],
    flag: [flagCyprus],
    coatOfArms: coatOfArmsCyprus,
    associationIcon: iconCyprus,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1934,
      fifaAffiliation: 1948,
      uefaAffiliation: 1962,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Czech Republic': {
    id: v1(),
    name: ['Czech Republic'],
    flag: [flagCzechRepublic],
    coatOfArms: coatOfArmsCzechRepublic,
    associationIcon: iconCzechRepublic,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1901,
      fifaAffiliation: 1907,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Denmark': {
    id: v1(),
    name: ['Denmark'],
    flag: [flagDenmark],
    coatOfArms: coatOfArmsDenmark,
    associationIcon: iconDenmark,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1889,
      fifaAffiliation: 1904,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Estonia': {
    id: v1(),
    name: ['Estonia'],
    flag: [flagEstonia],
    coatOfArms: coatOfArmsEstonia,
    associationIcon: iconEstonia,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1921,
      fifaAffiliation: 1923,
      uefaAffiliation: 1992,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Faroe Islands': {
    id: v1(),
    name: ['Faroe Islands'],
    flag: [flagFaroeIslands],
    coatOfArms: coatOfArmsFaroeIslands,
    associationIcon: iconFaroeIslands,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1979,
      fifaAffiliation: 1988,
      uefaAffiliation: 1990,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
  'Finland': {
    id: v1(),
    name: ['Finland'],
    flag: [flagFinland],
    coatOfArms: coatOfArmsFinland,
    associationIcon: iconFinland,
    confederation: 'UEFA',
    uefaIcon: iconUefa,
    associationDate: {
      founded: 1907,
      fifaAffiliation: 1908,
      uefaAffiliation: 1954,
    },
    rating: 0,
    achievements: {
      worldCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
      confederationsCup: {
        appearances: 0,
        champions: [],
        secondPlace: [],
      },
    }
  },
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