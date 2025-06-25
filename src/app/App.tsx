import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '@/widgets';
import { AboutPage, NationalTeams, NationalTournaments, StartPage, TournamentChampionships, TournamentFinalStage } from '@/pages';
import { stadiumsStore } from '@/shared/model/stadiums-store/stadiumsStore';
import { worldCupStore } from '@/shared/model/national-tournaments-store/world-cup/worldCupStore';


function App() {
  console.log(stadiumsStore)
  console.log(worldCupStore)
	return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/national-tournaments' element={<NationalTournaments/>}/>
        <Route path='/national-tournaments/:tournament' element={<TournamentChampionships/>}/>
        <Route path='/teams' element={<Navigate to='/teams/UEFA'/>}/>
        <Route path='/teams/:confederationRoute' element={<NationalTeams/>}/>
        <Route path='/teams/:confederationRoute/:teamRoute' element={<NationalTeams />} />
        <Route path='/national-tournaments/:tournament/final-stage/:urlYear' element={<TournamentFinalStage/>} />
      </Routes>
    </>
	);
}

export default App;