import s from './Header.module.css'
import mainIcon from './../../../assets/main-icon.png'
import ratingIcon from './../../../assets/rating-icon.png'
import { Menu } from './menu/Menu'
import { Icon } from './icon/Icon'
import { useRef, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useOutsideClick } from '../../hooks/UseOutsideClick'
import { NavLink } from 'react-router-dom'


type HeaderType = {
  footballOrganizations: string[]
}

export const Header = ({footballOrganizations}:HeaderType) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null)
  
  useOutsideClick(menuRef, () => {
    console.log('111111111111')
    if(isOpen) {
      console.log('22222222222')
      setTimeout(() => setIsOpen(false), 50)
    }
  })

  const onClickHundler = () => {
    setIsOpen(!isOpen)
  }


  const mappedFootballOrganizations = footballOrganizations.map((el, index) => {
    return (
      <li key={index} className={s.item} onClick={onClickHundler}>
        <NavLink to={`/${el.toLowerCase()}`} className={({isActive}) => isActive ? s.active : ''}>{el}</NavLink>
      </li>
    )
  })

  const classMenu = isOpen ? `${s.wrapper1} ${s.active}` : s.wrapper1

  return (
    <div className={s.wrapper}>
      <Icon image={mainIcon} path={'/'}/>
      {/* <div ref={menuRef}>
        <Menu footballOrganizations={footballOrganizations} isOpen={isOpen} onClickHundler={onClickHundler}/>
      </div> */}
      <nav className={classMenu} ref={menuRef}>
        <ul className={s.wrapperItems}>{mappedFootballOrganizations}</ul>
      </nav>
      <Icon image={ratingIcon} path={'/rating'}/>
      <button onClick={onClickHundler} className={s.menuButton}>
        {isOpen ? <AiOutlineClose size={30} color='white'/> : <AiOutlineMenu size={30} color='white'/>}
      </button>
      
    </div>
  )
}
