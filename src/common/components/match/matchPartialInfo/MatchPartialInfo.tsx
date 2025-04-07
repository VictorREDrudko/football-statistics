import { WorldCupMatch } from "data/worldCupData/type-worldCupData"
import s from './MatchPartialInfo.module.css'
import { getYearTournament } from "utils/getYearTournament"
import { CountryTeam } from "common/components/countryTeam/CountryTeam"
import { Score } from "../score/Score"

type Props = {
  match: WorldCupMatch
  spanStyle?: React.CSSProperties;
}

export const MatchPartialInfo = ({match, spanStyle}: Props) => {
  const year = getYearTournament(match.id);
  
  return (
    <>
      <CountryTeam countryName={match.teams[0]} year={year}/>
      <Score score={match.score}/>
      <CountryTeam countryName={match.teams[1]} year={year}/>
    </>
  )
}