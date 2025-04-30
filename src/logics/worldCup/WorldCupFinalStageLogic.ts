import { worldCupData } from "data/worldCupData/worldCupData";
import { WorldCupInfo, WorldCupMatch } from "data/worldCupData/type-worldCupData";

export const worldCupYears: string[] = Object.keys(worldCupData);

export const getTournamentData = (year: string) => worldCupData[year];

export const getQualifiedTeamsForPlayoff = ( matches: WorldCupMatch[] ) => {
  return Array.from(new Set(matches.map((match) => match.teams).flat()));
};

export const getSortGroupNames = (matches: WorldCupMatch[]) => {
  if (matches[0].stage.split(":")[0].trim() === "group Final round") {
    return Array.from(new Set(matches.map((match) => match.stage.split(":")[0].trim()))).sort();
  }

  return Array.from(new Set(matches.map((match) => match.stage))).sort();
};


export const createGroupTableData = (qualifiedTeamsForPlayoff: string[], groupMatches: WorldCupMatch[]) => {
  const groupTeamNames: string[] = Array.from(new Set(groupMatches.map((match) => match.teams).flat()));

  const teamTableData = groupTeamNames.map((teamName) => {
    const tableData = {
      position: 0,
      team: teamName,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalsDifference: 0,
      points: 0,
      qualification: "",
    };

    groupMatches.forEach((match) => {
      match.teams.forEach((team, index) => {
        if (tableData.team === team) {
          tableData.played += 1;
          tableData.goalsFor += match.score[0][index];
          if(index === 0) {
            tableData.goalsAgainst += match.score[0][1]
            if (match.score[0][0] > match.score[0][1]) tableData.won += 1;
            if (match.score[0][0] < match.score[0][1]) tableData.lost += 1;
          } else {
            tableData.goalsAgainst += match.score[0][0];
            if (match.score[0][0] > match.score[0][1]) tableData.lost += 1;
            if (match.score[0][0] < match.score[0][1]) tableData.won += 1;
          }

          if (match.score[0][0] === match.score[0][1]) tableData.drawn += 1;

          tableData.goalsDifference = tableData.goalsFor - tableData.goalsAgainst;
          tableData.points =
            Number(match.date.slice(-4)) <= 1981
              ? tableData.won * 2 + tableData.drawn * 1
              : tableData.won * 3 + tableData.drawn * 1;

          tableData.qualification = qualifiedTeamsForPlayoff.includes(tableData.team, 0)
          ? "+"
          : "";
        }
      })
    })

    return tableData
  })
  
  teamTableData.sort((a, b) => {
    if (a.points === b.points) {
      if (a.played !== b.played) {
        return a.played < b.played ? -1 : 1; // Чем меньше сыграно матчей, тем выше позиция
      }

      if (a.goalsDifference === b.goalsDifference) {
        return a.goalsFor > b.goalsFor ? -1 : 1; 
      }
      return a.goalsDifference > b.goalsDifference ? -1 : 1;
    }
    return a.points > b.points ? -1 : 1;
  });

  return teamTableData;
}

export const createWorldCupStatsData = (dataTournament: WorldCupInfo) => {
  const matches = dataTournament.finalStage;
  const numberOfTeams = Array.from(new Set(matches.map((match) => match.teams).flat())).filter(name => name !== '').length

  // количество не сыгранных игр
  let countNoMatch = 0;

  matches.forEach((match) => {
    if(match.score[0].length === 0) {
      countNoMatch += 1 
    }
  });

  const countMatches = dataTournament.finalStage.length - countNoMatch

  let attendance = 0;
  matches.forEach((match) => {
    attendance += Number(match.stadium.attendance.replace(" ", ""));
  });
  const averageAttendance = +(attendance / countMatches).toFixed(0);

  const attendanceString = attendance.toLocaleString().replace(",", " ");
  const averageAttendanceString = averageAttendance.toLocaleString().replace(",", " ");

  let countGoals = 0;
  matches.forEach((match) => {
    if(match.score[0].length > 0) {
      countGoals += match.score[0][0] + match.score[0][1] 
      if (match.score[1].length > 0) {
        countGoals += match.score[1][0] + match.score[1][1] 
      }
    }
  });

  const playerStats: Players = {};

  matches.forEach((match) => {
    match.goals.forEach((playersInfo, index) => {
      if (playersInfo.playersScoredGoal.length > 0) {
        playersInfo.playersScoredGoal.forEach((player: string, key) => {
          if (!playerStats[player]) {
            playerStats[player] = {
              name: player,
              country: match.teams[index],
              goals: 0,
            };
          }
          playerStats[player].goals += playersInfo.timeGoals[key]?.split(",").length || 0;
        });
      }
    });
  });

  const playersInfo: Player[] = Object.values(playerStats);
  playersInfo.sort((a, b) => b.goals - a.goals);

  const maxGoals = Math.max(...playersInfo.map((player) => player.goals));

  const topScorer = playersInfo.filter((player) => player.goals === maxGoals);

  return [
    dataTournament.hostCountry, 
    dataTournament.date, 
    'Not yet', 
    numberOfTeams, 
    countMatches, 
    [countGoals, `(${(countGoals / countMatches).toFixed(2)} per match)`],
    [attendanceString, `(${averageAttendanceString} per match)`],
    topScorer
  ]
}

export type Player = {
  name: string;
  goals: number;
  country: string;
};

export type Players = {
  [key: string]: Player
};

// Knockout stage
export const getUniqueStagePlayOff = (matches: WorldCupMatch[]) => {
  return Array.from(new Set(matches.map((match) => match.stage))).sort().reverse();
};

export const filterFinalAnd3PlaceMatches = (matches: WorldCupMatch[]) => {
  const filterMatches = matches.filter(match => match.stage === '1:final' || match.stage === '2:third place play-off');

  return filterMatches[0].stage === '1:final' ? filterMatches : filterMatches.reverse()
}

export const filterMatchesPlayoff = (matches: WorldCupMatch[]) => {
  return matches.filter(match => matches.length === 2 ? match : match.stage !== '1:final' && match.stage !== '2:third place play-off');
}
