import s from './TournamentDetails.module.css'

const items = ['Host country:', 'Teams in the final stage:', 'Teams in qualification:', 'Matches played:', 'Goals scored:', 'Goals per match:']
const stat = ['Uruguay', '13', '-', '18', '70', '3.89']

export const TournamentDetails = () => {
  const mappedItems = items.map((el, index) => {
    return (
      <div key={index}>
        <li className={s.item1}>{el}</li>
        <div className={s.line}></div>
      </div>
    )
  })

  const mappedStat = stat.map((el, index) => {
    return (
      <div key={index}>
        <li className={s.item2}>{el.toUpperCase()}</li>
        <div className={s.line}></div>
      </div>
    )
  })

  return (
    <div className={s.wrapper}>
      <h2>1930 FIFA World Cup details</h2>
      <div className={s.wrapperContent}>
        <ul>{mappedItems}</ul>
        <ul>{mappedStat}</ul>
      </div>

    </div>
  )
}