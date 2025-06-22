import { Container } from '@/shared'
import s from './Parameter.module.scss'

type Props = {
  title: string
  iconPath: string
}

export const Parameter = ({title, iconPath} : Props) => {
  return (
    <Container gap='2' align='center'>
      <img src={iconPath} alt='icon parameter stats' className={s.icon}/>
      <span className={s.parameter}>{title}</span>
    </Container>
  )
}
