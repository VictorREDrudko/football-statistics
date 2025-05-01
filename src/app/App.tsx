// import { StartProject } from '@features/start-project';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { ratingCalculation } from '../logics/ratingCalculation/ratingCalculation';
import { Header } from '../common/components/header/Header';
import { StartProject } from '../features/start-project/StartProject';
import { About } from '../features/about/About';
import { NationalTeams } from '../features/nationalTeams/NationalTeams';
import { NationaleTournaments } from '../features/nationalTournaments/NationalTournaments';
import { FinalStage } from '../features/worldCup/finalStage/FinalStage';
import { WorldCup } from '../features/worldCup/WorldCup';

function App() {
  // Добавление рейтинга
  useEffect(() => {
    ratingCalculation();
  }, [])

	return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<StartProject/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/national-tournaments' element={<NationaleTournaments/>}/>
        <Route path='/national-tournaments/world-cup' element={<WorldCup/>}/>
        <Route path='/teams' element={<Navigate to='/teams/uefa'/>}/>
        <Route path='/teams/:confederationRoute' element={<NationalTeams/>}/>
        <Route path='/teams/:confederationRoute/:teamRoute' element={<NationalTeams />} />
        <Route path='/national-tournaments/world-cup/final-stage/:urlYear' element={<FinalStage />} />
      </Routes>
    </>
	);
}

export default App;