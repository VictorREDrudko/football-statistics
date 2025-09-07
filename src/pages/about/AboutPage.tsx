import { AboutProject, aboutProjectImage } from '@/entities/about-project'
import { BackgroundWrapper } from '@/shared/ui'
import s from './AboutPage.module.scss'

export const AboutPage = () => {
  return (
    <main>
      <BackgroundWrapper imageUrl={aboutProjectImage} className={s.wrapper}>
        <AboutProject />
      </BackgroundWrapper>
    </main>
  )
}
