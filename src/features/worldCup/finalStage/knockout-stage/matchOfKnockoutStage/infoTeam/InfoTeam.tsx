import { Team } from 'features/worldCup/team/Team'
import s from './InfoTeam.module.css'
import { showScore } from 'data/worldCupFinalStage'

type Props = {
  name: string
  year: string
  score: Array<number[]>
  index: number
}

export const InfoTeam = ({name, year, score, index}: Props) => {
  const newScore: number[] | Array<number[]> = showScore(score)

  const mappedNewScore = newScore.map((score, ind) => {
    if(typeof(score) === 'number' && index === ind) {
      return <span key={ind}>{score}</span>
    }

    if(typeof(score) === 'object' && newScore.length === 1) {
      return <span>{score[index] + ' e.t.'}</span>
    } 
    
    if(typeof(score) === 'object' && newScore.length === 2) { 
      const addPen = ind === 0 ? '' : 'pen'
      const addScore = ind === 0 ? score[index] : `(${score[index]})`

      return (
        <span>{addScore + addPen}</span>
      ) 
    }
  })

  return (
    <div className={s.container}>
      <Team name={name} year={year}/>
      <div className={s.containerScore}>
         {mappedNewScore}
      </div>
    </div>
  )
}