import s from './ChampionshipGroupRound.module.scss'

import { MatchesByStage } from '@/entities/matchesByStage/MatchesByStage'
import { sortGroupNames } from '../../lib/sortGroupNames'
import { createGroupTableData } from '../../lib/createGroupTableData'
import { MatchInfo } from '@/features/matchDisplay'
import { GroupTable } from '@/entities/group-table/ui/GroupTable'
import { Title } from '@/shared/ui/title/Title'


type Props = {
  background: string
  matches: MatchInfo[]
  qualifiedTeams: string[]
  year: string
}

export const ChampionshipGroupRound = ({
  background,
  matches,
  qualifiedTeams,
  year,
}: Props) => {
  const groupNames = sortGroupNames(matches)

  const groupsData = groupNames.map((groupName, index) => {
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
      style={{ backgroundImage: `url(${background})` }}>
      <Title title={'Group stage'} variant="stage" />
      <div className={s.containerGroups}>{groupsData}</div>
    </div>
  )
}
