import { MatchInfo } from '../../model'
import { Score } from '../score/Score'
import { getYearFromMatchDate } from '../../lib'


type Props = {
  match: MatchInfo
  onClick?: () => void
}

export const MatchCard = ({ match, onClick }: Props) => {
  const year = getYearFromMatchDate(match.date)
  const [team1, team2] = match.teams

  return (
    <div onClick={onClick}>
      <CountryTeam countryName={team1} year={year} reverse={true} />
      <Score score={match.score} />
      <CountryTeam countryName={team2} year={year} reverse={false} />
    </div>
  )
}
