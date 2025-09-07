import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '@/widgets'
import {
  AboutPage,
  HistoryFootballPage,
  NationalTeams,
  NationalTournaments,
  StartPage,
  TournamentChampionships,
  TournamentFinalStage,
  TournamentsPage,
} from '@/pages'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/history-football" element={<HistoryFootballPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route
          path="/tournaments/:tournament"
          element={<TournamentChampionships />}
        />
        <Route path="/teams" element={<Navigate to="/teams/UEFA" />} />
        <Route path="/teams/:confederationRoute" element={<NationalTeams />} />
        <Route
          path="/teams/:confederationRoute/:teamRoute"
          element={<NationalTeams />}
        />
        <Route
          path="/tournaments/:tournament/final-stage/:urlYear"
          element={<TournamentFinalStage />}
        />
      </Routes>
    </div>
  )
}

export default App
