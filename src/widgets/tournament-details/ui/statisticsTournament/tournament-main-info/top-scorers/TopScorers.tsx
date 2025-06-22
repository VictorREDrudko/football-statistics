import { Container, Flag } from '@/shared'
import s from './TopScorers.module.scss'
import { Parameter } from '../parameter/Parameter'
import { StatsScorers } from '@/shared/model/stats/types'
import topScorerIcon from './../../../../../../shared/assets/iconStats/scorer.png'

type Props = {
  scorers: StatsScorers
  year: string
}

export const TopScorers = ({scorers, year} : Props) => {
  const mappedScorers = scorers.map((player, index) => {
    return (
      <Container direction='row' align='center' gap='2' className={s.containerItem} key={index}>
        <span className={s.goals}>{`${player.goals} goals`}</span>
        <Flag countryName={player.country} year={year}/>
        <span className={s.player}>{player.name}</span>
      </Container>
    )
  })
  
  return(
    <div className={s.container}>
      <Parameter iconPath={topScorerIcon} title={'Top scorer(s):'}/>
      <Container direction='col' gap='2'>
        {mappedScorers}
      </Container>
    </div>
  )
}
