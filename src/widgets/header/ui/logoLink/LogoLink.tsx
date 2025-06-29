import s from './LogoLink.module.scss'
import { Icon, Link } from '@/shared'

type Props = {
  path: string
  logoPath: string
}

export const LogoLink = ({ path, logoPath }: Props) => {
  return (
    <Link to={path} variant="text" className={s.link} size='small'>
      <Icon src={logoPath} size={45}></Icon>
    </Link>
  )
}
