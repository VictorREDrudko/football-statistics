import { StatisticWorldCup } from '../../../../../../app/App'
import s from './TournamentDetails.module.css'

type TournamentDetailsProps = {
  statistic: StatisticWorldCup
}

const titleTable = ['Host country:', 'Teams (final stage):', 'Teams (qualification):', 'Matches played:', 'Goals scored:', 'Goals per match:', 'Top scorer', 'Top scorer goals']


export const TournamentDetails = (props: TournamentDetailsProps) => {
  const mappedItems = titleTable.map((str, index) => {
    return <li key={index} className={s.titleItem}>{str}</li>
  })

  const valueTable = Object.values(props.statistic).map((str, index) => {
    return <li key={index} className={s.valueItem}>{str}</li>
  })

  return (
    <div className={s.wrapper}>
      <h2>Tournament details</h2>
      <div className={s.wrapperContent}>
        <ul>{mappedItems}</ul>
        <ul>{valueTable}</ul>
      </div>
    </div>
  )
}