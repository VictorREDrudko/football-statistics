import { Container } from '@/shared'
import s from './ChampionshipTopScorers.module.scss'
import { StatsScorers } from '@/shared/model/stats/types'
import { Flag } from '@/entities'

type Props = {
  scorers: StatsScorers
  year: string
}

export const ChampionshipTopScorers = ({ scorers, year }: Props) => {
  const mappedScorers = scorers.map((player, index) => {
    return (
      <Container
        direction="row"
        align="center"
        gap="2"
        className={s.containerPlayer}
        key={index}>
        <span className={s.goals}>{`${player.goals} goals`}</span>
        <Container align="center" gap="2">
          <Flag countryName={player.country} year={year} />
          <span className={s.player}>{player.name}</span>
        </Container>
      </Container>
    )
  })

  return (
    <Container direction="col" gap="2">
      {mappedScorers}
    </Container>
  )
}
