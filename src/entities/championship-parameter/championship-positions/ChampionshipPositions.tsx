
import { Container } from '@/shared/ui/container/Container'
import s from './ChampionshipPosition.module.scss'
import { FinalPositions } from '@/features'


type Props = {
  positions: FinalPositions
  year: string
}

export const ChampionshipPosition = ({ positions, year }: Props) => {
  const mappedPositions = Object.keys(positions).map((position, index) => {
    const positionKey = position as keyof FinalPositions
    if (!positions[positionKey]) return

    return (
      <Container
        direction="row"
        gap="2"
        align="center"
        className={s.containerPlace}
        key={index}>
        <span className={s.place}>
          {positionKey === 'champions'
            ? '1 place'
            : positionKey === 'runnersUp'
              ? '2 place'
              : positionKey === 'thirdPlace'
                ? '3 place'
                : '4 place'}
        </span>
        <Container align="center" gap="2">
          {/* <Flag countryName={positions[positionKey]} year={year} /> */}
          <span className={s.countryName}>{positions[positionKey]}</span>
        </Container>
      </Container>
    )
  })

  return <div className={s.container}>{mappedPositions}</div>
}
