import s from './ScoreMatchFlowchart.module.css'


type Props = {
  score: Array<number[]>
}

export const ScoreMatchFlowchart = ({score}: Props) => {
  // const matchScore: number[] | Array<number[]> = convertMatchScore(score);

  let resultScore: any[] = []

  // // вариант 1: без доп. времени и пенальти
  // if (typeof(matchScore[0]) === 'number' && score.length <= 3) {
  //   resultScore = [matchScore[0], matchScore[1]]
  // }

  // // вариант 2: доп. время (без пенальти)
  // if (Array.isArray(matchScore) && Array.isArray(matchScore[0]) && matchScore.length === 1 && score.length <= 3) {
  //   resultScore = [matchScore[0][0] + ' e.t.', matchScore[0][1]]
  // }

  // // вариант 3: пенальти (с доп. временем)
  // if (Array.isArray(matchScore) && matchScore.length === 2 && Array.isArray(matchScore[0]) && Array.isArray(matchScore[1]) && score.length <= 3) {
  //   resultScore = [matchScore[0][0] + ` (${matchScore[1][0]} p)`, matchScore[0][1] + ` (${matchScore[1][1]} p)`] 
  // }

  // // вариант 4: переигровка без доп. времени и пенальти
  // if (Array.isArray(matchScore) && matchScore.length === 3 && Array.isArray(matchScore[0]) && Array.isArray(matchScore[1]) && score.length > 3) {
  //   resultScore = [matchScore[0][0] + ` (${matchScore[1][0]})`, matchScore[0][1] + ` (${matchScore[1][1]})`] 
  // }

  // // вариант 5: переигровка c доп. временем и без пенальти
  // if (Array.isArray(matchScore) && matchScore.length === 4 && Array.isArray(matchScore[0]) && Array.isArray(matchScore[1]) && Array.isArray(matchScore[2]) && score.length > 3) {
  //   const resTeam1 = matchScore[1][0] + matchScore[2][0]
  //   const resTeam2 = matchScore[1][1] + matchScore[2][1]

  //   resultScore = [matchScore[0][0] + ` (${resTeam1} e.t.)`, matchScore[0][1] + ` (${resTeam2})`] 
  // }

  // // вариант 6: переигровка c пенальти ( и доп. временем)
  // if (Array.isArray(matchScore) && matchScore.length === 4 && Array.isArray(matchScore[0]) && Array.isArray(matchScore[1]) && Array.isArray(matchScore[2]) && Array.isArray(matchScore[3]) && score.length > 3) {
  //   const resTeam1 = matchScore[1][0] + matchScore[2][0]
  //   const resTeam2 = matchScore[1][1] + matchScore[2][1]

  //   resultScore = [matchScore[0][0] + `(${resTeam1}) ${matchScore[3][0]}p`, matchScore[0][1] + `(${resTeam2}) ${matchScore[3][1]}p`] 
  // }

  return (
    <>
      <span className={s.score}>{resultScore[0]}</span>
      <span className={s.score}>{resultScore[1]}</span>
    </>
  )
}