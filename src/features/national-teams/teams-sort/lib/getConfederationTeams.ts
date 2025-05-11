import { ConfederationCode, namesTeamByConfederation, nationalTeamsData, NationalTeamType } from "@/entities";

// Gets the national teams of a specific confederation
export const getConfederationTeams = (confederation: ConfederationCode) : NationalTeamType[] => {
  return namesTeamByConfederation[confederation].map(teamName => nationalTeamsData[teamName]);
};
