import s from './Header.module.css'
import { Menu } from './menu/Menu'
import { Icon } from './icon/Icon'
import { useRef, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useOutsideClick } from '../../hooks/UseOutsideClick'
import { icons } from 'data/data';

export const Header = () => {
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
      <Icon image={icons.project} path={'/'} height={'40px'}/>
      <div ref={menuRef}>
        <Menu isOpen={isOpen} onClickHundler={onClickHundler} menuRef={menuRef}/>
      </div>
      <Icon image={icons.raiting} path={'/rating'} height={'50px'}/>
      <button onClick={onClickHundler} className={s.menuButton}>
        {isOpen ? <AiOutlineClose size={30} color='white'/> : <AiOutlineMenu size={30} color='white'/>}
      </button>
    </div>
  )
}
