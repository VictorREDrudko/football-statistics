import { CountryTeam } from '../countryTeam/CountryTeam'
import { SubStageTitle } from '../subStageTitle/SubStageTitle'
import s from './TableGroup.module.css'
import { TableHeader } from './type-TableHeader'
import { tableHeaderData } from 'data/tableHeaderData'

type Props = {
  tableBodyData: Array<TableHeader> 
  year: string
  nameGroup: string
}

export const TableGroup = ({tableBodyData, year, nameGroup}: Props) => {
  const tableHeader = tableHeaderData.map((title, index) => {
    return <th key={index} className={s.tableHeader} title={title.split(':')[0]}>{title.split(':')[1]}</th>
  })

  const bodyTable = tableBodyData.map((item, index) => {
    const styleQualificationTeam = item.qualification === '+' ? {backgroundColor: 'var(--accent-main-transparent50)'} : undefined
    item.position = index + 1

    return (
      <tr key={index} className={s.bodyTable} style={styleQualificationTeam}>
        <th>{item.position}</th>
        <th> <CountryTeam countryName={item.team} year={year} reverse={false}/></th>
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
      <caption>
        <SubStageTitle title={nameGroup}/>
      </caption>
      <thead>
        <tr>{tableHeader}</tr>
      </thead>
      <tbody>{bodyTable}</tbody>
    </table>
  )
}