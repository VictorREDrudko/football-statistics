import { useAppSelector } from '@/shared/hooks'
import { BackgroundWrapper } from '@/shared/ui'

import { AboutProject } from './about-project/AboutProject'

import s from './AboutPage.module.scss'

export const AboutPage = () => {
  const theme = useAppSelector((state) => state.theme.mode)
  const data = useAppSelector((state) => state['about-project'])

  const image = theme === 'dark' ? data.background.dark : data.background.light

  return (
    <main>
      <BackgroundWrapper imageUrl={image} className={s.wrapper}>
        <AboutProject />
      </BackgroundWrapper>
    </main>
  )
}
