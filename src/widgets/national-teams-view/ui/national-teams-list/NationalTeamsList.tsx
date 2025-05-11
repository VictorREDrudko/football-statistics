import s from './NationalTeamsList.module.css'
import { sortTeams } from '@/features'
import { ConfederationCode, confederationData, MiniCard } from '@/entities'
import { getCurrentCountryName } from '@/shared';

type Props = {
  confederation: ConfederationCode;
  onTeamSelect: (teamName: string) => void;
  searchParams: URLSearchParams;
};

export const NationalTeamsList = ({ confederation, onTeamSelect, searchParams}: Props) => {
  const sortedTeams = sortTeams( confederation, searchParams )

  const renderTeams = sortedTeams.map(team => {
    const currentCountryName = getCurrentCountryName(team.names);

    return <MiniCard  nameCountry={currentCountryName} 
                      iconPath={team.associationIcon}
                      key={team.id} 
                      onSelect={() => onTeamSelect(currentCountryName)} />
  })

  return (
    <ul className={s.container} 
        style={{backgroundImage: `url(${confederationData[confederation].backgroundConfederationPath})`}} >
      {renderTeams}
    </ul>
  );
};