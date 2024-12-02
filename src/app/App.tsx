import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from '../common/components/header/Header';
import { Main } from '../common/components/main/Main';
import { MatchType } from '../common/components/matchInfo/MatchInfo';
import { Fifa } from '../features/fifa/Fifa';
import { WorldCup } from '../features/fifa/worldCup/WorldCup';
import { Tournament } from '../features/fifa/worldCup/tournament/Tournament';
import { useState } from 'react';


// DATA
const historyFootball: string[] = [
  '1848 The Cambridge football rules',
  '1850s many clubs were created',
  '1857 codes of rules Sheffield Football Club',
  '1863 the first set of rules of The Football Association',
  '1872 The first official international football match and create oldest football competition is the Football Association Cup',
  '1888 was formed the first Football League',
  '1904 was formed FIFA',
  '1930 The first FIFA World Cup'
]

const footballOrganizations: string[] = [
  'FIFA',
  'AFC',
  'CAF',
  'CONCACAF',
  'CONMEBOL',
  'OFC',
  'UEFA',
]

const tournamentsWorldCup = [ 1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970, 1974, 
                              1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 
                              2018, 2022]

const GenerateStatisticWorldCup = {
  1930: {
    id: 1,
    year: '1930',
    country: 'Uruguay',
    teams: 13,
    matches: 18,
    goals: 70,
    goalsPerMatch: 3.89,
  }
}


export type Matches = {
  qualification: number
  finalStage: MatchType[]
}

export type DataFifaWorldCup = {
  [key: string] : Matches
}

const dataFifaWorldCup: DataFifaWorldCup = {
  ['1930'] : {
    qualification: 1,
    finalStage: [
      {
        id: '1-1930',
        date: '13.07.1930',
        stage: 'group 1',
        teams: ['France', 'Mexico'],
        score: [[4, 1], [], []],
        forwards: [
          { players: ['L. Laurent', 'Langiller', 'Maschinot'],
            timeGoals: ['19', '40', '43, 87'] }, 
          { players: ['Carreño'],
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
        forwards: [
          { players: ['McGhee', 'Florie', 'Patenaude'],
            timeGoals: ['23', '45', '69'] }, 
          { players: [''],
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
        forwards: [
          { players: ['Tirnanić', 'Bek'],
            timeGoals: ['21', '30'] }, 
          { players: ['Preguinho'],
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
        forwards: [
          { players: ['Deșu', 'Stanciu', 'Kovács'],
            timeGoals: ['1', '79', '89'] }, 
          { players: ['De Souza'],
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
        forwards: [
          { players: ['Monti'],
            timeGoals: ['81'] }, 
          { players: [''],
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
        forwards: [
          { players: ['Vidal', 'M. Rosas'],
            timeGoals: ['1, 65', '52(o.g.)'] }, 
          { players: [''],
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
        forwards: [
          { players: ['Bek', 'Marjanović', 'Vujadinović'],
            timeGoals: ['60, 67', '65', '85'] }, 
          { players: [''],
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
        forwards: [
          { players: ['Patenaude'],
            timeGoals: ['10, 15, 50'] }, 
          { players: [''],
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
        stage: 'group 4',
        teams: ['Uruguay', 'Peru'],
        score: [[1, 0], [], []],
        forwards: [
          { players: ['Vargas Peña'],
            timeGoals: ['40'] }, 
          { players: [''],
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
        forwards: [
          { players: ['Subiabre'],
            timeGoals: ['67'] }, 
          { players: [''],
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
        forwards: [
          { players: ['Stábile', 'Zumelzú', 'Varallo'],
            timeGoals: ['8, 17, 80', '12, 55', '53'] }, 
          { players: ['M. Rosas', 'Gayón'],
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
        forwards: [
          { players: ['Moderato', 'Preguinho'],
            timeGoals: ['37, 73', '57, 83'] }, 
          { players: [''],
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
        forwards: [
          { players: ['Vargas Peña'],
            timeGoals: ['40',] }, 
          { players: [''],
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
        forwards: [
          { players: ['Dorado', 'Scarone', 'Anselmo', 'Cea'],
            timeGoals: ['7', '26', '31', '35'] }, 
          { players: [''],
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
        forwards: [
          { players: ['Stábile', 'M. Evaristo'],
            timeGoals: ['12, 13', '51'] }, 
          { players: ['	Subiabre'],
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
        stage: 'semi-finals',
        teams: ['Argentina', 'United States'],
        score: [[6, 1], [], []],
        forwards: [
          { players: ['Monti', 'Scopelli', 'Stábile', 'Peucelle'],
            timeGoals: ['20', '56', '69, 87', '80, 85'] }, 
          { players: ['Brown'],
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
        stage: 'semi-finals',
        teams: ['Uruguay', 'Yugoslavia'],
        score: [[6, 1], [], []],
        forwards: [
          { players: ['Cea', 'Anselmo', 'Iriarte'],
            timeGoals: ['18, 67, 72', '20, 31', '61'] }, 
          { players: ['Vujadinović'],
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
        forwards: [
          { players: ['Dorado', 'Cea', 'Iriarte', 'Castro'],
            timeGoals: ['12', '57', '68', '89'] }, 
          { players: ['Peucelle', 'Stábile'],
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
  ['1934'] : {
    qualification: 2,
    finalStage: [
      {
        id: '1-1934',
        date: '13.07.1934',
        stage: 'group 4',
        teams: ['Belgium', 'United States'],
        score: [[9, 8], [], []],
        forwards: [
          { players: ['McGhee', 'Florie', 'Patenaude'],
            timeGoals: ['23', '45', '69'] }, 
          { players: [''],
            timeGoals: [''] }, 
        ],
        stadium: 
        {title: 'Estadio Parque Central',
          city: 'Montevideo',
          country: 'Uruguay',
          attendance: '18 346',
        }
      },
    ]
  },
}




function App() {
  const [year, setYear] = useState('1930')

  const changeYear = (year: string) => {
    setYear(year)
  }

	return (
		<div className="App">
      <Header footballOrganizations={footballOrganizations}/>
      <Routes>
        <Route path="/" element={<Main historyFootball={historyFootball} confederations={footballOrganizations}/>} />
        <Route path="/fifa" element={<Fifa/>} />
        <Route path="/fifa/world-cup" element={<WorldCup tournamentsWorldCup={tournamentsWorldCup} changeYear={changeYear}/>} />

        <Route path={`/fifa/world-cup/${year}`} element={<Tournament data={dataFifaWorldCup[year]} />} />
      </Routes>
    </div>
	);
}

export default App;