import { NavLink } from 'react-router-dom'
import s from './Icon.module.css'

type IconType = {
  image: string
  path: string
}

export const Icon = ({image, path}: IconType) => {
  return (
    <div className={s.wrapperIcon}>
      <NavLink to={path}>
        <img src={image} alt="my-icon-football" />
      </NavLink>
  </div>
  )
}