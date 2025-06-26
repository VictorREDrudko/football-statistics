import s from './Header.module.css'
import { useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { projectLogo, ratingLogo } from '@/shared/assets'
import { LogoLink } from '@/widgets/header/ui/logoLink/LogoLink'
import { Menu } from '@/widgets/header/ui/menu/Menu'
import { useOutsideClick } from '@/common/hooks/UseOutsideClick'

export const Header = () => {
  // menu state (open/closed) for mobile devices
  const [isOpen, setIsOpen] = useState(false);
  // handling clicks outside the menu and accessing the DOM element of the menu
  const menuRef = useRef(null)
  
  // Hook for click outside element
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
      <LogoLink logoPath={projectLogo} linkPath={'/'}/>
      <div ref={menuRef} className={`${s.containerNavItems} ${isOpen ? s.open : ''}`}>
        <Menu isOpen={isOpen} onClickHundler={onClickHundler} menuRef={menuRef}/>
      </div>
      <LogoLink logoPath={ratingLogo} linkPath={'/rating'}/>
      <button onClick={onClickHundler} className={s.menuButton}>
        {/* Menu icon */}
        {isOpen ? <AiOutlineClose size={30} color='white'/> : <AiOutlineMenu size={30} color='white'/>}
      </button>
    </div>
  )
}
