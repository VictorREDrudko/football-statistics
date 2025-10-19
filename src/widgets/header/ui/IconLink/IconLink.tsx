import { Icon, Link } from '@/shared/ui'
import s from './IconLink.module.scss'
import { useAppSelector } from '@/shared/hooks'

type Props = {
  routePath: string
  iconPath: string
}

export const IconLink = ({ routePath, iconPath }: Props) => {
  const theme = useAppSelector((state) => state.theme)
  
  return (
    <Link to={routePath} variant="text" className={s.link} size="small">
      <Icon src={iconPath} size={45} data-theme={theme}></Icon>
    </Link>
  )
}
