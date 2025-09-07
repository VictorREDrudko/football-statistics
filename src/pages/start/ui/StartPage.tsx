import s from './StartPage.module.scss'
import image from '../assets/background-start.png'
import { BackgroundWrapper } from '@/shared/ui/background-wrapper/BackgroundWrapper'
import { TextElement } from '@/shared/ui/text-element/TextElement'
import { Heading } from '@/shared/ui/heading/Heading'

export const StartPage = () => {
  return (
    <BackgroundWrapper imageUrl={image} className={s.wrapper}>
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
        <img className={s.image} src={'mainBigLogo'} alt="Main logo" />
      </div>
    </BackgroundWrapper>
  )
}
