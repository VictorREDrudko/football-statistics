import { NavLink } from 'react-router-dom'
import s from './Menu.module.css'
import { MutableRefObject } from 'react'
import { navItems } from '@/widgets/header/model/navItems'

type Props = {
  isOpen: boolean
  onClickHundler: () => void
  menuRef: MutableRefObject<null>
}

export const Menu = ({isOpen, onClickHundler, menuRef}: Props) => {
  const mappedNavItems = navItems.map((itemMenu, index) => {
    return (
      <li key={index} className={s.itemMenu} onClick={onClickHundler}>
        <NavLink to={itemMenu.path} className={({isActive}) => isActive ? s.active : ''}>{itemMenu.title}</NavLink>
      </li>
    )
  })

  const classMenu = isOpen ? `${s.wrapper} ${s.active}` : s.wrapper

  return (
    <nav className={classMenu} ref={menuRef}>
      <ul className={s.wrapperItems}>
        {mappedNavItems}
      </ul>
    </nav>
  )
}