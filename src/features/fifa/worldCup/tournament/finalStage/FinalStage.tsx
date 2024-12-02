import { MatchType } from '../../../../../common/components/matchInfo/MatchInfo'
import s from './FinalStage.module.css'
import { Match } from './match/Match'

type FinalStageProps = {
  data: MatchType[]
}

export const FinalStage = (props: FinalStageProps) => {
  const mappedMatches = props.data.map(match => {
    return (
      <div key={match.id}>
        <Match teams={match.teams} score={match.score} id={match.id}/>
      </div>
    )
  })

  return (
    <div className={s.container}>{mappedMatches}</div>
  )
}