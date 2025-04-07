import { NationalTeam } from 'data/type-nationalTeams'
import { Achievements } from '../achievements/Achievements'
import { Association } from '../association/Association'
import { Confederation } from '../confederation/Confederation'
import { TitleCard } from '../titleCard/TitleCard'
import s from './NationTeamCard.module.css'
import { getCurrentCountryAttribut } from 'data/data'

type Props = {
  data: NationalTeam
  closeInfoCard: () => void
}

export const NationalTeamsCard = ({data, closeInfoCard}: Props) => {
  const flag = getCurrentCountryAttribut(data.flags)
  const name = getCurrentCountryAttribut(data.names)

  return (
    <div className={s.container}>
      <div className={s.containerCoatOfArms}>
        <img className={s.imgCoatOfArms} src={data.coatOfArms} alt={`coat of arms ${data.names}`} />
      </div>
      <TitleCard flag={flag} name={name} icon={data.associationIcon}/>
      <button className={s.button} onClick={closeInfoCard}>X</button>
      <div className={s.containerRating}>
        <div className={s.rating}>
          <span className={s.value}>{data.rating}</span>
        </div>
        <span className={s.title}>Rating</span>
      </div>
      {/* <Confederation icon={data.confederationIcon} name={data.confederation}/> */}
      <Association associationDate={data.associationDate}/>
      <Achievements data={data.achievements}/>
  </div>
  )
}