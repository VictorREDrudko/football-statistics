import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FinalStage } from '../features/worldCup/finalStage/FinalStage';
import { Header } from '@/widgets';
import { AboutPage, NationaleTournaments, NationalTeams, StartPage, WorldCupList } from '@/pages';
import { Badge, Container } from '@/shared';

function App() {
	return (
    <>
      <Header/>
      <div style={{paddingTop: '100px'}}>
        <Container gap='8'>
          <div style={{width: '100px', height: '100px'}}>
            <Badge variant='primary' size='large' number={457} description='Teams'/>
          </div>
          <div style={{width: '60px', height: '60px'}}>
            <Badge variant='primary' size='medium' number={457} description='Teams'/>
          </div>

          <div style={{width: '40px', height: '40px'}}>
            <Badge variant='primary' size='small' number={457} description='Teams'/>
          </div>
        </Container>
        {/* type NumberInCircleVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'text';
type NumberInCircleSize = 'small' | 'medium' | 'large'; */}
      </div>
            <div style={{paddingTop: '100px'}}>
        <Container gap='8'>
          <div style={{width: '100px', height: '100px'}}>
            <Badge variant='secondary' size='large' number={457} description='Teams'/>
          </div>
          <div style={{width: '60px', height: '60px'}}>
            <Badge variant='secondary' size='medium' number={457} description='Teams'/>
          </div>

          <div style={{width: '40px', height: '40px'}}>
            <Badge variant='secondary' size='small' number={457} description='Teams'/>
          </div>
        </Container>
        {/* type NumberInCircleVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'text';
type NumberInCircleSize = 'small' | 'medium' | 'large'; */}
      </div>
            <div style={{paddingTop: '100px'}}>
        <Container gap='8'>
          <div style={{width: '100px', height: '100px'}}>
            <Badge variant='outline' size='large' number={457} description='Teams'/>
          </div>
          <div style={{width: '60px', height: '60px'}}>
            <Badge variant='outline' size='medium' number={457} description='Teams'/>
          </div>

          <div style={{width: '40px', height: '40px'}}>
            <Badge variant='outline' size='small' number={457} description='Teams'/>
          </div>
        </Container>
        {/* type NumberInCircleVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'text';
type NumberInCircleSize = 'small' | 'medium' | 'large'; */}
      </div>
                  <div style={{paddingTop: '100px'}}>
        <Container gap='8'>
          <div style={{width: '100px', height: '100px'}}>
            <Badge variant='danger' size='large' number={457} description='Teams'/>
          </div>
          <div style={{width: '60px', height: '60px'}}>
            <Badge variant='danger' size='medium' number={457} description='Teams'/>
          </div>

          <div style={{width: '40px', height: '40px'}}>
            <Badge variant='danger' size='small' number={457} description='Teams'/>
          </div>
        </Container>
        {/* type NumberInCircleVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'text';
type NumberInCircleSize = 'small' | 'medium' | 'large'; */}
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