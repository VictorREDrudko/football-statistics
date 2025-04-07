import s from './TournamentInfo.module.css'
import { Flag } from 'common/components/flag/Flag'
import { CountryTeam } from 'common/components/countryTeam/CountryTeam'
import { WorldCupInfo } from 'data/worldCupData/type-worldCupData'
import { worldCupCharacteristic } from 'data/worldCupData/worldCupData'
import { getYearTournament } from 'utils/getYearTournament'
import { createWorldCupStatsData } from 'logics/worldCup/WorldCupFinalStageLogic'

type Props = {
  dataTournament: WorldCupInfo
}

export const TournamentInfo = ({dataTournament} : Props) => {
  const year = getYearTournament(dataTournament.id)
  const worldCupStatsData = createWorldCupStatsData(dataTournament)

  const tournamentDetails = worldCupStatsData.map((characteristic, index) => {
    let value;
    if(index === 0 && Array.isArray(characteristic) && characteristic.every((item) => typeof item === "string")) {
      value = characteristic.map((countryName, key) => <CountryTeam key={key} countryName={countryName} year={year}/>)
    }

    if(index === worldCupStatsData.length - 1 && Array.isArray(characteristic) && characteristic.every((item) => typeof item === 'object')) {
      value = characteristic.map((playerInfo, key) => {
        return (
          <div className={s.itemPlayer} key={key}>
            <div className={s.containerPlayer}>
              <Flag countryName={playerInfo.country} year={year}/>
              <span className={s.namePlayer}>{playerInfo.name}</span>
            </div>
            <span className={s.goalsPlayer}>{`(${playerInfo.goals}) goals`}</span>
          </div>
          )
        })
    }

    if(typeof(characteristic) === 'string' || typeof(characteristic) === 'number') {
      value = <span>{characteristic}</span>
    }

    if(index === 5 || index === 6
      && Array.isArray(characteristic) 
      && characteristic.every((item) => typeof item === 'string' || typeof item === 'number')) {
      value = (characteristic as (string | number)[]).map((el, key) => {
        return <span key={key}>{el}</span>
      })
    }

    return (
      <div className={s.containerItem} key={index}>
        <span className={s.itemTitle}>{worldCupCharacteristic[index] + ':'}</span>
        <div className={s.containerValue}>
          {value}
        </div>
      </div>
    )
  })
  
  return(
    <div className={s.container}>
      <span className={s.title}>Tournament details:</span>
      {tournamentDetails}
    </div>
  )
}