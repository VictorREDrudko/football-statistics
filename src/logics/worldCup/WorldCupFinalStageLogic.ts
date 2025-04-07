import { Position } from "@xyflow/react";
// import s from "./../../../features//worldCup/finalStage/knockout-stage/KnockoutStage.module.css";
import s from "./../../features/worldCup/finalStage/playOffStage/flowchartPlayOffStage/FlowchartPlayOffStage.module.css";
import { worldCupData } from "data/worldCupData/worldCupData";
import { NodesItem, WorldCupInfo, WorldCupMatch } from "data/worldCupData/type-worldCupData";

export const worldCupYears: string[] = Object.keys(worldCupData);

export const getTournamentData = (year: string) => worldCupData[year];

export const getQualifiedTeamsForPlayoff = ( matches: WorldCupMatch[] ) => {
  return Array.from(new Set(matches.map((match) => match.teams).flat()));
};

export const getSortGroupNames = (matches: WorldCupMatch[]) => {
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
    return a.points > b.points ? -1 : 1;
  });

  return teamTableData;
}

export const createWorldCupStatsData = (dataTournament: WorldCupInfo) => {
  const matches = dataTournament.finalStage;
  const numberOfTeams = Array.from(new Set(matches.map((match) => match.teams).flat())).length

  let attendance = 0;
  matches.forEach((match) => {
    attendance += Number(match.stadium.attendance.replace(" ", ""));
  });
  const averageAttendance = +(attendance / matches.length).toFixed(0);

  const attendanceString = attendance.toLocaleString().replace(",", " ");
  const averageAttendanceString = averageAttendance.toLocaleString().replace(",", " ");

  let goals = 0;
  matches.forEach((match) => {
    goals += match.score[0][0] + match.score[0][1] 
    if (match.score[1].length > 0) {
      goals += match.score[1][0] + match.score[1][1] 
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
    dataTournament.finalStage.length, 
    [goals, `(${(goals / matches.length).toFixed(2)} per match)`],
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

export const createNodes = (playOffStages: string[], matches: WorldCupMatch[]) => {
  let nodes: NodesItem[] = [];

  if (playOffStages.length === 2) {
    nodes = matches.map((match, index) => {
      return {
        id: String(index + 1),
        type: "customNode",
        data: { label: match.stage, match: match },
        position: {
          x: index + 1 === 3 ? 280 : 0,
          y: index + 1 === 1 ? 0 : index + 1 === 2 ? 160 : 80,
        },
        sourcePosition: index + 1 === 3 ? Position.Left : Position.Right,
        className: index === matches.length - 1 ? s.lastNode : s.node,
      };
    });
  }

  if (playOffStages.length === 5) {
    playOffStages.forEach((stage, key) => {
      let posX = 0;
      let posY = 0;
      let count = 0;

      if(key === 1) posX += 280;
      if(key === 2) posX += 560;
      if(key === 3) posX += 840;
      if(key === 4) posX += 840;

      if(key === 1) count = 0;
      if(key === 2) count = 2;
      if(key === 3) count = 3;
      if(key === 4) count = 4;

      matches.forEach((match, index) => {

        if(stage === match.stage) {
          count += 1

          if(count === 1) posY = -270;
          if(count === 2) posY = -180;
          if(count === 3) posY = -90;
          if(count === 4) posY = 0;
          if(count === 5) posY = 90;
          if(count === 6) posY = 180;
          if(count === 7) posY = 270;
          if(count === 8) posY = 360;

          let node = {
            id: String(index + 1),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: posX,
              y: posY,
            },
            sourcePosition: index + 1 === 3 ? Position.Left : Position.Right,
            className: index === matches.length - 1 ? s.lastNode : s.node,
          };

          nodes.push(node)
        }
      });
    })

  }
  console.log(nodes)
  return nodes;
};

export const createHeight = (playOffStages: string[], matches: WorldCupMatch[]) => {
  if (playOffStages.length === 2) {
    return "350px";
  }

  if (playOffStages.length === 5) {
    return "750px";
  }
};

export const edges = [
  {
    id: "1->3",
    type: "step",
    source: "1",
    target: "3",
    animated: true,
    style: { stroke: "white", strokeWidth: 1 },
  },
  {
    id: "e2-3",
    type: "step",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "white", strokeWidth: 1 },
  },
];

export const convertMatchScore = (score: Array<number[]>) => {
  if (score[1].length > 0 && score[2].length === 0) {
    const goalsTeam1 = score[0][0] + score[1][0];
    const goalsTeam2 = score[0][1] + score[1][1];
    return [[goalsTeam1, goalsTeam2]];
  }

  if (score[2].length > 0) {
    const goalsTeam1 = score[0][0] + score[1][0];
    const goalsTeam2 = score[0][1] + score[1][1];
    return [
      [goalsTeam1, goalsTeam2],
      [score[2][0], score[2][1]],
    ];
  }

  return [score[0][0], score[0][1]];
};