import { useAppSelector } from '@/shared/hooks'
import { BackgroundWrapper } from '@/shared/ui'

import { History } from './history/History'

import s from './HistoryFootballPage.module.scss'

export const HistoryFootballPage = () => {
  const theme = useAppSelector((state) => state.theme.mode)
  const { background } = useAppSelector((state) => state['history'])

  const image = theme === 'dark' ? background.dark : background.light

  return (
    <BackgroundWrapper imageUrl={image} className={s.container}>
      <History />
    </BackgroundWrapper>
  )
}
