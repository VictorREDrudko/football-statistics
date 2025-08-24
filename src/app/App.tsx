import './App.css'
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
import { CountryTeamWithData } from '@/features/country-team-data/ui/CountryTeamWithData'
import { store } from './store/store'

function App() {
  // console.log(store.getState().teams)
  return (
    <>
      <CountryTeamWithData countryName='Germany' year='1933'/>
      {/* <Header />
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
      </Routes> */}
    </>
  )
}

export default App
