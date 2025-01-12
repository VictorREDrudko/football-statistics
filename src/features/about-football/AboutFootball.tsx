import { useState } from 'react';

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