import { TournamentResults } from '../../../../common/components/tournamentResults/TournamentResults';
import { nationalTournaments } from '../../../../data/data';
import { confederationIcon } from '../../../../data/nationalTeamsData/nationalTeams';
import { Confeder } from '../../../../data/nationalTeamsData/type-nationalTeams';
import { worldCupData } from '../../../../data/worldCupData/worldCupData';
import { findTeamsByConfederation } from '../../../../logics/nationalTeamsLogic/findTeamsByConfederation';
import { TeamWorldCupAchievements, createTeamWorldCupAchievements } from '../../../../logics/worldCup/createTeamWorldCupAchievements';
import { IconConfederation } from '../../iconConfederation/IconConfederation';
import { TitleItem } from '../titleItem/TitleItem';
import s from './Achievements.module.css'

type Props = {
  nameTeam: string
}

export const Achievements = ({nameTeam}: Props) => {
  const achievements: TeamWorldCupAchievements = createTeamWorldCupAchievements(worldCupData, nameTeam);

  // определяем чемпионат конфедерации
  const nameConfederation: Confeder = findTeamsByConfederation(nameTeam)
  const nameContinentalCompetitions = nationalTournaments[nameConfederation].title

  return (
    <div className={s.container}>
      <TitleItem title="Achievements"/>
      <TournamentResults  resultsData={achievements} 
                          titleCompetition={'FIFA World Cup'} 
                          countryName={nameTeam} 
                          confeder={nameConfederation}/>
      <TournamentResults  resultsData={achievements} 
                          titleCompetition={nameContinentalCompetitions} 
                          countryName={nameTeam} 
                          confeder={nameConfederation}/>
      <div className={s.containerIcon}>
        <IconConfederation icon={confederationIcon[nameConfederation]} confeder={nameConfederation}/>
      </div>
    </div>
  )
}