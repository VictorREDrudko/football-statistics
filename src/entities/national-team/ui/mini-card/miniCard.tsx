import { Flag, getCurrentYear } from '@/shared'
import s from './miniCard.module.css'

type Props = {
  nameCountry: string
  iconPath: string
  onSelect: () => void;
}

export const MiniCard = ({nameCountry, iconPath, onSelect}: Props) => {
  const year = getCurrentYear()

  return (
    <div className={s.container} onClick={onSelect}>
      <div className={s.containerImages}>
        <Flag countryName={nameCountry} year={year} />
        <img className={s.icon} src={iconPath} alt={`${nameCountry} football association icon`} />
      </div>
      <h3 className={s.nameCountry}>{nameCountry}</h3>
    </div>
  )
}