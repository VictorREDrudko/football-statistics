import s from './GroupTable.module.scss'
import { tableHeaderData } from '../model/tableHeaderData'
import { Title } from '@/shared'
import { CountryTeam } from '@/entities/countryTeam/ui/CountryTeam'
import { TeamTableData } from '@/widgets/national-championship/model/types'

type Props = {
  tableData: TeamTableData[]
  year: string
  groupName: string
}

export const GroupTable = ({ tableData, year, groupName }: Props) => {
  const tableHeader = tableHeaderData.map((title, index) => {
    return (
      <th key={index} className={s.tableHeader} title={title.split(':')[0]}>
        {title.split(':')[1]}
      </th>
    )
  })

  const tableBody = tableData.map((teamData, index) => {
    const styleQualification =
      teamData.qualification === '+'
        ? { backgroundColor: 'var(--color-primary-400)' }
        : {}

    return (
      <tr key={index} className={s.bodyTable} style={styleQualification}>
        <th>{teamData.position}</th>
        <th>
          {' '}
          <CountryTeam countryName={teamData.team} year={year} />
        </th>
        <th>{teamData.played}</th>
        <th>{teamData.won}</th>
        <th>{teamData.drawn}</th>
        <th>{teamData.lost}</th>
        <th>{teamData.goalsFor}</th>
        <th>{teamData.goalsAgainst}</th>
        <th>{teamData.goalsDifference}</th>
        <th>{teamData.points}</th>
        <th>{teamData.qualification}</th>
      </tr>
    )
  })

  return (
    <table className={s.table}>
      <caption>
        <Title title={groupName} variant="sub-stage" />
      </caption>
      <thead>
        <tr>{tableHeader}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  )
}
