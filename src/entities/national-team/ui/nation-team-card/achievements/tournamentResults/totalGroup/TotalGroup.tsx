import { BaseResult } from '@/entities/national-team/model/types/types'
import { Total } from '../total/Total'
import s from './TotalGroup.module.css'
import { TeamsStats } from '@/features'

type Props = {
  data: BaseResult[]
  titleCompetition: string
  countryName: string
  stats: TeamsStats
} 

export const TotalGroup = ({ data, titleCompetition, countryName, stats }: Props) => {
  


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