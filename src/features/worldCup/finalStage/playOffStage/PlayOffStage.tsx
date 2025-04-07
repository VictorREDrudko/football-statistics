import s from './PlayOffStage.module.css'
import { WorldCupMatch } from 'data/worldCupData/type-worldCupData'
import { worldCupData } from 'data/worldCupData/worldCupData'
import { StageTitle } from 'common/components/stageTitle/StageTitle'
import { MatchesByStage } from 'common/components/matchesByStage/MatchesByStage'
import { SubStageTitle } from 'common/components/subStageTitle/SubStageTitle'
import { FlowchartPlayOffStage } from './flowchartPlayOffStage/FlowchartPlayOffStage'
import { getUniqueStagePlayOff } from 'logics/worldCup/WorldCupFinalStageLogic'

type Props = {
  year: string
  playOffStageMatches: WorldCupMatch[]
}

export const PlayOffStage = ({year, playOffStageMatches} : Props) => {
  const playOffStages = getUniqueStagePlayOff(playOffStageMatches);

  const playOffMatches = playOffStages.map((nameStage, index) => {
    const matchesPlayoffStage = playOffStageMatches.filter(match => match.stage === nameStage);

    return (
      <div className={s.containerMatchesStagePlayOff} key={index}>
        <SubStageTitle title={nameStage.split(":")[1]}/>
        <MatchesByStage matches={matchesPlayoffStage}/>
      </div>
    )
  })

  return (
    <div className={s.container} style={ {backgroundImage: `url(${worldCupData[year].background[0]})`} }>
      <StageTitle title={'Knockout stage'}/>
      <div className={s.containerMatchesPlayOff}>
        {playOffMatches}
      </div>
      <div className={s.containerFlowchart}>
        <FlowchartPlayOffStage matches={playOffStageMatches} playOffStages={playOffStages}/>
        <div className={s.wrapperFlowchart} ></div>
      </div>
    </div>
  )
}
