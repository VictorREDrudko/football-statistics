import s from './StructureFifa.module.css'
import worldMapImage from './../../../image/map-fifa.png'
import { NavLink } from 'react-router-dom'

type StructureFifaType = {
  confederations: string[]
}

export const StructureFifa = ({confederations} : StructureFifaType) => {
  return (
    <div className={s.wrapper}>
      <div className={s.containerText}>
        <h1>association football</h1>
        <p className={s.text}>Association football (or football / soccer) is a team sport played between two teams of 11 players each. 
          The objective of the game is to score more goals than the opposing team. 
          With an estimated 250 million players active in over 200 countries and territories, it is the world's most popular sport.</p>
      </div>
      <div className={s.containerImg}>
        <img src={worldMapImage} alt='map' className={s.imageMap}/>
      </div>
    </div>
  )
}