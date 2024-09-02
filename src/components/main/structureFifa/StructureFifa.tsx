import s from './StructureFifa.module.css'
import worldMapImage from './../../../image/map-fifa.png'

type StructureFifaType = {
  confederations: string[]
}

export const StructureFifa = ({confederations} : StructureFifaType) => {
  const mappedStructure = confederations.map((el, index) => {
    return (
      <li key={index} className={s.items}>
        <a>{el}</a>
      </li>
    )
  })

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperLinks}>
        <a className={s.item}>FIFA</a>
        <span className={s.text}>continental confederations</span>
        <ul className={s.containerLink}>{mappedStructure}</ul>
      </div>
      <div className={s.containerImg}>
        <img src={worldMapImage} alt='map' className={s.imageMap}/>
      </div>
    </div>
  )
}