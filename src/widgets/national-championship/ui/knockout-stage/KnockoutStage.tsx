import { MatchInfo, Title } from '@/shared'
import s from './KnockoutStage.module.scss'
import { getUniqueStage } from '../../lib/getUniqueStage'
import { MatchesByStage } from '@/entities/matchesByStage/MatchesByStage'
import { Flowchart } from './flowchart/Flowchart'
import { ConfederationCode } from '@/entities'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

type Props = {
  background: string[]
  matches: MatchInfo[]
  organizationCode: ConfederationCode 
}

export const KnockoutStage = ({background, matches, organizationCode} : Props) => {
  const uniqueStages = getUniqueStage(matches)
  const isEvenNumberStages = uniqueStages.length % 2 === 0

  const finalMatch = matches.filter(match => match.stage === tournamentStages.final)
  const thirdPlaceMatch = matches.filter(match => match.stage === tournamentStages.place3)
  const regularStages = isEvenNumberStages 
    ? uniqueStages 
    : uniqueStages.filter(stageName => ![tournamentStages.final, tournamentStages.place3].includes(stageName))

  const renderRegularStages = regularStages.map((stageName) => {
    const stageMatches = matches.filter(match => match.stage === stageName)
    return (
      <div className={s.containerStage} key={stageName}>
        <Title title={stageName.split(":")[1]} variant='sub-stage'/>
        <MatchesByStage matches={stageMatches}/>
      </div>
    )
  })

  const renderFinalAndThirdPlace = !isEvenNumberStages && (
    <div className={s.containerStage}>
      {finalMatch && (
        <>
          <Title title={tournamentStages.final.split(":")[1]} variant='sub-stage'/>
          <MatchesByStage matches={finalMatch}/>
        </>
      )}
      {thirdPlaceMatch && (
        <div className={s.thirdPlaceContainer}>
          <Title title={tournamentStages.place3.split(":")[1]} variant='sub-stage'/>
          <MatchesByStage matches={thirdPlaceMatch}/>
        </div>
      )}
    </div>
  )

  return (
    <div className={s.container} style={ {backgroundImage: `url(${background[0]})`} }>
      <Title title={'Knockout stage'}/>
      <div className={s.containerStages}>
        {renderRegularStages}
        {renderFinalAndThirdPlace}
      </div>
      <div className={s.containerFlowchart}>
        <Flowchart matches={matches} stages={uniqueStages} organizationCode={organizationCode}/>
        <div className={s.wrapperFlowchart} ></div>
      </div>
    </div>
  )
}