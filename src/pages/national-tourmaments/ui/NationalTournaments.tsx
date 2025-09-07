
import { ConfederationCode } from '@/entities/team/model/types'
import s from './NationalTournaments.module.scss'
import { NationalTournament } from '@/widgets'



export const NationalTournaments = () => {
  // const tournaments = Object.keys(confederationData).map((confederationCode) => {
  //   return <NationalTournament  tournamentData={confederationData[confederationCode as ConfederationCode]} 
  //                               key={confederationData[confederationCode as ConfederationCode].id}
  //           />
  // })

  return (
  <div className={s.container}>
    <div className={s.containerLinks}>
      {/* {tournaments} */}
    </div>
  </div>)
}