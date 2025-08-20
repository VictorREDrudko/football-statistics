import s from './ChampionshipGoals.module.scss'
import { Container } from '@/shared'

type Props = {
  goals: number
  goalsPerMatch: number
}

export const ChampionshipGoals = ({ goals, goalsPerMatch }: Props) => {
  return (
    <Container gap="2" align="center">
      <span className={s.goals}>{goals}</span>
      <span className={s.goalsPerMatch}>{`(${goalsPerMatch} per match)`}</span>
    </Container>
  )
}
