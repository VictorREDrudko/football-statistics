import s from './AssociationDates.module.css'
import iconDateFounded from './../../../assets/icon-date/date-founded.png'
import iconDateFifa from './../../../assets/icon-date/date-FIFA.png'
import iconDateConfeder from './../../../assets/icon-date/date-confeder.png'
import { TitleSectionCard } from '../title-section-card/TitleSectionCard'
import { DateAffiliation } from './date-affiliation/DateAffiliation'
import { AssociationDate } from '@/entities/national-team/model/types/types'

type Props = {
  associationDate: AssociationDate
}

export const AssociationDates = ({associationDate}: Props) => {
  return (
    <div className={s.container}>
      <TitleSectionCard title={"Founded / affiliation"}/>
      <div className={s.containerItems}>
        <DateAffiliation iconPath={iconDateFounded} year={associationDate.founded}/>
        <DateAffiliation iconPath={iconDateFifa} year={associationDate.fifaAffiliation}/>
        <DateAffiliation iconPath={iconDateConfeder} year={associationDate.confederationAffiliation}/>
      </div>
    </div>
  )
}