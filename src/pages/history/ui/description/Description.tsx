import s from './Description.module.css'
import mapFifaImage from './../../assets/map-fifa.png'
import { descriptionFootball } from '../../model/descriptionFootball'

export const Description = () => {
  const descriptionList = descriptionFootball.text.map((el, index) => {
    return (
      <li className={s.containerIconAndText} key={index}>
        <img src={descriptionFootball.iconsPath[index]} alt={'icon'}/>
        <span>{el}</span>
      </li>
    )
  })

  return (
    <div className={s.container}>
      <h1 className={s.title}>{descriptionFootball.title}</h1>
      <div className={s.containerContent}>
        <ul className={s.containerDescription}>
          {descriptionList}
        </ul>
        <div className={s.containerImg}>
          {/* <img src={mapFifaImage} alt='map association football' className={s.imageMap}/> */}
        </div>
      </div>
    </div>
  )
}