import s from './FootballHistory.module.css'

type FootballHistoryType = {
  historyFootball: string[]
}

export const FootballHistory = ({historyFootball} : FootballHistoryType) => {
  const mappedFootballHistory = historyFootball.map((el, index) => {
    return (
      <li key={index}>
        <span className={s.year}>{el.slice(0, 5)}</span>
        <span> - {el.slice(5)}</span>
      </li>
    )
  })

  return (
    <div>
      <h2 className={s.title}>History</h2>
      <ul>
        {mappedFootballHistory}
      </ul>
    </div>
  )
}