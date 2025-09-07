import { Location } from 'react-router-dom'
import { Link } from '@/shared/ui'
import { Menu } from '../../model'
import s from './MenuDesktop.module.scss'

type Props = {
  items: Menu
  location: Location
}

export const MenuDesktop = ({ items, location }: Props) => {
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
