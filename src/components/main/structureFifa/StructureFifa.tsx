import s from './StructureFifa.module.css'
import worldMapImage from './../../../image/map-fifa.png'
import { NavLink } from 'react-router-dom'

type StructureFifaType = {
  confederations: string[]
}

export const StructureFifa = ({confederations} : StructureFifaType) => {
  const mappedStructure = confederations.map((el, index) => {
    return (
      <li key={index} className={s.items}>
        <NavLink to={`/${el}`.toLowerCase()}>{el}</NavLink>
      </li>
    )
  })

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperLinks}>
        <NavLink to={'/fifa'} className={s.item}>FIFA</NavLink>
        <span className={s.text}>continental confederations</span>
        <ul className={s.containerLink}>{mappedStructure}</ul>
      </div>
      <div className={s.containerImg}>
        <img src={worldMapImage} alt='map' className={s.imageMap}/>
      </div>
    </div>
  )
}