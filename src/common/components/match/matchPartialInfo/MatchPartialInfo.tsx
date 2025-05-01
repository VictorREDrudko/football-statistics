import { WorldCupMatch } from "../../../../data/worldCupData/type-worldCupData";
import { getYearTournament } from "../../../../utils/getYearTournament";
import { CountryTeam } from "../../countryTeam/CountryTeam";
import { Score } from "../score/Score"

type Props = {
  match: WorldCupMatch
}

export const MatchPartialInfo = ({match}: Props) => {
  const year = getYearTournament(match.date);


  
  return (
    <>
      <CountryTeam countryName={match.teams[0]} year={year} reverse={true}/>
      <Score score={match.score}/>
      <CountryTeam countryName={match.teams[1]} year={year} reverse={false}/>
    </>
  )
}