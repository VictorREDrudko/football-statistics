import { Flag } from '@/entities'
import s from './HeaderCard.module.css'

type Props = {
  countryName: string
  icon: string
  year: string
}

export const HeaderCard = ({countryName, icon, year}: Props) => {
  return (
    <div className={s.container}>
      <Flag year={year} countryName={countryName}/>
      <div>
        <h3 className={s.title}>{countryName}</h3>
        <span className={s.description}>Football Association</span>
      </div>
      <img className={s.icon} src={icon} alt={`${countryName} football association icon`} />
    </div>
  )
}