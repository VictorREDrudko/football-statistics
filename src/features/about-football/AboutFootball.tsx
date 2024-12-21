// import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '../../common/components/header/Header';
import { Main } from '../../common/components/main/Main';
import { Fifa } from '../fifa/Fifa';
import { WorldCup } from '../fifa/worldCup/WorldCup';
// import { aboutFootball, dataFifaWorldCup, tournamentsWorldCup } from '../../app/store';
import { Tournament } from '../fifa/worldCup/tournament/Tournament';

export const AboutFootball = () => {
  const [year, setYear] = useState('1930')

  const changeYear = (year: string) => {
    setYear(year)
  }

  return (
    <div className="App">
      {/* <Header footballOrganizations={aboutFootball.organizations}/> */}
      {/* <Routes>
        <Route path="/" element={<Main historyFootball={aboutFootball.historicalData} confederations={aboutFootball.organizations}/>} />
        <Route path="/fifa" element={<Fifa/>} />
        <Route path="/fifa/world-cup" element={<WorldCup tournamentsWorldCup={tournamentsWorldCup} changeYear={changeYear}/>} />
        <Route path={`/fifa/world-cup/${year}`} element={<Tournament data={dataFifaWorldCup[year]} />} />
      </Routes> */}
    </div>
  );
}