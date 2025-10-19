import { Navigate, Route, Routes } from 'react-router-dom'
import {
  StartPage,
  AboutPage,
  HistoryFootballPage,
  NationalTeams,
  TournamentChampionships,
  TournamentFinalStage,
  TournamentsPage,
} from '@/pages'

export const AppRouter = () => {
  return (
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
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
