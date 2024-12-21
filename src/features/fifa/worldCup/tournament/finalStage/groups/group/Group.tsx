import { Team } from '../../match/team/Team'
import { StatisticTeam } from '../Groups'
import s from './Group.module.css'

type DataForHeaderTable = Array<string>

type GroupProps = {
  teamsInGroup: Array<StatisticTeam> 
  year: string
  titleGroup: string
}

const headerTable : DataForHeaderTable = ['position:№', 'team:T', 'played:Pl', 'won:W', 'drawn:D', 'lost:L', 'goalsFor:GF', 'goalsAgainst:GA', 'goalsDifference:GD', 'points:P', 'qualification:Q']



export const Group = (props: GroupProps) => {
  const headerTableGroup = headerTable.map((item, index) => {
    return <th key={index} className={s.headerTable} title={item.split(':')[0]}>{item.split(':')[1]}</th>
  })

  const addBodyTable = props.teamsInGroup.map((item, index) => {
    const styleQualificationTeam = item.qualification === '+' ? {backgroundColor: 'rgba(24, 255, 0, 1)'} : undefined
      
    return (
      <tr key={index} className={s.bodyTable} style={styleQualificationTeam}>
        <th>{item.position}</th>
        <th> <Team team={item.team} year={props.year.slice(0, 4)} /></th>
        <th>{item.played}</th>
        <th>{item.won}</th>
        <th>{item.drawn}</th>
        <th>{item.lost}</th>
        <th>{item.goalsFor}</th>
        <th>{item.goalsAgainst}</th>
        <th>{item.goalsDifference}</th>
        <th>{item.points}</th>
        <th>{item.qualification}</th>
      </tr>
    )
    })

  return (
    <table className={s.table}>
      <caption className={s.titleTable}>{props.titleGroup}</caption>
      <thead>
        <tr>{headerTableGroup}</tr>
      </thead>
      <tbody>{addBodyTable}</tbody>
    </table>
  )
}