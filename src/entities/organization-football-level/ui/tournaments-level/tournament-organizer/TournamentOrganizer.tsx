import { Heading, Icon } from '@/shared'
import s from './TournamentOrganizer.module.scss'

type Props = {
  iconPath: string
  fullName: string
}

export const TournamentOrganizer = ({ iconPath, fullName }: Props) => {
  return (
    <div className={s.container}>
      <Icon src={iconPath} size={200} className={s.icon} />
      <Heading size="3" align="center" color="gray" className={s.title}>
        {fullName}
      </Heading>
    </div>
  )
}
