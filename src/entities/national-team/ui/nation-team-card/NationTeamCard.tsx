import s from './NationTeamCard.module.css'
import { ButtonClose, getCurrentCountryName, getCurrentYear, IconConfederation } from '@/shared'
import { ConfederationCode, confederationData, NationalTeamType, TeamPartStats } from '@/entities'
import { HeaderCard } from './header-card/HeaderCard'
import { AssociationDates } from './association-dates/AssociationDates'
import { Achievements } from './achievements/Achievements'
import { TeamRating } from './team-rating/TeamRating'
import { findConfederationByTeam } from '../../lib/findConfederationByTeam'
import { nationalCompetition } from '../../model/nationalCompetitions'

type Props = {
  teamData: NationalTeamType
  teamStats: TeamPartStats
  closeCard: () => void
}

export const NationalTeamsCard = ({teamData, teamStats, closeCard}: Props) => {
  const countryName = getCurrentCountryName(teamData.names)
  const currentYear = getCurrentYear()
  const nameConfederation: ConfederationCode = findConfederationByTeam(countryName)
  const continentalCompetitions = nationalCompetition[nameConfederation]

  return (
    <div className={s.container}>
      <div className={s.containerCoatOfArms}>
        <img className={s.imgCoatOfArms} src={teamData.coatOfArms} alt={`coat of arms ${countryName}`} />
      </div>
      <HeaderCard countryName={countryName} icon={teamData.associationIcon} year={currentYear}/>
      <AssociationDates associationDate={teamData.associationDate}/>
      <Achievements countryName={countryName} 
                    teamStats={teamStats} 
                    continentalCompetitions={continentalCompetitions}/>
      <ButtonClose onClose={closeCard} zIndex={0}/>
      <TeamRating place={teamData.rating.place} points={teamData.rating.points}/>
      <div className={s.containerIcon}>
        <IconConfederation iconPath={confederationData[nameConfederation].iconPath} confederation={nameConfederation}/>
      </div>
    </div>
  )
}