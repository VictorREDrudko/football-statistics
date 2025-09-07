import { useLocation } from 'react-router-dom'
import { projectLogo, ratingLogo } from '@/shared/assets'
import { PATH } from '@/shared/constants'
import { useAppSelector } from '@/shared/hooks'
import { IconLink } from './IconLink/IconLink'
import { MenuDesktop } from './menu-desktop/MenuDesktop'
import { MenuMobile } from './menu-mobile/MenuMobile'
import s from './Header.module.scss'

export const Header = () => {
  // for active link navigation
  const location = useLocation()
  const menuData = useAppSelector((state) => state['header-menu'])

  return (
    <div className={s.container}>
      <IconLink routePath={PATH.home} iconPath={projectLogo} />
      <MenuDesktop items={menuData} location={location} />
      <MenuMobile items={menuData} location={location} />
      <IconLink routePath={PATH.rating} iconPath={ratingLogo} />
    </div>
  )
}
