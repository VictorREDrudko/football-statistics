import { useAppSelector } from '@/shared/hooks'
import { Heading, TextElement } from '@/shared/ui'

import s from './History.module.scss'

export const History = () => {
  const theme = useAppSelector((state) => state.theme.mode)
  const language = useAppSelector((state) => state.language.mode)
  const { en, ru } = useAppSelector((state) => state['history'])

  const title = language === 'en' ? en.title : ru.title
  const info = language === 'en' ? en.info : ru.info

  const historyList = info.map((text, index) => {
    return (
      <li key={index} className={s.containerText}>
        <TextElement as="span" size="5" weight="bold" color="green">
          {text.slice(0, 5)}
        </TextElement>
        <TextElement as="span" size="5" weight="regular" color="ligth">
          {text.slice(5)}
        </TextElement>
      </li>
    )
  })

  return (
    <div className={s.container}>
      <div className={s.containerContent}>
        <Heading color="primary" size="8" weight="bold" className={s.title}>
          {title}
        </Heading>
        <ul>{historyList}</ul>
      </div>
    </div>
  )
}
