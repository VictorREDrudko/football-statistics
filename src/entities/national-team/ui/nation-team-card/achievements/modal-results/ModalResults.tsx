import { getCurrentYear } from '@/shared/lib'
import s from './ModalResults.module.css'
import { BaseResult } from '@/entities/national-team/model/types/types'
import { Flag } from '@/entities'

type Props = {
  statsResult: BaseResult
  titleCompetition: string
  countryName: string 
}

export const ModalResults = ({ statsResult, titleCompetition, countryName }: Props) => {
  const year = getCurrentYear();
  const {title, details, count, iconPath} = statsResult
  const statusMatch = ["win", "drawn", "lost"]

  const mappedDetails = title !== 'matches' ? details.map((year, index) => {
    return (
      <li className={s.year} key={index}>{year}</li>
    )
  }) : (
    details.map((winDrawnLost, index) => {
        return (
          <li className={s.resultMatches} key={index}>
            <span className={s.description}>{statusMatch[index]}</span>
            <span className={s.numberMatches}>{winDrawnLost}</span>
            <span className={s.percent}>{Math.round(+winDrawnLost * 100 / count) + ' %'}</span>
          </li>
        )
      })
    )

  return (
    <div className={s.container}>
      <div className={s.modalContent}>
        <h2 className={s.titleCompetition}>{titleCompetition}</h2>
        <div className={s.containerContent}>
          <div className={s.containerResult}>
            <Flag countryName={countryName} year={year} />
            <ul className={s.containerYears}>
              {mappedDetails}
            </ul>
          </div>
          <div className={s.containerIconCounter}>
            <img src={iconPath} alt="" className={s.icon}/>
            <div className={s.count}>
              <span className={s.countText}>{count}</span>
            </div>
            <span className={s.title}>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};