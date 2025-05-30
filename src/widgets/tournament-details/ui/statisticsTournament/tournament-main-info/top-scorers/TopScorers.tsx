import { Container, Flag } from '@/shared'
import s from './TopScorers.module.scss'
import { Parameter } from '../parameter/Parameter'
import { StatsScorers } from '@/shared/model/stats/types'

type Props = {
  scorers: StatsScorers
  year: string
}

export const TopScorers = ({scorers, year} : Props) => {
  const mappedScorers = scorers.map((player, index) => {
    return (
      <Container direction='col' align='center' className={s.containerItem} key={index}>
        <Flag countryName={player.country} year={year}/>
        <span className={s.player}>{player.name}</span>
        <span className={s.goals}>{`(${player.goals} goals)`}</span>
      </Container>
    )
  })
  
  return(
    <div className={s.container}>
      <Parameter title={'Top scorer(s):'}/>
      {mappedScorers}
    </div>
  )
}
