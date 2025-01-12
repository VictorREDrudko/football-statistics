import s from './Info.module.css'
import worldMapImage from './../../../assets/map-fifa.png'
import { startPage } from 'data/data'

export const Info = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.containerText}>
        <h1>{startPage.title}</h1>
        <p className={s.text}>{startPage.text}</p>
      </div>
      <div className={s.containerImg}>
        <img src={worldMapImage} alt='map association football' className={s.imageMap}/>
      </div>
    </div>
  )
}