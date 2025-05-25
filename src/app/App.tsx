import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FinalStage } from '../features/worldCup/finalStage/FinalStage';
import { Header } from '@/widgets';
import { AboutPage, NationaleTournaments, NationalTeams, StartPage, WorldCupList } from '@/pages';
import { Button } from '@/shared';

function App() {

	return (
    <>
      {/* <Header/> */}
      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center'}}>
        <Button 
          variant="primary" 
          size="small"
          onClick={() => console.log('Clicked!')}
        >
          Button
        </Button>
        <Button 
          variant="primary" 
          size="medium"
          onClick={() => console.log('Clicked!')}
        >
        Button
        </Button>

        <Button 
          variant="primary" 
          size="large"
          onClick={() => console.log('Clicked!')}
        >
          Button
        </Button>
        <Button 
          variant="primary" 
          size="large"
          onClick={() => console.log('Clicked!')}
          disabled
        >
          Button
        </Button>
      </div>

            {/* <Header/> */}
      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center'}}>
        <Button 
          variant="secondary" 
          size="small"
          onClick={() => console.log('Clicked!')}
        >
          Button
        </Button>
        <Button 
          variant="secondary" 
          size="medium"
          onClick={() => console.log('Clicked!')}
        >
        Button
        </Button>

        <Button 
          variant="secondary" 
          size="large"
          onClick={() => console.log('Clicked!')}
        >
          Button
        </Button>
        <Button 
          variant="secondary" 
          size="large"
          onClick={() => console.log('Clicked!')}
          disabled
        >
          Button
        </Button>
      </div>

            <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center'}}>
        <Button 
          variant="danger" 
          size="small"
          onClick={() => console.log('Clicked!')}
        >
          Button
        </Button>
        <Button 
          variant="danger" 
          size="medium"
          onClick={() => console.log('Clicked!')}
        >
        Button
        </Button>

        <Button 
          variant="danger" 
          size="large"
          onClick={() => console.log('Clicked!')}
        >
          Button
        </Button>
        <Button 
          variant="danger" 
          size="large"
          onClick={() => console.log('Clicked!')}
          disabled
        >
          Button
        </Button>
      </div>
            <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center'}}>
        <Button 
          variant="outline" 
          size="small"
          onClick={() => console.log('Clicked!')}
        >
          Button
        </Button>
        <Button 
          variant="outline" 
          size="medium"
          onClick={() => console.log('Clicked!')}
        >
        Button
        </Button>

        <Button 
          variant="outline" 
          size="large"
          onClick={() => console.log('Clicked!')}
        >
          Button
        </Button>
        <Button 
          variant="outline" 
          size="large"
          onClick={() => console.log('Clicked!')}
          disabled
        >
          Button
        </Button>
      </div>

                  <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center'}}>
        <Button 
          variant="text" 
          size="small"
          onClick={() => console.log('Clicked!')}
        >
          Button
        </Button>
        <Button 
          variant="text" 
          size="medium"
          onClick={() => console.log('Clicked!')}
        >
        Button
        </Button>

        <Button 
          variant="text" 
          size="large"
          onClick={() => console.log('Clicked!')}
        >
          Button
        </Button>
        <Button 
          variant="text" 
          size="large"
          onClick={() => console.log('Clicked!')}
          disabled
        >
          Button
        </Button>
      </div>
    

      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/national-tournaments' element={<NationaleTournaments/>}/>
        <Route path='/national-tournaments/world-cup' element={<WorldCupList/>}/>
        <Route path='/teams' element={<Navigate to='/teams/UEFA'/>}/>
        <Route path='/teams/:confederationRoute' element={<NationalTeams/>}/>
        <Route path='/teams/:confederationRoute/:teamRoute' element={<NationalTeams />} />
        <Route path='/national-tournaments/world-cup/final-stage/:urlYear' element={<FinalStage />} />
      </Routes>
    </>
	);
}

export default App;