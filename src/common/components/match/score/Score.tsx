import { MatchScore, convertMatchScore } from '../../../../logics/score/convertMatchScore';
import s from './Score.module.css'

export type Props = {
  score: Array<number[]>
}

export const Score = ({score}: Props) => {
  const matchScore: MatchScore = convertMatchScore(score);
  
  // let resultScore = ''

  // // вариант 1: без доп. времени и пенальти
  // if (typeof(matchScore[0]) === 'number') {
  //   resultScore = `${matchScore[0]} : ${matchScore[1]}`
  // }

  // // вариант 2: доп. время (без пенальти)
  // if (Array.isArray(matchScore) && Array.isArray(matchScore[0]) && matchScore.length === 1) {
  //   resultScore = `${matchScore[0][0]} : ${matchScore[0][1]} e.t.`
  // }

  // // вариант 3: пенальти (с доп. временем)
  // if (Array.isArray(matchScore) && matchScore.length === 2 && Array.isArray(matchScore[0]) && Array.isArray(matchScore[1])) {
  //   resultScore = `${matchScore[0][0]}(${matchScore[1][0]}) : ${matchScore[0][1]}(${matchScore[1][1]})`
  // }

  // // вариант 4: матч не состоялся
  // if (matchScore.length === 0) {
  //   resultScore = `w/o`
  // }

  return (
    <div className={s.container}>
      {/* <span className={s.score}>{resultScore}</span> */}
      <span className={s.teamGoals}>{matchScore.firstTeamGoals}</span>
      {/* <span className={s.extraDataTeamGoals}>pen 5 : 4</span> */}
      <span className={s.extraDataTeamGoals}>{matchScore.extraDataTeamGoals}</span>
      {/* <span className={s.extraDataTeamGoals}>:</span> */}
      <span className={s.teamGoals}>{matchScore.secondTeamGoals}</span>
    </div>
  )
}