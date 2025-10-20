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
import { PATH } from '@/shared/constants'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={PATH.home} element={<StartPage />} />
      <Route path={PATH.about} element={<AboutPage />} />
      <Route path={PATH.history} element={<HistoryFootballPage />} />
      <Route path={PATH.tournaments} element={<TournamentsPage />} />
      <Route path={PATH.teams} element={<Navigate to="/teams/UEFA" />} />
      <Route path={PATH.clubs} element={''} />
      <Route
        path="/tournaments/:tournament"
        element={<TournamentChampionships />}
      />
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
