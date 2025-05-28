import { nationalTournaments, nationalTournamentsKeys } from '../../data/data'
import { NameTournament } from '../../data/type-data'
import s from './NationalTournaments.module.css'
import { NationaleTournament } from './nationaleTournament/NationaleTournament'

export const NationaleTournaments = () => {
  const mapped = nationalTournamentsKeys.map((tournament: NameTournament) => {
    return <NationaleTournament tournament={nationalTournaments[tournament]} key={nationalTournaments[tournament].id}/>
  })

  return <div className={s.container}> {mapped} </div>
}