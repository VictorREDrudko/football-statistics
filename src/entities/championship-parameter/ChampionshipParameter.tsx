import { Container } from '@/shared'
import s from './ChampionshipParameter.module.scss'

type Props = {
  children?: React.ReactNode
  icon: string
  indicator: string
}

export const ChampionshipParameter = ({ children, icon, indicator }: Props) => {
  return (
    <div className={s.container}>
      <Container gap="2" align="center" className={s.containerIndicator}>
        <img src={icon} alt="icon parameter stats" className={s.icon} />
        <span className={s.indicator}>{indicator}</span>
      </Container>
      <Container direction="col" gap="2" className={s.containerValue}>
        {children}
      </Container>
    </div>
  )
}
