import './App.css'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import { Header } from '@/widgets'
// import {
//   AboutPage,
//   HistoryFootballPage,
//   NationalTeams,
//   NationalTournaments,
//   StartPage,
//   TournamentChampionships,
//   TournamentFinalStage,
//   TournamentsPage,
// } from '@/pages'

import { RootState, store } from './store/store'

import { MatchDisplay } from '@/features/matchDisplay/ui/MatchDisplay'

import { Match } from '@/features/matchDisplay/model/class/Match'
import { STAGES } from '@/shared/constants/tournament/stages'
import { getStadium } from '@/features/matchDisplay'


function App() {
  const m = new Match(
    '13.07.1930',
    STAGES.GROUP_1,
    ['Germany', 'Mexico'],
    [[1, 1], [], []],
    ['L. Laurent', 'Langiller', 'Maschinot'],
    ['19', '40', '43, 87'],
    ['Carreño'],
    ['80'],
    getStadium('Uruguay', 'pocitos'),
    '4 444'
  )
  // console.log(store.getState().stadiums)
  return (
    <>
      
      <MatchDisplay match={m}></MatchDisplay>
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
