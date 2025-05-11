import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NationaleTournaments } from '../features/nationalTournaments/NationalTournaments';
import { FinalStage } from '../features/worldCup/finalStage/FinalStage';
import { WorldCup } from '../features/worldCup/WorldCup';
import { StartPage } from '@/pages/start';
import { AboutPage } from '@/pages/about';
import { ratingCalculation } from '@/features/ratingCalculation/model/ratingCalculation';
import { Header } from '@/widgets';
import { NationalTeams } from '@/pages/national-teams';

function App() {

	return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/national-tournaments' element={<NationaleTournaments/>}/>
        <Route path='/national-tournaments/world-cup' element={<WorldCup/>}/>
        <Route path='/teams' element={<Navigate to='/teams/UEFA'/>}/>
        <Route path='/teams/:confederationRoute' element={<NationalTeams/>}/>
        <Route path='/teams/:confederationRoute/:teamRoute' element={<NationalTeams />} />
        <Route path='/national-tournaments/world-cup/final-stage/:urlYear' element={<FinalStage />} />
      </Routes>
    </>
	);
}

export default App;