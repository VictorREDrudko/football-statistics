import { Logo } from './logo/Logo'
import s from './Statistics.module.css'
import logoWorldCup1930 from './../../../../../assets/logo-world-cup/1930.png'
import { TournamentDetails } from './tournamentDetails/TournamentDetails'

export const Statistics = () => {
  return (
    <div className={s.wrapper}>
      <Logo pathImage={logoWorldCup1930}/>
      <TournamentDetails/>
    </div>
  )
}