import { NationalTeam } from 'data/type-data'
import { Achievements } from '../achievements/Achievements'
import { Association } from '../association/Association'
import { Confederation } from '../confederation/Confederation'
import { TitleCard } from '../titleCard/TitleCard'
import s from './NationTeamCard.module.css'

type Props = {
  data: NationalTeam
  closeInfoCard: () => void
}

export const NationalTeamsCard = ({data, closeInfoCard}: Props) => {
  console.log(data)
  return (
    <div className={s.container}>
      <div className={s.containerCoatOfArms}>
        <img className={s.imgCoatOfArms} src={data.coatOfArms} alt={`coat of arms ${data.name}`} />
      </div>
      <TitleCard flag={data.flag[0]} name={data.name[0]} icon={data.associationIcon}/>
      <button className={s.button} onClick={closeInfoCard}>X</button>
      <div className={s.containerRating}>
        <div className={s.rating}>
          <span className={s.value}>{data.rating}</span>
        </div>
        <span className={s.title}>Rating</span>
      </div>
      <Confederation icon={data.confederationIcon} name={data.confederation}/>
      <Association associationDate={data.associationDate}/>
      <Achievements data={data.achievements}/>
  </div>
  )
}