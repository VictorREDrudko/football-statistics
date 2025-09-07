import { Container } from '@/shared/ui/container/Container'
import s from './ChampionshipGoals.module.scss'


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
