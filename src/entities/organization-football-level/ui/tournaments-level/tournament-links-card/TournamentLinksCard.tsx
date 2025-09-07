
import { TournamentData } from '@/shared/model/football-structure/types'

import { TournamentLink } from './tournament-link/TournamentLink'
import s from './TournamentLinksCard.module.scss'
import { Heading } from '@/shared/ui/heading/Heading'

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
