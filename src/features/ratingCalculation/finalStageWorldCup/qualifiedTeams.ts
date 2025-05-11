import { WorldCupData } from "@/data/worldCupData/type-worldCupData";

type QualifiedTeamsList = {
  [key: string]: string[]
}

export const qualifiedTeams = (worldCup: WorldCupData) => {
    const qualifiedTeamsList: QualifiedTeamsList = {};

    Object.keys(worldCup).forEach((year) => {
      const teamsList: string[] = [];

      worldCup[year].finalStage.forEach((match) => {
        if (!teamsList.includes(match.teams[0])) {
          teamsList.push(match.teams[0]);
        }
        if (!teamsList.includes(match.teams[1])) {
          teamsList.push(match.teams[1]);
        }
      });

      qualifiedTeamsList[year] = teamsList;
    });

    return qualifiedTeamsList;
};