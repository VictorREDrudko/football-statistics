import s from './Background.module.css'

type BackgroundType = {
  image: string
}

export const Background = ({image}: BackgroundType) => {
  return (
    <div className={s.container}>
      <img src={image} alt={`${image}`} className={s.image}/>
    </div>
  )
}