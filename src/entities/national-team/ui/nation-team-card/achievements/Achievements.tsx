import s from './Achievements.module.css'
import { TitleSectionCard } from '../title-section-card/TitleSectionCard';
import { Tournament } from '@/entities/national-team/model/types/types';
import { TournamentResults } from './tournamentResults/TournamentResults';
import { TeamPartStats } from '@/entities';
import { nullStats } from '@/entities/national-team/model/nullStats';

type Props = {
  countryName: string
  teamStats: TeamPartStats
  continentalCompetitions: Tournament
}

export const Achievements = ({countryName, teamStats, continentalCompetitions}: Props) => {
  const worldCupStats = teamStats.worldCupStats ? teamStats.worldCupStats : nullStats
  const continentalCompetitionstats = teamStats.nationalCompetitionStats ? teamStats.nationalCompetitionStats : nullStats

  return (
    <div className={s.container}>
      <TitleSectionCard title="Achievements"/>
      <TournamentResults  teamStats={worldCupStats} 
                          titleCompetition={'FIFA World Cup'} 
                          countryName={countryName} />
      <TournamentResults  teamStats={continentalCompetitionstats} 
                          titleCompetition={continentalCompetitions.title} 
                          countryName={countryName}/>
    </div>
  )
}