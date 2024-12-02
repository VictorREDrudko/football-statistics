import s from './ScoreInMatch.module.css'

export type ScoreType = number[]

type ScoreInMatchProps = {
  score: ScoreType[]
}

export const ScoreInMatch = (props: ScoreInMatchProps) => {
  const mappedScore = props.score.map((sc, index) => {
    if (index === 1) {
      return sc.length === 2 ? 
      <div>
        <span className={s.pen} key={index}>{sc[0] + ' : ' + sc[1]}</span>
        <span className={s.ind}>{' e.t.'}</span>
      </div> : ''
    }

    if (index === 2) {
      return sc.length === 2 ? 
        <div>
          <span className={s.pen} key={index}>{sc[0] + ' : ' + sc[1]}</span>
          <span className={s.ind}>{' pen.'}</span>
        </div> : ''
    }

    return sc.length === 2 ? <span className={s.main} key={index}>{sc[0] + ' : ' + sc[1]}</span> : ''
  })
  
  return (
    <div className={s.container}>
      {mappedScore}
    </div>
  )
}