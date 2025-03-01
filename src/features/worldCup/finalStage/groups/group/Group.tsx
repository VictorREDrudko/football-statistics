import { Team } from 'features/worldCup/team/Team'
import {  } from '../Groups'
import s from './Group.module.css'
import { StatisticTeam } from 'data/type-worldCupFinalStage'
import { headerTable } from 'data/worldCupFinalStage'

type GroupProps = {
  dataForGroup: Array<StatisticTeam> 
  year: string | undefined
  titleGroup: string
}

export const Group = ({dataForGroup, year, titleGroup}: GroupProps) => {
  const addHeaderTableGroup = headerTable.map((item, index) => {
    return <th key={index} className={s.headerTable} title={item.split(':')[0]}>{item.split(':')[1]}</th>
  })

  const addBodyTable = dataForGroup.map((item, index) => {
    const styleQualificationTeam = item.qualification === '+' ? {backgroundColor: 'rgba(24, 255, 0, 1)'} : undefined
    item.position = index + 1
      
    return (
      <tr key={index} className={s.bodyTable} style={styleQualificationTeam}>
        <th>{item.position}</th>
        <th> <Team name={item.team} year={year ? year.slice(0, 4) : ''} /></th>
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
      <caption className={s.titleTable}>{titleGroup}</caption>
      <thead>
        <tr>{addHeaderTableGroup}</tr>
      </thead>
      <tbody>{addBodyTable}</tbody>
    </table>
  )
}