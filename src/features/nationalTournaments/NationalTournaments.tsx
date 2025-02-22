import { nationalTournaments, nationalTournamentsKeys } from 'data/data'
import s from './NationalTournaments.module.css'
import { NameTournament } from 'data/type-data'
import { NationaleTournament } from './nationaleTournament/NationaleTournament'

export const NationaleTournaments = () => {
  const mapped = nationalTournamentsKeys.map((tournament: NameTournament) => {
    return <NationaleTournament tournament={nationalTournaments[tournament]}/>
  })

  return <div className={s.container}> {mapped} </div>
}