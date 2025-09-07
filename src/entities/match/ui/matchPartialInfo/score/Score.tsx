import { MatchScore } from '../../model/types'
import s from './Score.module.scss'

type Props = {
  score: MatchScore
}

export const Score = ({ score }: Props) => {
  const { team1Goals, team2Goals, extraData } = score
  return (
    <div className={s.container}>
      <span className={s.teamGoals}>{team1Goals}</span>
      <span className={s.extra}>{extraData}</span>
      <span className={s.teamGoals}>{team2Goals}</span>
    </div>
  )
}
