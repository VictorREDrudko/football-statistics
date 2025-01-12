import { startPage } from 'data/data'
import s from './History.module.css'

export const History = () => {
  const mappedFootballHistory = startPage.historicalData.map((el, index) => {
    return (
      <li key={index}>
        <span className={s.year}>{el.slice(0, 5)}</span>
        <span className={s.text}> - {el.slice(5)}</span>
      </li>
    )
  })

  return (
    <div className={s.container}>
      <h2 className={s.title}>History</h2>
      <ul> {mappedFootballHistory} </ul>
    </div>
  )
}