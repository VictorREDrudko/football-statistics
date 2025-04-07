import { TitleCup } from '../titleCup/TitleCup'
import s from './TournamentTeams.module.css'
import { TrophyRow } from '../trophyRow/TrophyRow'
import { icons } from 'data/data'
import { Appearances } from './appearances/Appearances'
import { InfoCup } from 'data/type-nationalTeams'

type Props = {
  data: InfoCup
  title: string
  count: number
}

export const TournamentTeams = ({data, title, count}: Props) => {
  return (
    <div className={s.container}>
      <TitleCup title={title}/>
      <Appearances title='Appearances:' value={data.appearances} allValue={count}/>
      <TrophyRow title='Champions:' icon={icons.trophy.cup} value={data.champions.length} years={data.champions}/>
      <TrophyRow title='Runner-up:' icon={icons.trophy.medal} value={data.secondPlace.length} years={data.secondPlace}/>
    </div>
  )
}