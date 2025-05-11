import { ConfederationCode } from '@/entities'
import s from './IconConfederation.module.css'

type Props = {
  iconPath: string
  confederation: ConfederationCode
}

export const IconConfederation = ({iconPath, confederation}: Props) => {
  return (
    <div className={s.container}>
      <img src={iconPath} alt={`icon ${confederation}`} className={s.icon}/>
    </div>
  )
}