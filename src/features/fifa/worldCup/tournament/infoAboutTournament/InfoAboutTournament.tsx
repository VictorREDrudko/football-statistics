import { InfoFifaWorldCup } from '../../../../../app/App'
import s from './InfoAboutTournament.module.css'

type InfoAboutTournamentProps = {
  info: InfoFifaWorldCup
  ball: string
}

export const InfoAboutTournament = (props: InfoAboutTournamentProps) => {
  const mappedInfo = props.info.peculiarities.map((str: string, index) => {
    return <p className={s.text} key={index}>{str}</p>
  })

  return (
    <div className={s.container}>
      <div>
        <img className={s.imag} src={props.ball} alt="ball" />
      </div>
      <h1 className={s.title}>{props.info.title}</h1>
      <div className={s.containerText}>
        <p>{props.info.dates}</p>
        <div>{mappedInfo}</div>
      </div>
    </div>
  )
}