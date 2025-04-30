import { NavLink } from 'react-router-dom'
import s from './Icon.module.css'

type IconType = {
  image: string
  path: string
}

export const Icon = ({image, path}: IconType) => {
  return (
    <>
      <NavLink to={path}>
        <img className={s.icon} src={image} alt="icon-football"/>
      </NavLink>
    </>
  )
}