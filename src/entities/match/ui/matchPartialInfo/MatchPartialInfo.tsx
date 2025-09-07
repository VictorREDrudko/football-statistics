import { CountryTeam } from '@/shared/ui/country-team'
import { MatchBasicInfo } from '../../model'
import { Score } from './score/Score'

type Props = {
  matchBasicInfo: MatchBasicInfo
}

export const MatchPartialInfo = ({ matchBasicInfo }: Props) => {
  const { teams, flags, score, isRealTeams } = matchBasicInfo
  const [team1, team2] = teams
  const [flagsTeam1, flagsTeam2] = flags
  const [isRealTeam1, isRealTeam2] = isRealTeams

  return (
    <>
      <CountryTeam
        countryName={team1}
        countryFlag={flagsTeam1}
        reverse={true}
        isCountryReal={isRealTeam1}
      />
      <Score score={score} />
      <CountryTeam
        countryName={team2}
        countryFlag={flagsTeam2}
        reverse={false}
        isCountryReal={isRealTeam2}
      />
    </>
  )
}
