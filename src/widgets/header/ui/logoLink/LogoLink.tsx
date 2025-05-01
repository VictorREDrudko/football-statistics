import { NavLink } from 'react-router-dom'
import s from './LogoLink.module.css'

type Props = {
  logoPath: string
  linkPath: string
}

export const LogoLink = ({logoPath, linkPath}: Props) => {
  return (
    <>
      <NavLink to={linkPath}>
        <img className={s.icon} src={logoPath} alt="logo project"/>
      </NavLink>
    </>
  )
}