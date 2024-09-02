import './App.css';
import { Main } from './components/main/Main';

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

const confederations: string[] = [
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
      <Main historyFootball={historyFootball} confederations={confederations}/>
    </div>
	);
}

export default App;