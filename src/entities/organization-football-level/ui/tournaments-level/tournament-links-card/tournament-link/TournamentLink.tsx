import { Icon, Link, TextElement } from '@/shared'
import s from './TournamentLink.module.scss'

type Props = {
  title: string
  iconPath: string
  isActive: boolean
  path: string
}

export const TournamentLink = ({ title, iconPath, isActive, path }: Props) => {
  const linkClass = isActive ? s.link : `${s.link} ${s.noActive}`

  return (
    <Link to={path} size="small" variant="text" className={linkClass}>
      <div className={s.container}>
        <Icon
          src={iconPath}
          alt={`Icon cup ${title}`}
          size={120}
          className={s.icon}
        />
        <div className={s.containerTitle}>
          <TextElement
            as="span"
            size="2"
            align="center"
            weight="bold"
            className={s.nameTournament}>
            {title}
          </TextElement>
        </div>
      </div>
    </Link>
  )
}
