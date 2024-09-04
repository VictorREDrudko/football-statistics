import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './components/main/Main';
import { Fifa } from './components/fifa/Fifa';
import { Header } from './components/header/Header';

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



function App() {
	return (
		<div className="App">
      <Header footballOrganizations={footballOrganizations}/>
      <Routes>
        <Route path="/" element={<Main historyFootball={historyFootball} confederations={footballOrganizations}/>} />
        <Route path="/fifa" element={<Fifa/>} />
      </Routes>
    </div>
	);
}

export default App;