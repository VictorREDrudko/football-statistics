import { showScore } from 'data/worldCupFinalStage'
import s from './Score.module.css'

export type ScoreProps = {
  score: Array<number[]>
}

export const Score = (props: ScoreProps) => {
  const newScore: number[] | Array<number[]> = showScore(props.score)
  let score = ''

  if (typeof(newScore[0]) === 'number') {
    score = `${newScore[0]} : ${newScore[1]}`
  }

  if (Array.isArray(newScore) && Array.isArray(newScore[0]) && newScore.length === 1) {
    score = `${newScore[0][0]} : ${newScore[0][1]} e.t.`
  }

  if (Array.isArray(newScore) && newScore.length === 2 && Array.isArray(newScore[0]) && Array.isArray(newScore[1])) {
    score = `${newScore[0][0]}(${newScore[1][0]}) : ${newScore[0][1]}(${newScore[1][1]})`
  }

  return (
    <div className={s.container}>
      <span className={s.score}>{score}</span>
    </div>
  )
}