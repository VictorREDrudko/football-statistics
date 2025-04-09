import { Position } from "@xyflow/react";
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






const generatePlayoffGrid = (playOffStages: string[], matches: WorldCupMatch[]) => {
  const res: WorldCupMatch[][] = playOffStages.map(stage => {
    const stages: WorldCupMatch[] = matches.filter(match => match.stage === stage)

    return stages
  })

  return res
}





const sortPlayoffGrid = (res: WorldCupMatch[][]) => {
  const sort: WorldCupMatch[][] = []

  if(res.length === 2) {
    const finalStage = res.filter(matchesStage => {
      return matchesStage[0].stage === '1:final'
    })
  
    sort.push(finalStage[0])
  
    const semiFinalsStage = res.filter(matchesStage => {
      return matchesStage[0].stage === '3:1/2 semi-finals'
    })
  
    sort.push(semiFinalsStage[0]) 
  }




  if(res.length === 5) {
    let labelChampion : string
    let labelNoChampion : string
    let labelFin1 : string
    let labelFin2 : string
  
    let labelQF1 : string
    let labelQF2 : string
    let labelQF3 : string
    let labelQF4 : string
  
    const finalStage = res.filter(matchesStage => {
      return matchesStage[0].stage === '1:final'
    })
  
    labelChampion = finalStage[0][0].teams[0]
    labelNoChampion = finalStage[0][0].teams[1]
  
    sort.push(finalStage[0])
  
    const thirdPlaceStage = res.filter(matchesStage => {
      return matchesStage[0].stage === '2:third place play-off'
    })
  
    sort.push(thirdPlaceStage[0])
  
    const semiFinalsStage = res.filter(matchesStage => {
      return matchesStage[0].stage === '3:1/2 semi-finals'
    })
  
    semiFinalsStage[0][0].teams.includes(labelChampion) ? sort.push(semiFinalsStage[0]) : sort.push(semiFinalsStage[0].reverse())
    
    labelFin1 = semiFinalsStage[0][0].teams[1]
    labelFin2 = semiFinalsStage[0][1].teams[1]
  
    const quarterFinalsStage = res.filter(matchesStage => {
      return matchesStage[0].stage === '4:1/4 quarter-finals'
    })
  
    const match1 = quarterFinalsStage[0].filter(match => match.teams.includes(labelChampion))
    const match2 = quarterFinalsStage[0].filter(match => match.teams.includes(labelFin1))
    const match3 = quarterFinalsStage[0].filter(match => match.teams.includes(labelNoChampion))
    const match4 = quarterFinalsStage[0].filter(match => match.teams.includes(labelFin2))
    const sortQF: WorldCupMatch[] = [...match1, ...match2, ...match3, ...match4]
  
    labelQF1 = match1[0].teams[1]
    labelQF2 = match2[0].teams[1]
    labelQF3 = match3[0].teams[1]
    labelQF4 = match4[0].teams[1]
  
    sortQF.forEach((match, index) => {
      if(match.date.split(' ')[1] === 'REPLAY') {
        sortQF[index - 1].score = [...sortQF[index - 1].score, ...match.score]
        match.score = []
      }
    })
  
    const sortQF1 = sortQF.filter(match => {
      return match.date.split(' ')[1] !== 'REPLAY'
    })
  
    sort.push(sortQF1)
    
    const roundOf16Stage = res.filter(matchesStage => {
      return matchesStage[0].stage === '5:1/8 round of 16'
    })
  
    const matchRoundOf161 = roundOf16Stage[0].filter(match => match.teams.includes(labelChampion))
    const matchRoundOf162 = roundOf16Stage[0].filter(match => match.teams.includes(labelQF1))
    const matchRoundOf163 = roundOf16Stage[0].filter(match => match.teams.includes(labelFin1))
    const matchRoundOf164 = roundOf16Stage[0].filter(match => match.teams.includes(labelQF2))
    const matchRoundOf165 = roundOf16Stage[0].filter(match => match.teams.includes(labelNoChampion))
    const matchRoundOf166 = roundOf16Stage[0].filter(match => match.teams.includes(labelQF3))
    const matchRoundOf167 = roundOf16Stage[0].filter(match => match.teams.includes(labelFin2))
    const matchRoundOf168 = roundOf16Stage[0].filter(match => match.teams.includes(labelQF4))
  
    const sortRoundOf16: WorldCupMatch[] = [...matchRoundOf161, ...matchRoundOf162, ...matchRoundOf163, ...matchRoundOf164,
      ...matchRoundOf165, ...matchRoundOf166, ...matchRoundOf167, ...matchRoundOf168
    ]
  
    sort.push(sortRoundOf16)
  }
  return sort
}


export const createNodes = (playOffStages: string[], matches: WorldCupMatch[]) => {
  const rrr = generatePlayoffGrid(playOffStages, matches)
  const ttt = sortPlayoffGrid(rrr).reverse()
  
  let nodes: NodesItem[] = [];

  if (playOffStages.length === 2) {
    nodes = matches.map((match, index) => {
      return {
        id: String(index + 1),
        type: "customNode",
        data: { label: match.stage, match: match },
        position: {
          x: index + 1 === 3 ? 320 : 0,
          y: index + 1 === 1 ? 0 : index + 1 === 2 ? 180 : 90,
        },
        sourcePosition: index + 1 === 3 ? Position.Left : Position.Right,
        className: index === matches.length - 1 ? s.lastNode : s.node,
      };
    });
  }

  if (ttt.length === 5) {
    let countId = 0
    ttt.forEach((stageMatches, key) => {
      let posY = 0;

      if(key === 0) {
        let stepY = 90

        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: 0,
              y: index === 0 ? posY : posY += stepY,
            },
            sourcePosition: Position.Right,
            className: s.node,
          };

          nodes.push(node)
        })
      }

      if(key === 1) {
        posY = 45
        let stepY = 180

        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: 320,
              y: index === 0 ? posY : posY += stepY,
            },
            sourcePosition: Position.Right,
            className: s.node,
          };

          nodes.push(node)
        })
      }

      if(key === 2) {
        posY = 135
        let stepY = 360

        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: 640,
              y: index === 0 ? posY : posY += stepY,
            },
            sourcePosition: Position.Right,
            className: s.node,
          };

          nodes.push(node)
        })
      }

      if(key === 3) {
        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: 960,
              y: 405,
            },
            sourcePosition: Position.Right,
            className: s.node,
          };

          nodes.push(node)
        })
      }

      if(key === 4) {
        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: 960,
              y: 315,
            },
            sourcePosition: Position.Right,
            className: s.lastNode,
          };

          nodes.push(node)
        })
      }
    })
  }
  return nodes;
}

export const createHeight = (playOffStages: string[], matches: WorldCupMatch[]) => {
  if (playOffStages.length === 2) {
    return "350px";
  }

  if (playOffStages.length === 5) {
    return "750px";
  }

  return '350px'
};

export const createEdges = (playOffStages: string[]) => {
  if(playOffStages.length === 2) {
    return (
      [
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
      ]
    )
  }

  if(playOffStages.length === 5) {
    return (
      [
        {
          id: "0->8",
          type: "step",
          source: "0",
          target: "8",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "1->8",
          type: "step",
          source: "1",
          target: "8",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "2->9",
          type: "step",
          source: "2",
          target: "9",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "3->9",
          type: "step",
          source: "3",
          target: "9",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "4->10",
          type: "step",
          source: "4",
          target: "10",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "5->10",
          type: "step",
          source: "5",
          target: "10",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "6->11",
          type: "step",
          source: "6",
          target: "11",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "7->11",
          type: "step",
          source: "7",
          target: "11",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "8->12",
          type: "step",
          source: "8",
          target: "12",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "9->12",
          type: "step",
          source: "9",
          target: "12",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "10->13",
          type: "step",
          source: "10",
          target: "13",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "11->13",
          type: "step",
          source: "11",
          target: "13",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "12->15",
          type: "step",
          source: "12",
          target: "15",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "13->15",
          type: "step",
          source: "13",
          target: "15",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
      ]
    )
  }
} 



export const convertMatchScore = (score: Array<number[]>) => {
  if (score[1].length > 0 && score[2].length === 0 && score.length === 3) {
    const goalsTeam1 = score[0][0] + score[1][0];
    const goalsTeam2 = score[0][1] + score[1][1];
    return [[goalsTeam1, goalsTeam2]];
  }

  if (score[2].length > 0 && score.length === 3) {
    const goalsTeam1 = score[0][0] + score[1][0];
    const goalsTeam2 = score[0][1] + score[1][1];
    return [
      [goalsTeam1, goalsTeam2],
      [score[2][0], score[2][1]],
    ];
  }

  if(score.length > 3) {
    //  [1, 1] [0, 0] [] [1, 0] [] []
    if (score[4].length === 0) {
      return [
        [score[0][0] + score[1][0], score[0][1] + score[1][1]],
        [score[3][0], score[3][1]],
        [],
      ]
    }
    //  [1, 1] [0, 0] [] [1, 0] [2, 1] []
    if (score[4].length > 0 && score[5].length === 0) {
      return [
        [score[0][0] + score[1][0], score[0][1] + score[1][1]],
        [score[3][0], score[3][1]],
        [score[4][0], score[4][1]],
        [],
      ]
    }
    //  [1, 1] [0, 0] [] [1, 0] [2, 1] [5, 4]
    if (score[5].length > 0) {
      return [
        [score[0][0] + score[1][0], score[0][1] + score[1][1]],
        [score[3][0], score[3][1]],
        [score[4][0], score[4][1]],
        [score[5][0], score[5][1]],
      ]
    }
  }

  return [score[0][0], score[0][1]];
};


export const filterFinalAnd3PlaceMatches = (matches: WorldCupMatch[]) => {
  const filterMatches = matches.filter(match => match.stage === '1:final' || match.stage === '2:third place play-off');

  return filterMatches[0].stage === '1:final' ? filterMatches : filterMatches.reverse()
}

export const filterMatchesPlayoff = (matches: WorldCupMatch[]) => {
  return matches.filter(match => match.stage !== '1:final' && match.stage !== '2:third place play-off');
}
