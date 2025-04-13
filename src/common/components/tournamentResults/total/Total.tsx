import s from './Total.module.css'
import iconGoldMedal from '../../../../assets/icon/card/gold-medal.png'
import iconSilverMedal from '../../../../assets/icon/card/silver-medal.png'
import iconBronzeMedal from '../../../../assets/icon/card/bronze-medal.png'
import iconCounter from '../../../../assets/icon/card/icon-counter.png'

type Props = {
  value: number
  classContainer: string
  description: string
  openModal: () => void
} 

export const Total = ({value, classContainer, description, openModal}: Props) => {
  const pathIconGoldMedal = description === 'champion' && value !== 0 ? iconGoldMedal : 
    description === 'runner-up' && value !== 0 ? iconSilverMedal :
    description === 'third-place' && value !== 0 ? iconBronzeMedal : 
    description === 'appearances' && value !== 0 ? iconCounter :
    description === 'matches' && value !== 0 ? iconCounter : ''
  
  const fullClass = value === 0 ? 'zeroValue' : classContainer
  const iconClass = value === 0 ? 'noIcon' : ''
  
  return (
    <div className={`${s.container} ${s[classContainer]} ${s[fullClass]}`} onClick={openModal}>
      <span className={s.text}>{value}</span>
      <img src={pathIconGoldMedal} alt={`icon medal ${description}`} className={`${s.icon} ${s[iconClass]}`}/>
      <span className={s.description}>{description}</span>
    </div>
  )
}

