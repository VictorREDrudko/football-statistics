import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FinalStage } from '../features/worldCup/finalStage/FinalStage';
import { WorldCup } from '../features/worldCup/WorldCup';
import { Header } from '@/widgets';
import { AboutPage, NationaleTournaments, NationalTeams, StartPage } from '@/pages';

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