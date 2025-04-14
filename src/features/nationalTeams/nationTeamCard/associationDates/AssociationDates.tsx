import { AssociationDate } from 'data/nationalTeamsData/type-nationalTeams'
import s from './AssociationDates.module.css'
import iconDateFounded from './../../../../assets/icon/card/date-founded.png'
import iconDateFifa from './../../../../assets/icon/card/date-FIFA.png'
import iconDateConfeder from './../../../../assets/icon/card/date-confeder.png'
import { DateAffiliation } from './dateAffiliation/DateAffiliation'
import { TitleItem } from '../titleItem/TitleItem'

type Props = {
  associationDate: AssociationDate
}

export const AssociationDates = ({associationDate}: Props) => {
  return (
    <div className={s.container}>
      <TitleItem title={"Founded / affiliation"}/>
      <div className={s.containerItems}>
        <DateAffiliation icon={iconDateFounded} date={associationDate.founded}/>
        <DateAffiliation icon={iconDateFifa} date={associationDate.fifaAffiliation}/>
        <DateAffiliation icon={iconDateConfeder} date={associationDate.confederationAffiliation}/>
      </div>
    </div>
  )
}