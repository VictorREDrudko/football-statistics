import { AboutContent } from '@/entities'
import s from './AboutPage.module.scss'
import image from '../assets/background-football.png'
import { BackgroundWrapper } from '@/shared'

export const AboutPage = () => {
  return (
    <main>
      <BackgroundWrapper imageUrl={image} className={s.wrapper}>
        <AboutContent />
      </BackgroundWrapper>
    </main>
  )
}
