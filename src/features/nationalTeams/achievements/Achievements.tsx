import { AchievementsType } from 'data/type-data'
import { TitleItem } from '../titleItem/TitleItem'
import s from './Achievements.module.css'
import { TournamentTeams } from './tournamentTeam/TournamentTeams'
import { countWorldCup, uefaCup } from 'data/data'

type Props = {
  data: AchievementsType
}

export const Achievements = ({data}: Props) => {
  return (
    <div className={s.container}>
      <TitleItem title="Achievements"/>
      <TournamentTeams data={data.worldCup} title='World Cup' count={countWorldCup}/>
      <TournamentTeams data={data.confederationsCup} title='Confederations Cup' count={uefaCup}/>
    </div>
  )
}