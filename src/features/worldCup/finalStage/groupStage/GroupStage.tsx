import s from './GroupStage.module.css'
import { WorldCupMatch } from 'data/worldCupData/type-worldCupData'
import { createGroupTableData, getSortGroupNames } from 'logics/worldCup/worldCupFinalStageLogic'
import { worldCupData } from 'data/worldCupData/worldCupData'
import { StageTitle } from 'common/components/stageTitle/StageTitle'
import { TableGroup } from 'common/components/tableGroup/TableGroup'
import { MatchesByStage } from 'common/components/matchesByStage/MatchesByStage'

type Props = {
  groupStageMatches: WorldCupMatch[]
  qualifiedTeamsForPlayoff: string[]
  year: string
}

export const GroupStage = ({groupStageMatches, qualifiedTeamsForPlayoff, year}: Props) => {
  const groupNames = getSortGroupNames(groupStageMatches);

  const groupStage = groupNames.map((nameGroup, index) => {
    const groupMatches = groupStageMatches.filter((match) => match.stage === nameGroup);
    const tableBodyData = createGroupTableData(qualifiedTeamsForPlayoff, groupMatches);
    
    return (
      <div key={index} className={s.containerGroup}>
        <div className={s.tableWrapper}>
          <TableGroup tableBodyData={tableBodyData} year={year} nameGroup={nameGroup}/> 
        </div>
        <MatchesByStage matches={groupMatches}/>
      </div>
    )
  })

  return (
    <div className={s.container} style={ {backgroundImage: `url(${worldCupData[year].background[1]})`} }>
      <StageTitle title={'Group stage'}/>
      <div className={s.containerGroups}>
        {groupStage} 
      </div>
    </div>
  )
}