import s from './DateAffiliation.module.css'

type Props = {
  iconPath: string
  year: string
}

export const DateAffiliation = ({iconPath, year}: Props) => {
  return (
    <div className={s.container}>
      <img src={iconPath} alt="icon calendar" className={s.icon}/>
      <span className={s.year}>{year}</span>
    </div>
  )
}