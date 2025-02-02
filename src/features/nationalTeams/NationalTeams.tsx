import { nameTeams, nationalTeams } from 'data/data'
import s from './NationalTeams.module.css'
import { NationalTeamsCard } from './nationTeamCard/NationTeamCard'
import { ListNationalTeams } from './listNationalTeams/ListNationalTeams'
import { useState } from 'react'
import { Select } from './select/Select'

export const NationalTeams = () => {
  const [isInfoCard, setIsInfoCard] = useState(false)
  const [team, setTeam] = useState<string>('')

  const mapped = nameTeams.concacaf.map(el => {
    return <ListNationalTeams data={nationalTeams[el]}
                              key={nationalTeams[el].id} 
                              openInfoCard={(bool: boolean) => setIsInfoCard(bool)}
                              setTeam={(team: string) => setTeam(team)}/>
  })

  const rendering = isInfoCard ? 
    <NationalTeamsCard data={nationalTeams[team]} closeInfoCard={(bool: boolean) => setIsInfoCard(bool)}/>
    : 
    <>
      <Select/>
      <ul className={s.wrapper}> {mapped} </ul>
    </>

  return (
    <div className={s.container}>
      {rendering}
    </div>
  )
}