import { MatchScore } from '@/shared/model/tournament-config/class-match/types';
import s from './Score.module.scss'
import { convertMatchScore } from '@/shared/lib/helpers/convertMatchScore';

export type Props = {
  score: Array<number[]>
}

export const Score = ({score}: Props) => {
  const matchScore: MatchScore = convertMatchScore(score);

  return (
    <div className={s.container}>
      <span className={s.teamGoals}>{matchScore.team1Goals}</span>
      <span className={s.extra}>{matchScore.extraData}</span>
      <span className={s.teamGoals}>{matchScore.team2Goals}</span>
    </div>
  )
}