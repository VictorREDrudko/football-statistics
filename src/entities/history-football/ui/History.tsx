import { Heading, TextElement } from '@/shared'
import { historyFootball } from '../model/historyFootball'
import s from './History.module.scss'

export const History = () => {
  const historyList = historyFootball.historicalData.map((el, index) => {
    return (
      <li key={index} className={s.containerText}>
        <TextElement as="span" size="5" weight="bold" color="green">
          {el.slice(0, 5)}
        </TextElement>
        <TextElement as="span" size="5" weight="regular" color="ligth">
          {el.slice(5)}
        </TextElement>
      </li>
    )
  })

  return (
    <div className={s.container}>
      <div className={s.containerContent}>
        <Heading color="primary" size="8" weight="bold" className={s.title}>
          {'Football History'}
        </Heading>
        <ul>{historyList}</ul>
      </div>
    </div>
  )
}
