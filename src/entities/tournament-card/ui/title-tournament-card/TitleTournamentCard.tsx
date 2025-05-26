import { Container } from '@/shared'
import s from './TitleTournamentCard.module.scss'

type Props = {
  year: string
  title: string
}

export const TitleTournamentCard = ({year, title} : Props) => {
  return (
    <div className={s.wrapper}>
      <Container direction='col' justify='center' align='center' gap='2'>
        <h2 className={s.year}>{year}</h2>
        <h1 className={s.title}>{title}</h1>
      </Container>
    </div>
  )
}