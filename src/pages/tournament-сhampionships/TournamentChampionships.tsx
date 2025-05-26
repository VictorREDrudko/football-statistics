import { confederationData, TournamentCard } from "@/entities"
import s from "./TournamentChampionships.module.scss"
import { useParams } from "react-router-dom";

export const TournamentChampionships = () => {
  const { tournament } = useParams();

  const codeOrganization = tournament?.split('-')[0].toUpperCase() as keyof typeof confederationData;
  const tournamentData = codeOrganization in confederationData ? confederationData[codeOrganization] : null;

  const tournamentCards = tournamentData?.tournament
    ? Object.keys(tournamentData.tournament).map((year) => {
        return <TournamentCard tournament={tournamentData.tournament[year]} key={tournamentData.tournament[year].id} />;
      })
    : <p>{'Tournament data not found'}</p>;

  return (
    <div className={s.container}>
      {tournamentCards}
    </div>
  );
};