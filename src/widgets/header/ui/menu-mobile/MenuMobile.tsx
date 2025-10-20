import { useState } from 'react'
import { Location } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Link } from '@/shared/ui'

import s from './MenuMobile.module.scss'
import { useAppSelector } from '@/shared/hooks'
import { Theme } from '@radix-ui/themes'

type Props = {
  location: Location
}

export const MenuMobile = ({ location }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useAppSelector((state) => state.theme)

  const language = useAppSelector((state) => state.language.mode)
  const menuData = useAppSelector((state) => state['header-menu'])
  const isEnglish = language === 'en'
  const items = isEnglish ? menuData.en : menuData.ru

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
            <AiOutlineClose size={30} className={s.trigger} />
          ) : (
            <AiOutlineMenu size={30} className={s.trigger} />
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Theme appearance={theme.mode}>
          <DropdownMenu.Content
            className={s.mobileMenuContent}
            sideOffset={10}
            align="end">
            <div className={s.overlay}>{renderItems}</div>
          </DropdownMenu.Content>
        </Theme>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
