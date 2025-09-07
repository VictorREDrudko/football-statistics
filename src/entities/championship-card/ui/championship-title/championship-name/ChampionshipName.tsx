
import { Container } from '@/shared/ui/container/Container'
import s from './ChampionshipName.module.scss'

type Props = {
  year: string
  title: string
}

export const ChampionshipName = ({ year, title }: Props) => {
  return (
    <div className={s.container}>
      <Container direction="col" justify="center" align="center" gap="2">
        <h2 className={s.year}>{year}</h2>
        <h1 className={s.title}>{title}</h1>
      </Container>
    </div>
  )
}
