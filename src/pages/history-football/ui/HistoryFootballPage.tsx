import { BackgroundWrapper } from '@/shared'
import s from './HistoryFootballPage.module.scss'
import image from '../assets/history-football-background.png'
import { History } from '@/entities'

export const HistoryFootballPage = () => {
  return (
    <main>
      <BackgroundWrapper imageUrl={image} className={s.container}>
        <History />
      </BackgroundWrapper>
    </main>
  )
}
