import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from '../common/components/header/Header';
import { Main } from '../common/components/main/Main';
import { Fifa } from '../common/components/fifa/Fifa';
import { WorldCup1930 } from '../common/components/fifa/worldCupFinalStage/1930/WorldCup1930';


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


function App() {
	return (
		<div className="App">
      <Header footballOrganizations={footballOrganizations}/>
      <Routes>
        <Route path="/" element={<Main historyFootball={historyFootball} confederations={footballOrganizations}/>} />
        <Route path="/fifa" element={<Fifa/>} />
        {/* <Route path="/fifa/world-cup" element={<WorldCup tournamentsWorldCup={tournamentsWorldCup}/>} /> */}

        <Route path="/fifa/1930" element={<WorldCup1930 />} />
      </Routes>
    </div>
	);
}

export default App;