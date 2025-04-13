import { TitleItem } from '../nationTeamCard/titleItem/TitleItem'
import s from './Achievements.module.css'
import { useState } from 'react'
import { createTeamWorldCupAchievements, TeamWorldCupAchievements } from 'logics/worldCup/createTeamWorldCupAchievements'
import { worldCupData } from 'data/worldCupData/worldCupData'
import { TournamentResults } from 'common/components/tournamentResults/TournamentResults'
import { nationalTournaments } from 'data/data'
import { findTeamsByConfederation } from 'logics/nationalTeamsLogic/findTeamsByConfederation'
import { Confederation } from 'data/nationalTeamsData/type-nationalTeams'
import { IconConfederation } from '../submenuOptions/iconConfederation/IconConfederation'
import { confederationIcon } from 'data/nationalTeamsData/nationalTeams'

type Props = {
  nameTeam: string
}

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <h2>Modal Window</h2>
        <p>Content inside the modal.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export const Achievements = ({nameTeam}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const achievements: TeamWorldCupAchievements = createTeamWorldCupAchievements(worldCupData, nameTeam);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // определяем чемпионат конфедерации
  const nameConfederation: Confederation = findTeamsByConfederation(nameTeam)
  const nameContinentalCompetitions = nationalTournaments[nameConfederation].title

  return (
    <div className={s.container}>
      {isModalOpen && <Modal onClose={closeModal} />}
      <TitleItem title="Achievements"/>
      <TournamentResults openModal={openModal} resultsData={achievements} title={'FIFA World Cup'}/>
      <TournamentResults openModal={openModal} resultsData={achievements} title={nameContinentalCompetitions}/>
      <div className={s.containerIcon}>
        <IconConfederation icon={confederationIcon[nameConfederation]} confeder={nameConfederation}/>
      </div>
    </div>
  )
}