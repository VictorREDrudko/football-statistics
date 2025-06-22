import { Container, Flag } from '@/shared'
import s from './Positions.module.scss'
import { Parameter } from '../parameter/Parameter'
import { FinalPositions } from '@/widgets/tournament-details/model/types'
import positionIcon from './../../../../../../shared/assets/iconStats/position.png'

type Props = {
  positions: FinalPositions
  year: string
}

export const Positions = ({positions, year} : Props) => {
    const positionKeys: (keyof FinalPositions)[] = [
    'champions',
    'runnersUp',
    'thirdPlace',
    'fourthPlace',
  ]

  const mappedPositions = positionKeys.map((position, index) => {
    if (!positions[position]) return
    return (
    <Container direction="row" gap='2' align="center" className={s.containerItem} key={index}>
      <span className={s.position}>
        {position === 'champions' 
          ? '1 place' 
          : position === 'runnersUp' 
            ? '2 place' 
            : position === 'thirdPlace' 
              ? '3 place' 
              : '4 place'}
      </span>
      <Flag countryName={positions[position]} year={year} />
      <span className={s.value}>{positions[position]}</span>
    </Container>
    )
  })
  
  return(
    <div className={s.container}>
      <Parameter iconPath={positionIcon} title={'Final positions:'}/>
      <div className={s.wrapper}>
        {mappedPositions}
      </div>
    </div>
  )
}
