import { useParams } from "react-router-dom";
import s from './TournamentFinalStage.module.scss';
import { ConfederationCode, confederationData } from "@/entities";
import { TournamentDetails } from "@/widgets";

export const TournamentFinalStage = () => {
  const { tournament, urlYear } = useParams<{ tournament: string, urlYear: string }>();

  const tournamentCode = tournament?.split('-')[0].toUpperCase();

  const isOrganizationValid = tournamentCode && tournamentCode in confederationData;
  const organizationCode = isOrganizationValid ? tournamentCode as ConfederationCode : undefined;

  const isYearValid = organizationCode && urlYear && urlYear in confederationData[organizationCode].tournament;
  const year = isYearValid ? urlYear : undefined;

  if (!organizationCode || !year) {
    return <div>Invalid tournament or year</div>;
  }

  return (
    <div className={s.container}>
      <TournamentDetails 
        organizationCode={organizationCode} 
        year={year}
      />
    </div>
  );
};