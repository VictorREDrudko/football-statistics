import { NavLink } from 'react-router-dom'
import s from './Icon.module.css'

type IconType = {
  image: string
  path: string
  height: string
}

export const Icon = ({image, path, height}: IconType) => {
  return (
    <div className={s.wrapperIcon}>
      <NavLink to={path}>
        <img src={image} alt="icon-football" style={{height: height}}/>
      </NavLink>
  </div>
  )
}