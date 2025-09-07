import { Icon, Link } from '@/shared/ui'
import s from './IconLink.module.scss'

type Props = {
  routePath: string
  iconPath: string
}

export const IconLink = ({ routePath, iconPath }: Props) => {
  return (
    <Link to={routePath} variant="text" className={s.link} size="small">
      <Icon src={iconPath} size={45}></Icon>
    </Link>
  )
}
