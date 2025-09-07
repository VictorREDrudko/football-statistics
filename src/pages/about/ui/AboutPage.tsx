import s from './AboutPage.module.scss'
import image from '../assets/background-football.png'
import { AboutContent } from '@/entities/about/ui/AboutContent'
import { BackgroundWrapper } from '@/shared/ui/background-wrapper/BackgroundWrapper'


export const AboutPage = () => {
  return (
    <main>
      <BackgroundWrapper imageUrl={image} className={s.wrapper}>
        <AboutContent />
      </BackgroundWrapper>
    </main>
  )
}
