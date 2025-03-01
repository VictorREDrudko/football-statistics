import s from './Team.module.css'
import { getCountryAttribut, nationalTeams } from 'data/data'

type TeamProps = {
  name: string
  year: string
}

export const Team = ({name, year}: TeamProps) => {
  console.log(name)
  const flag = getCountryAttribut(nationalTeams[name].flag, year)

  return (
    <div className={s.container}>
      <img src={flag} alt="flag" className={s.img}/>
      <span className={s.title}>{name}</span>
    </div>
  )
}