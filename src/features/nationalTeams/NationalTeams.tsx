import { nameTeams, nationalTeams } from 'data/data'
import s from './NationalTeams.module.css'
import { NationalTeamsCard } from './nationTeamCard/NationTeamCard'

export const NationalTeams = () => {
  const mapped = nameTeams.uefa.map(el => {
    return <NationalTeamsCard data={nationalTeams[el]}/>
  })

  return (
    <div className={s.wrapper}> {mapped} </div>
  )
}