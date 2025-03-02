import s from './Team.module.css'
import { getCountryAttribut, nationalTeams } from 'data/data'

type TeamProps = {
  name: string
  year: string
  spanStyle?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}

export const Team = ({name, year, spanStyle, imgStyle}: TeamProps) => {
  const flag = getCountryAttribut(nationalTeams[name].flag, year)

  return (
    <div className={s.container}>
      <img src={flag} alt="flag" className={s.img} style={imgStyle}/>
      <span className={s.title} style={spanStyle}>{name}</span>
    </div>
  )
}