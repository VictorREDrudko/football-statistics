import s from './GroupRound.module.scss'
import { GroupTable } from '@/entities'
import { Title } from '@/shared'
import { MatchesByStage } from '@/entities/matchesByStage/MatchesByStage'
import { sortGroupNames } from '../../lib/sortGroupNames'
import { createGroupTableData } from '../../lib/createGroupTableData'
import { MatchInfo } from '@/shared/model'

type Props = {
  background: string[]
  matches: MatchInfo[]
  qualifiedTeams: string[]
  year: string
}

export const GroupRound = ({
  background,
  matches,
  qualifiedTeams,
  year,
}: Props) => {
  const groupNames = sortGroupNames(matches)

  const groups = groupNames.map((groupName, index) => {
    // add the data for each group
    const groupMatches = matches.filter((match) => match.stage === groupName)
    const tableData = createGroupTableData(qualifiedTeams, groupMatches)

    return (
      <div key={index} className={s.containerGroup}>
        <div className={s.tableWrapper}>
          <GroupTable tableData={tableData} year={year} groupName={groupName} />
        </div>
        <MatchesByStage matches={groupMatches} />
      </div>
    )
  })

  return (
    <div
      className={s.container}
      style={{ backgroundImage: `url(${background[1]})` }}>
      <Title title={'Group stage'} variant="stage" />
      <div className={s.containerGroups}>{groups}</div>
    </div>
  )
}
