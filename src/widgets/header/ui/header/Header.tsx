import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { projectLogo, ratingLogo } from '@/shared/assets'
import { LogoLink } from '@/widgets/header/ui/logoLink/LogoLink'
import { PATH } from '@/app/model/path'
import s from './Header.module.scss'
import { navItems } from '../../model/navItems'
import { Link } from '@/shared'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  // for active link navigation
  const location = useLocation()

  const onClickHundler = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <div className={s.wrapper}>
      <LogoLink path={PATH.home} logoPath={projectLogo} />

      {/* Desktop Menu */}
      <nav className={s.desktopMenu}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            variant="text"
            className={
              location.pathname.startsWith(item.path)
                ? `${s.link} ${s.active}`
                : s.link
            }>
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Mobile Dropdown Menu (показывается на мобильных) */}
      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger asChild>
          <button className={s.menuButton}>
            <button className={s.menuButton}>
              {isOpen ? (
                <AiOutlineClose size={30} color="white" />
              ) : (
                <AiOutlineMenu size={30} color="white" />
              )}
            </button>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={s.mobileMenuContent}
            sideOffset={10}
            align="end">
            {navItems.map((item) => (
              <DropdownMenu.Item
                key={item.path}
                className={s.mobileMenuItem}
                asChild>
                <Link
                  key={item.path}
                  to={item.path}
                  variant="text"
                  className={
                    location.pathname.startsWith(item.path)
                      ? `${s.link} ${s.active}`
                      : s.link
                  }>
                  {item.title}
                </Link>
              </DropdownMenu.Item>
            ))}
            <DropdownMenu.Arrow className={s.menuArrow} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <LogoLink path={PATH.rating} logoPath={ratingLogo} />
    </div>
  )
}
