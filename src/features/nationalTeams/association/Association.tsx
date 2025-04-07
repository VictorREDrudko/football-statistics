import { AssociationDate } from 'data/type-nationalTeams'
import { RowItem } from '../rowItem/RowItem'
import { TitleItem } from '../titleItem/TitleItem'
import s from './Association.module.css'

type AssociationProps = {
  associationDate: AssociationDate
}

export const Association = ({associationDate}: AssociationProps) => {
  return (
    <div className={s.container}>
      <TitleItem title="Football Association"/>
      <RowItem title="Founded:" value={associationDate.founded}/>
      <RowItem title="FIFA affiliation:" value={associationDate.fifaAffiliation}/>
      <RowItem title="Conf. affiliation:" value={associationDate.confederationAffiliation}/>
    </div>
  )
}