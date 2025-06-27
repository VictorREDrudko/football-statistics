import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '@/widgets'
import {
  AboutPage,
  NationalTeams,
  NationalTournaments,
  StartPage,
  TournamentChampionships,
  TournamentFinalStage,
} from '@/pages'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/national-tournaments" element={<NationalTournaments />} />
        <Route path="/national-tournaments/:tournament" element={<TournamentChampionships />} />
        <Route path="/teams" element={<Navigate to="/teams/UEFA" />} />
        <Route path="/teams/:confederationRoute" element={<NationalTeams />} />
        <Route path="/teams/:confederationRoute/:teamRoute" element={<NationalTeams />} />
        <Route path="/national-tournaments/:tournament/final-stage/:urlYear" element={<TournamentFinalStage />} />
      </Routes>
    </>
  )
}

export default App
