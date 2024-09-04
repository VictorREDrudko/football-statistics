import s from './Header.module.css'
import mainIcon from './../../image/main-icon.png'
import ratingIcon from './../../image/rating-icon.png'
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