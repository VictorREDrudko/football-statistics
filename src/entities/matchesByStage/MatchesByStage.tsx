import { MatchDisplay, MatchInfo } from '@/features/matchDisplay'
import s from './MatchesByStage.module.scss'
import { Match } from '../match/ui/Match'


type Props = {
  matches: MatchInfo[]
}

export const MatchesByStage = ({ matches }: Props) => {
  const groupMatches = matches.map((match) => {
    return (
      <div key={match.id} className={s.containerMatch}>
        <MatchDisplay match={match} />
      </div>
    )
  })

  return <div className={s.container}>{groupMatches}</div>
}
