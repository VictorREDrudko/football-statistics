import s from './TournamentResults.module.css'
import { TitleSectionCard } from '../../title-section-card/TitleSectionCard'
import { Results } from './results/Results'
import { createStatsResult } from '@/entities/national-team/lib/createStatsResult'
import { TeamStats } from '@/entities'

type Props = {
  teamStats: TeamStats
  titleCompetition: string
  countryName: string
}

export const TournamentResults = ({teamStats, titleCompetition, countryName}: Props) => {
  const statsResult = createStatsResult(teamStats, titleCompetition, countryName);

  return (
    <div className={s.container}>
      <TitleSectionCard title={titleCompetition}/>
      <Results statsResult={statsResult}/>
    </div>
  )
}