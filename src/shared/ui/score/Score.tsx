import { convertMatchScore } from '@/logics/score/convertMatchScore';
import s from './Score.module.scss'
import { MatchScore } from '@/shared/model/match/types';

export type Props = {
  score: Array<number[]>
}

export const Score = ({score}: Props) => {
  const matchScore: MatchScore = convertMatchScore(score);

  return (
    <div className={s.container}>
      <span className={s.teamGoals}>{matchScore.firstTeamGoals}</span>
      <span className={s.extraDataTeamGoals}>{matchScore.extraDataTeamGoals}</span>
      <span className={s.teamGoals}>{matchScore.secondTeamGoals}</span>
    </div>
  )
}