import {
  GlobalOrganizationCode,
  OrganizationData,
  TournamentsData,
} from '@/shared/model'
import s from './TournamentLevel.module.scss'
import { TournamentOrganizer } from './tournament-organizer/TournamentOrganizer'
import { TournamentLinksCard } from './tournament-links-card/TournamentLinksCard'

type Props = {
  organizationData: OrganizationData
  id: GlobalOrganizationCode
}

export const TournamentLevel = ({ organizationData, id }: Props) => {
  const { tournaments, governingBodies } = organizationData

  const tournamentsCard = (
    Object.keys(tournaments) as Array<keyof TournamentsData>
  ).map((level, index) => {
    return (
      <TournamentLinksCard
        key={index}
        title={
          level === 'nationalTeamLevel'
            ? 'National Tournaments'
            : 'Clubs Tournaments'
        }
        tournaments={tournaments[level]}
      />
    )
  })

  return (
    <div className={s.container} id={id}>
      <TournamentOrganizer
        iconPath={governingBodies.logoPath}
        fullName={governingBodies.fullName}
      />
      {tournamentsCard}
    </div>
  )
}
