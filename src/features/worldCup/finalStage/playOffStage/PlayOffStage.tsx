import s from './PlayOffStage.module.css'
import { WorldCupMatch } from 'data/worldCupData/type-worldCupData'
import { worldCupData } from 'data/worldCupData/worldCupData'
import { StageTitle } from 'common/components/stageTitle/StageTitle'
import { MatchesByStage } from 'common/components/matchesByStage/MatchesByStage'
import { SubStageTitle } from 'common/components/subStageTitle/SubStageTitle'
import { FlowchartPlayOffStage } from './flowchartPlayOffStage/FlowchartPlayOffStage'
import { filterFinalAnd3PlaceMatches, filterMatchesPlayoff, getUniqueStagePlayOff } from 'logics/worldCup/worldCupFinalStageLogic'

type Props = {
  year: string
  playOffStageMatches: WorldCupMatch[]
}

export const PlayOffStage = ({year, playOffStageMatches} : Props) => {
  const playOffStages = getUniqueStagePlayOff(playOffStageMatches);
  const finalAnd3PlaceMatches = filterFinalAnd3PlaceMatches(playOffStageMatches)
  const playoffMatches = filterMatchesPlayoff(playOffStageMatches)

  let finalAnd3PlaceTitle = ''

  finalAnd3PlaceMatches.forEach((match) => {
    finalAnd3PlaceTitle += match.stage.split(":")[1] + ' and '
  })

  const title = finalAnd3PlaceTitle.trim().replace(/\b(and)\b\s*$/, '')




  const playOffMatches = playOffStages.map((nameStage, index) => {
    if(nameStage === '1:final' || nameStage === '2:third place play-off') return;
    const matchesPlayoffStage = playoffMatches.filter(match => match.stage === nameStage);

    return(
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
        <div className={s.containerMatchesFinalStage}>
          <SubStageTitle title={title}/>
          <MatchesByStage matches={finalAnd3PlaceMatches}/>
        </div>
      </div>
      <div className={s.containerFlowchart}>
        <FlowchartPlayOffStage matches={playOffStageMatches} playOffStages={playOffStages}/>
        <div className={s.wrapperFlowchart} ></div>
      </div>
    </div>
  )
}
