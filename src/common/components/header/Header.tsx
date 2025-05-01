import s from './Header.module.css'
import { Menu } from './menu/Menu'
import { Icon } from './icon/Icon'
import { useRef, useState } from 'react'
import { useOutsideClick } from '../../hooks/UseOutsideClick'
import { icons } from '../../../data/data'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

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

  return (
    <div className={s.wrapper}>
      <Icon image={icons.project} path={'/'}/>
      <div ref={menuRef}>
        <Menu isOpen={isOpen} onClickHundler={onClickHundler} menuRef={menuRef}/>
      </div>
      <Icon image={icons.raiting} path={'/rating'}/>
      <button onClick={onClickHundler} className={s.menuButton}>
        {isOpen ? <AiOutlineClose size={30} color='white'/> : <AiOutlineMenu size={30} color='white'/>}
      </button>
    </div>
  )
}
