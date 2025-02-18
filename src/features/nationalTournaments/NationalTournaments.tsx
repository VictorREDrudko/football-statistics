import { icons } from 'data/data'
import s from './NationalTournaments.module.css'
import { CircleConfederCup } from './circleConfederCup/CircleConfederCup'
import { CircleWorldCup } from './circleWorldCup/CircleWorldCup'


export const NationaleTournaments = () => {
  return (
  <div className={s.container}>
    <CircleWorldCup/>
    <CircleConfederCup title={'European Championship'} icon={icons.trophyTournaments.iconUefaCup}/>
    <CircleConfederCup title={'Africa Cup of Nations'} icon={icons.trophyTournaments.iconCafCup}/>
    <CircleConfederCup title={'CONMEBOL Copa América'} icon={icons.trophyTournaments.iconConmebolCup}/>
    <CircleConfederCup title={'AFC Asian Cup'} icon={icons.trophyTournaments.iconAfcCup}/>
    <CircleConfederCup title={'CONCACAF Gold Cup'} icon={icons.trophyTournaments.iconConcacafCup}/>
    <CircleConfederCup title={'OFC Nations Cup'} icon={icons.trophyTournaments.iconOfcCup}/>
  </div>
  )
}