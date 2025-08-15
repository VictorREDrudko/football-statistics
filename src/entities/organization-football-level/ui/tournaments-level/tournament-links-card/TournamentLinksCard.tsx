import { Heading } from '@/shared'
import { TournamentData } from '@/shared/model'
import { TournamentLink } from './tournament-link/TournamentLink'
import s from './TournamentLinksCard.module.scss'

type Props = {
  title: string
  tournaments: TournamentData
}

export const TournamentLinksCard = ({ title, tournaments }: Props) => {
  const tournamentLinks = Object.keys(tournaments).map((tournament, index) => {
    return (
      <TournamentLink
        key={index}
        title={tournaments[tournament].name}
        iconPath={tournaments[tournament].trophyIconPath}
        isActive={tournaments[tournament].isActive}
        path={tournaments[tournament].path}
      />
    )
  })

  return (
    <div className={s.container}>
      <Heading size="4" align="center" color="secondary" className={s.title}>
        {title}
      </Heading>
      <div className={s.containerLinks}>{tournamentLinks}</div>
    </div>
  )
}
