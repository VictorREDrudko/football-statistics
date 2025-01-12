import { StartProject } from 'features/start-project/StartProject';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About } from 'features/about/About';
import { Header } from 'common/components/header/Header';

function App() {
	return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<StartProject/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>

	);
}

export default App;