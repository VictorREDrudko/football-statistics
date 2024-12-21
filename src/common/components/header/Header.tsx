import s from './Header.module.css'
import mainIcon from './../../../assets/main-icon.png'
import ratingIcon from './../../../assets/rating-icon.png'
import { Menu } from './menu/Menu'
import { Icon } from './icon/Icon'
import { useRef, useState } from 'react'
// import { AiOutlineClose } from "react-icons/ai";
// import { AiOutlineMenu } from "react-icons/ai";
import { useOutsideClick } from '../../hooks/UseOutsideClick'


type HeaderType = {
  footballOrganizations: string[]
}

export const Header = ({footballOrganizations}:HeaderType) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null)
  
  useOutsideClick(menuRef, () => {
    if(isOpen) {
      setTimeout(() => setIsOpen(false), 50)
    }
  })

  const onClickHundler = () => {
    setIsOpen(!isOpen)
  }

  const classMenu = isOpen ? `${s.wrapper1} ${s.active}` : s.wrapper1

  return (
    <div className={s.wrapper}>
      <Icon image={mainIcon} path={'/'}/>
      <div ref={menuRef}>
        <Menu footballOrganizations={footballOrganizations} isOpen={isOpen} onClickHundler={onClickHundler} menuRef={menuRef}/>
      </div>
      <Icon image={ratingIcon} path={'/rating'}/>
      <button onClick={onClickHundler} className={s.menuButton}>
        {/* {isOpen ? <AiOutlineClose size={30} color='white'/> : <AiOutlineMenu size={30} color='white'/>} */}
      </button>
    </div>
  )
}
