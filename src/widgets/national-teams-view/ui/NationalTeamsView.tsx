import s from './NationalTeamsView.module.css'
import { createTeamsStats, ratingCalculation, TeamsDashboard } from '@/features'
import {  ConfederationCode, 
          namesTeamByConfederation, 
          NationalTeamsCard, 
          nationalTeamsData, 
          TeamPartStats, 
          TeamsFullStats } from '@/entities'
import { NationalTeamsList } from './national-teams-list/NationalTeamsList';

type Props = {
  confederation: ConfederationCode;
  team: string;
  onTeamSelect: (teamName: string) => void;
  onCloseTeamCard: () => void;
  onConfederationChange: (confederation: ConfederationCode) => void; 
  searchParams: URLSearchParams;
};

export const NationalTeamsView = ({
  confederation,
  team,
  onTeamSelect,
  onCloseTeamCard,
  onConfederationChange, 
  searchParams
}: Props) => {
  const teamsFullStats: TeamsFullStats = createTeamsStats();

  const teamStats: TeamPartStats = {
    worldCupStats: teamsFullStats.worldCupStats.teamsStats[team],
    nationalCompetitionStats: teamsFullStats.nationalCompetitionStats.teamsStats['plag'],
  }

  ratingCalculation(teamsFullStats)

  const renderPage = team ? <NationalTeamsCard  teamData={nationalTeamsData[team]} 
                                                closeCard={onCloseTeamCard} 
                                                teamStats={teamStats}/>
      : (<>
          <TeamsDashboard numberTeams={namesTeamByConfederation[confederation].length}
                          confederation={confederation}
                          setConfederation={onConfederationChange} />
          <NationalTeamsList  confederation={confederation}
                              onTeamSelect={onTeamSelect}
                              searchParams={searchParams}/>
        </>)

  return (
    <div className={s.container}>
      {renderPage}
    </div>
  );
};