import { BackgroundWrapper, Heading, TextElement } from '@/shared/ui'

import s from './StartPage.module.scss'
import { useAppSelector } from '@/shared/hooks'

export const StartPage = () => {
  const theme = useAppSelector((state) => state.theme.mode)
  const language = useAppSelector((state) => state.language.mode)

  const { en, ru, backgroundPath, logoPath } = useAppSelector(
    (state) => state['start-page']
  )

  const image = theme === 'dark' ? backgroundPath.dark : backgroundPath.light

  const logo = theme === 'dark' ? logoPath.dark : logoPath.light
  const title = language === 'en' ? en.title : ru.title
  const subtitle = language === 'en' ? en.subtitle : ru.subtitle
  const text = language === 'en' ? en.text : ru.text

  return (
    <BackgroundWrapper imageUrl={image} className={s.container}>
      <div className={s.containerContent}>
        <Heading
          className={s.title}
          color="primary"
          size="9"
          weight="bold"
          align="center">
          {title}
        </Heading>
        <TextElement
          as="p"
          size="5"
          weight="regular"
          color="gray"
          align="center"
          className={s.subtitle}>
          {subtitle}
        </TextElement>
        <img className={s.image} src={logo} alt="Main logo" />
        <TextElement
          as="p"
          size="3"
          weight="regular"
          color="gray"
          align="right"
          className={s.text}>
          {text}
        </TextElement>
      </div>
    </BackgroundWrapper>
  )
}
