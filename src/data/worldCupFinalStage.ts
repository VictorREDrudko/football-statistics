import { fifaWorldCup } from "./data"
import { MatchFifaWorldCup } from "./type-data"
import { StatisticTeam } from "./type-worldCupFinalStage"

export const getTournament = (year: string | undefined) => {
  return year ? fifaWorldCup[year].finalStage : undefined
}

export const getAllMatchesInGroupStage = (matches: MatchFifaWorldCup[] | undefined) => {
  return matches ? matches.filter(match => match.stage.slice(0, 5) === 'group') : ''
}

export const getMatchesInPlayOff = (matches: MatchFifaWorldCup[] | undefined) => {
  return matches ? matches.filter(match => match.stage.slice(0, 5) !== 'group') : ''
}

export const getUniqueTeamsInPlayOff = (matchesPlayOff: MatchFifaWorldCup[] | '') => {
  return matchesPlayOff ? Array.from(new Set(matchesPlayOff.map(match => match.teams).flat())) : []
}

export const uniqueTitleGroups = (matches: MatchFifaWorldCup[] | '') => {
  return matches ? Array.from(new Set(matches.map(match => match.stage))).sort() : []
}

export const getMatchesInGroup = (titleGroup: string, matches: MatchFifaWorldCup[] | '') => {
  return matches ? matches.filter(match => match.stage === titleGroup) : []
}

export const getUniqueTeamsInGroup = (matches: MatchFifaWorldCup[] | '') => {
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





