import { historyFootball } from '../../model/historyFootball'
import s from './History.module.css'

export const History = () => {
  const historyList = historyFootball.historicalData.map((el, index) => {
    return (
      <li key={index} className={s.containerText}>
        <span className={s.year}>{el.slice(0, 5)}</span>
        <span className={s.text}>{el.slice(5)}</span>
      </li>
    )
  })

  return (
    <div className={s.container}>
      <div className={s.containerContent}>
        <h2 className={s.title}>Football History</h2>
        <ul> 
          {historyList} 
        </ul>
      </div>

    </div>
  )
}