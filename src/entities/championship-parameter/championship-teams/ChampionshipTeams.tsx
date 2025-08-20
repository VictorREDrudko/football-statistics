import s from './ChampionshipTeams.module.scss'
import { Container } from '@/shared'

type Props = {
  teamsFinalStage: number
  teamsQualification: number
}

export const ChampionshipTeams = ({
  teamsFinalStage,
  teamsQualification,
}: Props) => {
  return (
    <Container gap="2" align="center">
      <span className={s.teamsFinalStage}>{teamsFinalStage}</span>
      <span
        className={
          s.teamsQualification
        }>{`(${teamsQualification} qualification)`}</span>
    </Container>
  )
}
