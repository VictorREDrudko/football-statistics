import s from './Info.module.css'
import worldMapImage from './../../../assets/map-fifa.png'
import { startPage } from 'data/data'

export const Info = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{startPage.title}</h1>
      <div className={s.container}>
        <div className={s.containerPitch}>
          <p className={s.text}>{startPage.text}</p>
          <div className={s.containerImgPitch}>
            <img src={startPage.img} alt='pitch' className={s.imageMap}/>
          </div>
        </div>
        <div className={s.containerImg}>
          <img src={worldMapImage} alt='map association football' className={s.imageMap}/>
        </div>
      </div>
    </div>
  )
}