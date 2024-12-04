import { NavLink } from 'react-router-dom'
import s from './Menu.module.css'
import { MutableRefObject } from 'react'

type MenuType = {
  footballOrganizations: string[]
  isOpen: boolean
  onClickHundler: () => void
  menuRef: MutableRefObject<null>
}

export const Menu = ({footballOrganizations, isOpen, onClickHundler, menuRef}:MenuType) => {

  const mappedFootballOrganizations = footballOrganizations.map((el, index) => {
    return (
      <li key={index} className={s.item} onClick={onClickHundler}>
        <NavLink to={`/${el.toLowerCase()}`} className={({isActive}) => isActive ? s.active : ''}>{el}</NavLink>
      </li>
    )
  })

  const classMenu = isOpen ? `${s.wrapper} ${s.active}` : s.wrapper

  return (
    <nav className={classMenu} ref={menuRef}>
      <ul className={s.wrapperItems}>{mappedFootballOrganizations}</ul>
    </nav>

  )
}