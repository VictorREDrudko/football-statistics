import { Flag } from 'common/components/flag/Flag'
import s from './ModalResults.module.css'
import { getCurrentYear } from 'utils/getCurrentYear'

type Props = {
  onClose: () => void
  title: string
  count: number
  years: string[][]
  iconPath: string 
  titleCompetition: string
  countryName: string 
}

export const ModalResults = ({ title, count, titleCompetition, countryName, years, iconPath, onClose }: Props) => {
  const year = getCurrentYear()

  const mappedYears = years.length === 1 ? years[0].map((year, index) => {
    return (
      <li className={s.year} key={index}>{year}</li>
    )
  }) : (
    years.map((resultMatches, index) => {
        return (
          <li className={s.resultMatches} key={index}>
            <span className={s.description}>{resultMatches[0]}</span>
            <span className={s.numberMatches}>{resultMatches[1]}</span>
            <span className={s.percent}>{Math.round(+resultMatches[1] * 100 / count) + ' %'}</span>
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
            <Flag countryName={countryName} year={year} style={{width: '70px', borderRadius: '10px'}}/>
            <ul className={s.containerYears}>
              {mappedYears}
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

        <button className={s.button} onClick={onClose}>X</button>
      </div>
    </div>
  );
};