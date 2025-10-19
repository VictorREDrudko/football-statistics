import { mainBigLogo } from '@/shared/assets'
import { BackgroundWrapper, Heading, TextElement } from '@/shared/ui'
import image from './assets/background-start.png'
import s from './StartPage.module.scss'
import { useAppSelector } from '@/shared/hooks'

export const StartPage = () => {
  const { title, text, backgroundPath } = useAppSelector(
    (state) => state['start-page']
  )

  return (
    <BackgroundWrapper imageUrl={image} className={s.container}>
      <div className={s.containerContent}>
        <Heading
          className={s.title}
          color="primary"
          size="9"
          weight="bold"
          align="center">
          {'football is life'}
        </Heading>
        <TextElement
          as="p"
          size="5"
          weight="regular"
          color="gray"
          align="center"
          className={s.description}>
          {'This project is about football'}
        </TextElement>
        <img className={s.image} src={mainBigLogo} alt="Main logo" />
      </div>
    </BackgroundWrapper>
  )
}
