import s from './Header.module.css'
import mainIcon from './../../../assets/main-icon.png'
import ratingIcon from './../../../assets/rating-icon.png'
import { Menu } from './menu/Menu'
import { Icon } from './icon/Icon'

type HeaderType = {
  footballOrganizations: string[]
}

export const Header = ({footballOrganizations}:HeaderType) => {
  return (
    <div className={s.wrapper}>
      <Icon image={mainIcon} path={'/'}/>
      <Menu footballOrganizations={footballOrganizations}/>
      <Icon image={ratingIcon} path={'/rating'}/>
    </div>
  )
}