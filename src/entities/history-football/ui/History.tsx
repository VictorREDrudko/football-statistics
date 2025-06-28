import { Heading, TextElement } from '@/shared'
import s from './History.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store/store'

export const History = () => {
  const { historicalDates } = useSelector((state: RootState) => state.historyFootball)

  const historyList = historicalDates.map((historicalData, index) => {
    return (
      <li key={index} className={s.containerText}>
        <TextElement as="span" size="5" weight="bold" color="green">
          {historicalData.slice(0, 5)}
        </TextElement>
        <TextElement as="span" size="5" weight="regular" color="ligth">
          {historicalData.slice(5)}
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
