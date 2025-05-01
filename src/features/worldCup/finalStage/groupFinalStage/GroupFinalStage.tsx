import { MatchesByStage } from '../../../../common/components/matchesByStage/MatchesByStage'
import { StageTitle } from '../../../../common/components/stageTitle/StageTitle'
import { TableGroup } from '../../../../common/components/tableGroup/TableGroup'
import { WorldCupMatch } from '../../../../data/worldCupData/type-worldCupData'
import { worldCupData } from '../../../../data/worldCupData/worldCupData'
import { getSortGroupNames, createGroupTableData } from '../../../../logics/worldCup/worldCupFinalStageLogic'
import s from './GroupFinalStage.module.css'

type Props = {
  groupStageMatches: WorldCupMatch[]
  year: string
}

export const GroupFinalStage = ({groupStageMatches, year}: Props) => {
  const groupNames = getSortGroupNames(groupStageMatches);

  const groupStage = groupNames.map((nameGroup, index) => {
    const groupMatches = groupStageMatches.filter((match) => match.stage.split(":")[0].trim() === nameGroup);
    const tableBodyData = createGroupTableData([], groupMatches);

    return (
      <div key={index} className={s.containerGroup}>
        <TableGroup tableBodyData={tableBodyData} year={year} nameGroup={nameGroup}/> 
        <MatchesByStage matches={groupMatches}/>
      </div>
    )
  })

  return (
    <div className={s.container} style={ {backgroundImage: `url(${worldCupData[year].background[0]})`} }>
      <StageTitle title={'Group final stage'}/>
      <div className={s.containerGroups}>
        {groupStage} 
      </div>
    </div>
  )
}