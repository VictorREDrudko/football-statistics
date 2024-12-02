import s from './WorldCup1930.module.css'
import imageFifaWorldCup from './../../../../../image/background-world-cup-1930.png'
import { Background } from '../../../background/Background'
import { Statistics } from '../../statistics/Statistics'
import { InfoAboutWorldCup } from '../../worldCup/WorldCup'

export const WorldCup1930 = () => {
  return (
    <div className={s.wrapper}>
      <Background image={imageFifaWorldCup}/>
      <div className={s.content}>
        <Statistics/>
        <InfoAboutWorldCup/>
      </div>
    </div>
  )
}