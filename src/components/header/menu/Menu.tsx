import { NavLink } from 'react-router-dom'
import s from './Menu.module.css'
import { ClassNames } from '@emotion/react'

type MenuType = {
  footballOrganizations: string[]
}

export const Menu = ({footballOrganizations}:MenuType) => {
  const mappedFootballOrganizations = footballOrganizations.map((el, index) => {
    return (
      <li key={index} className={s.item}>
        <NavLink to={`/${el.toLowerCase()}`} className={({isActive}) => isActive ? s.active : ''}>{el}</NavLink>
      </li>
    )
  })

  return (
    <ul className={s.wrapper}>{mappedFootballOrganizations}</ul>
  )
}