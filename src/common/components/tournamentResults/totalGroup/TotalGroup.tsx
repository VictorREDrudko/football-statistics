import { Total } from '../total/Total'
import s from './TotalGroup.module.css'
import { WorldCupPosition } from 'logics/worldCup/createWorldCupPosition'

type Props = {
  data: WorldCupPosition[]
  openModal: () => void
} 

export const TotalGroup = ({ data, openModal }: Props) => {
  const createResults = data.map((totalData, index) => {
    return (
      <Total  value={totalData.value} 
              classContainer={totalData.typeTotal} 
              openModal={openModal} 
              description={totalData.description}
              key={index}
        />
    )
  })

  return (
    <div className={s.container}>
      {createResults}
    </div>
  )
}

