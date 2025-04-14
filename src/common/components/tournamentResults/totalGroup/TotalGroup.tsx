import { BaseResult } from 'logics/structuringResultChampionships/structuringResultChampionships-type'
import { Total } from '../total/Total'
import s from './TotalGroup.module.css'

type Props = {
  data: BaseResult[]
  titleCompetition: string
  countryName: string
} 

export const TotalGroup = ({ data, titleCompetition, countryName }: Props) => {
  const totals = data.map((total, index) => {
    return (
      <Total  title={total.title}
              count={total.count}
              years={total.years}
              classContainer={total.typeTotal}
              iconPath={total.iconPath}
              titleCompetition={titleCompetition}
              countryName={countryName}
              key={index}
      />
    )
  })
  
  return (
    <div className={s.container}>
      {totals}
    </div>
  )
}