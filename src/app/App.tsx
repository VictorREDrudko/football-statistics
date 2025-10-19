import { Header } from '@/widgets'
import { Theme } from '@radix-ui/themes'
import { useAppSelector } from '@/shared/hooks'
import { AppRouter } from './app-router/AppRouter'
import './App.css'

function App() {
  const theme = useAppSelector((state) => state.theme)

  return (
    <Theme appearance={theme.mode}>
      <Header />
      <main className='wrapper'>
        <AppRouter />
      </main>
    </Theme>
  )
}

export default App
