import { convertMatchScore } from '@/shared/lib/helpers/convertMatchScore';
import s from './ScoreMatchFlowchart.module.scss'
import { MatchScore } from '@/shared/model/match/types';


type Props = {
  score: Array<number[]>
}

export const ScoreMatchFlowchart = ({score}: Props) => {
  const matchScore: MatchScore = convertMatchScore(score);

  if(matchScore.extraData === 'e.t.') {
    matchScore.team1Goals = `${matchScore.team1Goals} e.t.`
    matchScore.team2Goals = `${matchScore.team2Goals} e.t.`
  }

  if(matchScore.extraData.split(' ')[0] === 'pen') {
    const scorePen = matchScore.extraData.match(/\d+/g); // Находим все числа в строке
    const goalsTeam1pen = scorePen ? scorePen[0] : ''
    const goalsTeam2pen = scorePen ? scorePen[1] : ''

    matchScore.team1Goals = `${matchScore.team1Goals} (${goalsTeam1pen} p)`
    matchScore.team2Goals = `${matchScore.team2Goals} (${goalsTeam2pen} p)`
  }

  return (
    <>
      <span className={s.score}>{matchScore.team1Goals}</span>
      <span className={s.score}>{matchScore.team2Goals}</span>
    </>
  )
}