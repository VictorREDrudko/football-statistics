
import s from './HistoryFootballPage.module.scss'
import image from '../assets/history-football-background.png'
import { BackgroundWrapper } from '@/shared/ui/background-wrapper/BackgroundWrapper'


export const HistoryFootballPage = () => {
  return (
    <main>
      <BackgroundWrapper imageUrl={image} className={s.container}>
        'jhfsg'
        {/* <History /> */}
      </BackgroundWrapper>
    </main>
  )
}
