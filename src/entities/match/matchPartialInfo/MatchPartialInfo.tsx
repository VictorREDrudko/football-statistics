import { MatchInfo } from '@/shared/model/tournament-config/class-match/types'
import { Score } from '../score/Score'
import { getYearFromMatchDate } from '../lib/getYearFromMatchDate'
import { CountryTeam } from '@/entities/countryTeam/ui/CountryTeam'
import s from './MatchPartialInfo.module.scss'

type Props = {
  match: MatchInfo
}

export const MatchPartialInfo = ({ match }: Props) => {
  const year = getYearFromMatchDate(match.date)
  const [team1, team2] = match.teams

  return (
    <>
      <CountryTeam countryName={team1} year={year} reverse={true} />
      <Score score={match.score} />
      <CountryTeam countryName={team2} year={year} reverse={false} />
    </>
  )
}
