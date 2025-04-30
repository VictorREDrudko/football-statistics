import { WorldCupMatch } from "data/worldCupData/type-worldCupData"
import s from './MatchAllInfo.module.css'
import { getYearTournament } from "utils/getYearTournament"
import { MatchDateAndLocation } from "./matchDateAndLocation/MatchDateAndLocation"
import { Match } from "../Match"
import { MatchPartialInfo } from "../matchPartialInfo/MatchPartialInfo"
import { InfoGoals } from "./infoGoals/InfoGoals"

type Match = {
  match: WorldCupMatch
}

export const MatchAllInfo = ({match}: Match) => {
  return (
    <div className={s.container}>
      <MatchDateAndLocation date={match.date} stadiumInfo={match.stadium}/>
      <div className={s.containerMatch}>
        <div className={s.containerMatch1}>
          <MatchPartialInfo match={match} />
        </div>
        <InfoGoals infoGoals={match.goals}/>
      </div>
      {/* <InfoGoals infoGoals={match.goals}/> */}
    </div>
  )
}