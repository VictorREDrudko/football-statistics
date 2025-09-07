import { useState } from 'react'
import { Location } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Link } from '@/shared/ui'
import { Menu } from '../../model'
import s from './MenuMobile.module.scss'

type Props = {
  items: Menu
  location: Location
}

export const MenuMobile = ({ items, location }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const renderItems = items.map((item) => {
    return (
      <DropdownMenu.Item key={item.path} className={s.mobileMenuItem} asChild>
        <Link
          key={item.path}
          to={item.path}
          variant="text"
          className={
            location.pathname.startsWith(item.path)
              ? `${s.link} ${s.active}`
              : s.link
          }>
          {item.title}
        </Link>
      </DropdownMenu.Item>
    )
  })

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <button className={s.menuButton}>
          {isOpen ? (
            <AiOutlineClose size={30} color="white" />
          ) : (
            <AiOutlineMenu size={30} color="white" />
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={s.mobileMenuContent}
          sideOffset={10}
          align="end">
          <div className={s.overlay}>{renderItems}</div>
          <DropdownMenu.Arrow className={s.menuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
