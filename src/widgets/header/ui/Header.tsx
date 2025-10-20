import { useLocation } from 'react-router-dom'

import { PATH } from '@/shared/constants'
import { useAppSelector } from '@/shared/hooks'
import { headerLogo } from '@/shared/assets'
import { Container } from '@/shared/ui'

import { IconLink } from './IconLink/IconLink'
import { HeaderTheme } from './header-theme/HeaderTheme'
import { Language } from './language/Language'
import { MenuDesktop } from './menu-desktop/MenuDesktop'
import { MenuMobile } from './menu-mobile/MenuMobile'

import s from './Header.module.scss'

export const Header = () => {
  const location = useLocation() // for active link navigation
  const theme = useAppSelector((state) => state.theme.mode)
  const isDark = theme === 'dark'

  const { projectLogo } = headerLogo

  return (
    <header className={s.header}>
      <IconLink
        routePath={PATH.home}
        iconPath={isDark ? projectLogo.dark : projectLogo.light}
      />
      <MenuDesktop location={location} />
      <Container align="center" gap="10">
        <HeaderTheme isDark={isDark} />
        <Language />
        <MenuMobile location={location} />
      </Container>
    </header>
  )
}
