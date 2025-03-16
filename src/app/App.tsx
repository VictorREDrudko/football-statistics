import { StartProject } from 'features/start-project/StartProject';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from 'features/about/About';
import { Header } from 'common/components/header/Header';
import { NationalTeams } from 'features/nationalTeams/NationalTeams';
import { NationaleTournaments } from 'features/nationalTournaments/NationalTournaments';
import { WorldCup } from 'features/worldCup/WorldCup';
import { FinalStage } from 'features/worldCup/finalStage/FinalStage';


function App() {
	return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<StartProject/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/national-tournaments' element={<NationaleTournaments/>}/>
        <Route path='/national-tournaments/fifa-world-cup' element={<WorldCup/>}/>
        <Route path='/teams' element={<Navigate to='/teams/uefa'/>}/>
        <Route path='/teams/:confederationRoute' element={<NationalTeams/>}/>
        <Route path='/teams/:confederationRoute/:teamRoute' element={<NationalTeams />} />
        <Route path='/national-tournaments/fifa-world-cup/final-stage/:year' element={<FinalStage />} />
      </Routes>
    </>
	);
}

export default App;