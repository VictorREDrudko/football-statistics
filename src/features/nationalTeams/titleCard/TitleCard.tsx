import s from './TitleCard.module.css'

type TitleCardProps = {
  flag: string
  name: string
  icon: string
}

export const TitleCard = ({flag, name, icon}: TitleCardProps) => {
  return (
    <div className={s.container}>
      <img className={s.flag} src={flag} alt={`${name} flag picture` } />
      <h3 className={s.title}>{name}</h3>
      <img className={s.icon} src={icon} alt={`${name} football association icon`} />
  </div>
  )
}