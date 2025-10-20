import { Location } from 'react-router-dom'

import { useAppSelector } from '@/shared/hooks'
import { Link } from '@/shared/ui'

import s from './MenuDesktop.module.scss'

type Props = {
  location: Location
}

export const MenuDesktop = ({ location }: Props) => {
  const language = useAppSelector((state) => state.language.mode)
  const menuData = useAppSelector((state) => state['header-menu'])
  const isEnglish = language === 'en'

  const items = isEnglish ? menuData.en : menuData.ru

  const renderItems = items.map((item) => {
    return (
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
    )
  })

  return <nav className={s.container}>{renderItems}</nav>
}
