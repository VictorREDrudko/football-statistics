import { CountryTeam } from 'common/components/countryTeam/CountryTeam'
import s from './ScoreMatchFlowchart.module.css'
import { convertMatchScore } from 'logics/worldCup/WorldCupFinalStageLogic'

type Props = {
  score: Array<number[]>
}

export const ScoreMatchFlowchart = ({score}: Props) => {
  const matchScore: number[] | Array<number[]> = convertMatchScore(score);

  let resultScore: any[] = []

  // вариант 1: без доп. времени и пенальти
  if (typeof(matchScore[0]) === 'number') {
    resultScore = [matchScore[0], matchScore[1]]
  }

  // вариант 2: доп. время (без пенальти)
  if (Array.isArray(matchScore) && Array.isArray(matchScore[0]) && matchScore.length === 1) {
    resultScore = [matchScore[0][0] + ' e.t.', matchScore[0][1]]
  }

  // вариант 3: пенальти (с доп. временем)
  if (Array.isArray(matchScore) && matchScore.length === 2 && Array.isArray(matchScore[0]) && Array.isArray(matchScore[1])) {
    resultScore = [matchScore[0][0] + ` (${matchScore[1][0]})`, matchScore[0][1] + ` (${matchScore[1][1]})`] 
  }

  return (
    <>
      <span>{resultScore[0]}</span>
      <span>{resultScore[1]}</span>
    </>
  )
}