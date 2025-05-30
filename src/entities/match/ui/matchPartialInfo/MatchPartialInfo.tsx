import { CountryTeam } from "@/entities";
import { MatchProps } from "../../model/types";
import { Score } from "@/shared";
import { getYearFromMatch } from "@/shared/lib/getYearFromMatch";

type Props = {
  match: MatchProps
}

export const MatchPartialInfo = ({match}: Props) => {
  const year = getYearFromMatch(match.date);
  
  return (
    <>
      <CountryTeam countryName={match.teams[0]} year={year} reverse={true}/>
      <Score score={match.score}/>
      <CountryTeam countryName={match.teams[1]} year={year} reverse={false}/>
    </>
  )
}