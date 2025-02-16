import { StartProject } from 'features/start-project/StartProject';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from 'features/about/About';
import { Header } from 'common/components/header/Header';
import { NationalTeams } from 'features/nationalTeams/NationalTeams';


function App() {
	return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<StartProject/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/teams' element={<Navigate to='/teams/uefa'/>}/>
        <Route path='/teams/:confederationRoute' element={<NationalTeams/>}/>
        <Route path='/teams/:confederationRoute/:teamRoute' element={<NationalTeams />} />
      </Routes>
    </>

	);
}

export default App;