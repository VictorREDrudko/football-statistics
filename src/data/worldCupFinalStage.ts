import { Position } from "@xyflow/react"
import { dataFifaWorldCup } from "./data"
import { MatchFifaWorldCup } from "./type-data"
import { StatisticTeam } from "./type-worldCupFinalStage"
import s from './../features/worldCup/finalStage/knockout-stage/KnockoutStage.module.css';

export const getTournament = (year: string | undefined) => {
  return year ? dataFifaWorldCup[year].finalStage : undefined
}

export const getAllMatchesInGroupStage = (matches: MatchFifaWorldCup[] | undefined) => {
  return matches ? matches.filter(match => match.stage.slice(0, 5) === 'group') : undefined
}

export const getMatchesInPlayOff = (matches: MatchFifaWorldCup[] | undefined) => {
  return matches ? matches.filter(match => match.stage.slice(0, 5) !== 'group') : undefined
}

export const getUniqueTeamsInPlayOff = (matchesPlayOff: MatchFifaWorldCup[] | undefined) => {
  return matchesPlayOff ? Array.from(new Set(matchesPlayOff.map(match => match.teams).flat())) : []
}

export const uniqueTitleGroups = (matches: MatchFifaWorldCup[] | undefined) => {
  return matches ? Array.from(new Set(matches.map(match => match.stage))).sort() : []
}

export const getMatchesInGroup = (titleGroup: string, matches: MatchFifaWorldCup[] | undefined) => {
  return matches ? matches.filter(match => match.stage === titleGroup) : []
}

export const getUniqueTeamsInGroup = (matches: MatchFifaWorldCup[] | undefined) => {
  return matches ? Array.from(new Set(matches.map(match => match.teams).flat())) : []
}

export const getInitialDataTeam = (name: string) : StatisticTeam => {
  return (
    {
      position: 0,
      team: name,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalsDifference: 0, 
      points: 0,
      qualification: ''
    }
  )
}

export const addDataTeamInGroup = (initialDataTeam : StatisticTeam, matches: MatchFifaWorldCup[] | '', teamsPlayOff: string[]) => {
  if (matches) {
    matches.forEach(match => {
      if(initialDataTeam.team === match.teams[0]) {
        initialDataTeam.played += 1;
        initialDataTeam.goalsFor += match.score[0][0];
        initialDataTeam.goalsAgainst += match.score[0][1];
        if(match.score[0] > match.score[1]) initialDataTeam.won += 1;
        if(match.score[0] < match.score[1]) initialDataTeam.lost += 1;
        if(match.score[0] === match.score[1]) initialDataTeam.drawn += 1;
        initialDataTeam.goalsDifference = initialDataTeam.goalsFor - initialDataTeam.goalsAgainst;
        initialDataTeam.points = Number(match.date.slice(-4)) <= 1981 
          ? (initialDataTeam.won * 2) + (initialDataTeam.drawn * 1)
            : (initialDataTeam.won * 3) + (initialDataTeam.drawn * 1)
      }
  
      if(initialDataTeam.team === match.teams[1]){
        initialDataTeam.played += 1;
        initialDataTeam.goalsFor += match.score[0][1];
        initialDataTeam.goalsAgainst += match.score[0][0];
        if(match.score[1] > match.score[0]) initialDataTeam.won += 1;
        if(match.score[1] < match.score[0]) initialDataTeam.lost += 1;
        if(match.score[0] === match.score[1]) initialDataTeam.drawn += 1;
        initialDataTeam.goalsDifference = initialDataTeam.goalsFor - initialDataTeam.goalsAgainst;
        initialDataTeam.points = Number(match.date.slice(-4)) <= 1981 
          ? (initialDataTeam.won * 2) + (initialDataTeam.drawn * 1)
            : (initialDataTeam.won * 3) + (initialDataTeam.drawn * 1)
      }
    })
  }

  initialDataTeam.qualification = teamsPlayOff.includes(initialDataTeam.team, 0) ? '+' : ''

  return initialDataTeam
}

export const sortTeamsInGroup = (dataTeamsInGroup : StatisticTeam[]) => {
   return dataTeamsInGroup.sort((a, b) => {
    return a.points > b.points ? -1 : 1
  })
}

export const headerTable : string[] = [
  'position:№', 
  'team:Team', 
  'played:Pl', 
  'won:W', 
  'drawn:D', 
  'lost:L', 
  'goalsFor:GF', 
  'goalsAgainst:GA', 
  'goalsDifference:GD', 
  'points:P', 
  'qualification:Q'
]



// Knockout stage
export const createNodes = (matches: MatchFifaWorldCup[] | undefined) => {
  let nodes = []

  if(matches?.length === 3) {
    nodes = matches.map((match, index) => {
      return ({ id: String(index + 1), 
                type: 'customNode', 
                data: { label: match.stage, match: match }, 
                position: { 
                            x: index + 1 === 3 ? 280 : 0, 
                            y: index + 1 === 1 ? 0 : 
                                index + 1 === 2 ? 160 : 80, 
                          }, 
                sourcePosition: index + 1 === 3 ? Position.Left : Position.Right,
                className: index === matches.length - 1 ? s.lastNode : s.node
      })
    })

    return nodes
  }
}

export const createHeight = (matches: MatchFifaWorldCup[] | undefined) => {
  if(matches?.length === 3) {
    return '350px'
  }
}

export const edges = [
  { id: '1->3', type: 'step', source: '1', target: '3', animated: true, style: { stroke: 'white', strokeWidth: 1 }, },
  { id: 'e2-3', type: 'step', source: '2', target: '3', animated: true, style: { stroke: 'white', strokeWidth: 1 }, },
];

export const showScore = ( score: Array<number[]>) => {
  if(score[1].length > 0 && score[2].length === 0) {
    const goalsTeam1 = score[0][0] + score[1][0];
    const goalsTeam2 = score[0][1] + score[1][1];
    return [[goalsTeam1, goalsTeam2]]
  }

  if(score[2].length > 0) {
    const goalsTeam1 = score[0][0] + score[1][0];
    const goalsTeam2 = score[0][1] + score[1][1];
    return [[goalsTeam1, goalsTeam2], [score[2][0], score[2][1]]]
  }

  return [score[0][0], score[0][1]]
}


export const getUniqueStagePlayOff = (matches: MatchFifaWorldCup[]) => {
  return matches ? Array.from(new Set(matches.map(match => match.stage))).sort() : []
}
