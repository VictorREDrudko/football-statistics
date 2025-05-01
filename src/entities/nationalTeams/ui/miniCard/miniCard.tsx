import s from './miniCard.module.css'
import { Flag } from 'common/components/flag/Flag'

type Props = {
  nameCountry: string
  icon: string
}

export const MiniCard = ({nameCountry, icon}: Props) => {
  
  return (
    <div className={s.container}>
      <div className={s.containerImages}>
        <Flag countryName={nameCountry} year={"1990"} />
        <img className={s.icon} src={icon} alt={`${nameCountry} football association icon`} />
      </div>
      <h3 className={s.nameCountry}>{nameCountry}</h3>
    </div>
  )
}