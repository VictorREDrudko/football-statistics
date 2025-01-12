import { AboutProject } from 'features/about-project/AboutProject';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { StartPage } from 'features/start-page/StartPage';

function App() {
	return (
    <>
      <Routes>
        <Route path='/' element={<AboutProject/>}/>
        <Route path='/start' element={<StartPage/>}/>
      </Routes>
    </>

	);
}

export default App;