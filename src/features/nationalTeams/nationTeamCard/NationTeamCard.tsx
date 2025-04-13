import { NationalTeam } from 'data/nationalTeamsData/type-nationalTeams'
import { Achievements } from '../achievements/Achievements'
import { HeaderCard } from './headerCard/HeaderCard'
import s from './NationTeamCard.module.css'
import { getCurrentCountryFlag } from 'logics/nationalTeamsLogic/getCurrentCountryFlag'
import { getCurrentCountryName } from 'logics/nationalTeamsLogic/getCurrentCountryName'
import { getCurrentYear } from 'utils/getCurrentYear'
import { AssociationDates } from '../associationDates/AssociationDates'
import { TeamRating } from './teamRating/TeamRating'

type Props = {
  data: NationalTeam
  closeInfoCard: () => void
}

export const NationalTeamsCard = ({data, closeInfoCard}: Props) => {
  const flag = getCurrentCountryFlag(data.flags)
  const name = getCurrentCountryName(data.names)
  const currentYear = getCurrentYear()

  return (
    <div className={s.container}>
      <div className={s.containerCoatOfArms}>
        <img className={s.imgCoatOfArms} src={data.coatOfArms} alt={`coat of arms ${data.names}`} />
      </div>
      <HeaderCard flag={flag} name={name} icon={data.associationIcon} year={currentYear}/>
      <AssociationDates associationDate={data.associationDate}/>
      <Achievements nameTeam={name}/>
      <button className={s.button} onClick={closeInfoCard}>X</button>
      <TeamRating value={data.rating}/>
  </div>
  )
}