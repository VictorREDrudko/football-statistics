import { showScore } from 'data/worldCupFinalStage'
import s from './ScoreInMatch.module.css'

export type ScoreType = number[]

type ScoreInMatchProps = {
  score: ScoreType[]
}

export const ScoreInMatch = ({score}: ScoreInMatchProps) => {
  const newScore: number[] | Array<number[]> = showScore(score)
  let score1 = ''

  let index = Array.isArray(newScore) && newScore.length === 2 && Array.isArray(newScore[0]) && Array.isArray(newScore[1])
     ? `(${newScore[1][0]}) : (${newScore[1][1]}) pen` :
    typeof(newScore[0]) === 'number' ? '' : 'e.t.'

  if (typeof(newScore[0]) === 'number') {
    score1 = `${newScore[0]} : ${newScore[1]}`
  }

  if (Array.isArray(newScore) && Array.isArray(newScore[0]) && newScore.length === 1) {
    score1 = `${newScore[0][0]} : ${newScore[0][1]}`
  }

  if (Array.isArray(newScore) && newScore.length === 2 && Array.isArray(newScore[0]) && Array.isArray(newScore[1])) {
    score1 = `${newScore[0][0]} : ${newScore[0][1]}`
  }

  return (
    <div className={s.container}>
      <span className={s.score}>{score1}</span>
      <span className={s.index}>{index}</span>
    </div>
  )
}