import { Logo } from './logo/Logo'
import s from './Statistics.module.css'
import logoWorldCup1930 from './../../../../../assets/logo-world-cup/1930.png'
import { TournamentDetails } from './tournamentDetails/TournamentDetails'

type StatisticsProps = {
  logo: string
}


export const Statistics = (props: StatisticsProps) => {
  return (
    <div className={s.wrapper}>
      <Logo pathImage={props.logo}/>
      <TournamentDetails/>
    </div>
  )
}