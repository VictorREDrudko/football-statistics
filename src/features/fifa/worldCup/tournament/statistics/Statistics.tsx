import { Logo } from './logo/Logo'
import s from './Statistics.module.css'
import logoWorldCup1930 from './../../../../../assets/logo-world-cup/1930.png'
import { TournamentDetails } from './tournamentDetails/TournamentDetails'
import { StatisticWorldCup } from 'data/type-data'


type StatisticsProps = {
  logo: string
  statistic: StatisticWorldCup
}


export const Statistics = (props: StatisticsProps) => {
  return (
    <div className={s.wrapper}>
      <Logo pathImage={props.logo}/>
      <TournamentDetails statistic={props.statistic}/>
    </div>
  )
}