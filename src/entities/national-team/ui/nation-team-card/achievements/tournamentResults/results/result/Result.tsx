import s from './Result.module.css'
import { useState } from 'react'
import { BaseResult } from '@/entities/national-team/model/types/types'
import { getIconPath } from '@/entities/national-team/lib/getIconPath'
import { ModalResults } from '../../../modal-results/ModalResults'
import { ButtonClose, ModalWindow } from '@/shared'

type Props = {
  titleCompetition: string
  countryName: string
  statsResult: BaseResult
}

export const Result = ({titleCompetition, countryName, statsResult} : Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {title, count, typeTotal} = statsResult

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const iconPath = getIconPath(title)

  const fullClass = count === 0 ? 'zeroValue' : ''
  const iconClass = count === 0 ? 'noIcon' : ''

  return (
    <>
      {isModalOpen && <ModalWindow>
        <ModalResults statsResult={statsResult}
                      titleCompetition={titleCompetition}
                      countryName={countryName}
          />
        <ButtonClose onClose={closeModal} zIndex={1000}/>
      </ModalWindow>}
      <div className={`${s.container} ${s[typeTotal]} ${s[fullClass]}`} onClick={openModal}>
        <span className={s.text}>{count}</span>
        <img src={iconPath} alt={`icon title ${title}`} className={`${s.icon} ${s[iconClass]}`}/>
        <span className={s.description}>{title}</span>
      </div>
    </>
  )
}