import { useLocation } from 'react-router-dom'
import { PATH } from '@/shared/constants'
import { useAppSelector } from '@/shared/hooks'
import { IconLink } from './IconLink/IconLink'
import { MenuDesktop } from './menu-desktop/MenuDesktop'
import { MenuMobile } from './menu-mobile/MenuMobile'
import s from './Header.module.scss'
import { Switch } from '@radix-ui/themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Container } from '@/shared/ui'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '@/app/store'
import { headerLogo } from '@/shared/assets'
import { Language } from './language/Language'

export const Header = () => {
  // for active link navigation
  const dispatch = useDispatch()
  const location = useLocation()
  const menuData = useAppSelector((state) => state['header-menu'])
  const theme = useAppSelector((state) => state.theme.mode)

  const isDark = theme === 'dark'
  const toggle = () => dispatch(toggleTheme())

  const { projectLogo, ratingLogo } = headerLogo

  return (
    <header className={s.header}>
      <div className={s.container}>
        <IconLink
          routePath={PATH.home}
          iconPath={isDark ? projectLogo.dark : projectLogo.light}
        />
        <MenuDesktop items={menuData} location={location} />
        <MenuMobile items={menuData} location={location} />
        <Container align="center" gap="2">
          <SunIcon width="20" height="20" />
          <Switch
            checked={isDark}
            onCheckedChange={toggle}
            color="grass"
            size="2"
            aria-label="Toggle theme"
          />
          <MoonIcon width="20" height="20" />
        </Container>
        <Language />
        <IconLink
          routePath={PATH.rating}
          iconPath={isDark ? ratingLogo.dark : ratingLogo.light}
        />
      </div>
    </header>
  )
}
