import { Country } from '../../../../../../../common/components/country/Country'
import s from './Team.module.css'

type TeamProps = {
  team: string
  year: string
}

export const Team = (props: TeamProps) => {
  return (
    <div className={s.container}>
      <Country name={props.team} year={props.year} />
    </div>
  )
}