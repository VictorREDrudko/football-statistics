import s from './Total.module.css'
import iconGoldMedal from '../../../../assets/icon/card/gold-medal.png'
import iconSilverMedal from '../../../../assets/icon/card/silver-medal.png'
import iconBronzeMedal from '../../../../assets/icon/card/bronze-medal.png'
import iconCounter from '../../../../assets/icon/card/icon-counter.png'
import { useState } from 'react'
import { ModalResults } from '@/features/nationalTeams1/nationTeamCard/achievements/modalResults/ModalResults'

type Props = {
  title: string
  count: number
  years: string[][]
  iconPath: string  
  classContainer: string
  titleCompetition: string
  countryName: string
} 

export const Total = ({title, count, years, iconPath, classContainer, titleCompetition, countryName}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const pathIconGoldMedal = title === 'champion' && count !== 0 ? iconGoldMedal : 
    title === 'runner-up' && count !== 0 ? iconSilverMedal :
    title === 'third-place' && count !== 0 ? iconBronzeMedal : 
    title === 'appearances' && count !== 0 ? iconCounter :
    title === 'matches' && count !== 0 ? iconCounter : ''
  
  const fullClass = count === 0 ? 'zeroValue' : classContainer
  const iconClass = count === 0 ? 'noIcon' : ''

  return (
    <>
      {isModalOpen && <ModalResults onClose={closeModal} 
                                    title={title} 
                                    count={count}
                                    years={years}
                                    iconPath={iconPath}
                                    titleCompetition={titleCompetition}
                                    countryName={countryName}
                                    />}
      <div className={`${s.container} ${s[classContainer]} ${s[fullClass]}`} onClick={openModal}>
        <span className={s.text}>{count}</span>
        <img src={pathIconGoldMedal} alt={`icon medal ${title}`} className={`${s.icon} ${s[iconClass]}`}/>
        <span className={s.description}>{title}</span>
      </div>
    </>
  )
}

