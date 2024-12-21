import { MatchFifaWorldCup } from 'data/type-data'
import { Team } from '../match/team/Team'
import { Group } from './group/Group'
import s from './Groups.module.css'
import { MatchesInGroup } from './mathes-in-group/MatchesInGroup'

type Groups = {
  matches: MatchFifaWorldCup[]
  teamsPlayOff: Array<string>
  year: string
}

export type StatisticTeam = {
  position: number
  team: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalsDifference: number 
  points: number
  qualification: string
}


export const Groups = (props: Groups) => {
  // 1. Create array unique title groups
  const uniqueGroupsTitle: Array<string> = Array.from(new Set(props.matches.map(match => match.stage))).sort();

  // 3. Matches in groups + data Table
  const mappedMatches = uniqueGroupsTitle.map((titleGroup, index) => {
    const matchesInGroup: MatchFifaWorldCup[] = props.matches.filter(match => match.stage === titleGroup);
    // create unique name teams group
    const uniqueTeamsInGroup = Array.from(new Set(matchesInGroup.map(match => match.teams).flat()));

    // Statistic Data every teams in group
    const dataTeamsInGroup: Array<StatisticTeam> = uniqueTeamsInGroup.map((name: string)=> {
      // create initial object in every team
      const initialDataTeam: StatisticTeam = {
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

      matchesInGroup.forEach(match => {
        if(name === match.teams[0]){
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

        if(name === match.teams[1]){
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

      // Add properties position and qualification
      const qualification = props.teamsPlayOff.includes(name, 0) ? '+' : ''
      initialDataTeam.qualification = qualification 

      return initialDataTeam
    })

    const currentrGroupTitle = titleGroup

    console.log(currentrGroupTitle)

    // Sort teams in group
    const sortDataTeamsInGroup = dataTeamsInGroup.sort((a, b) => {
      return a.points > b.points ? -1 : 1
    })

    return (
      <div key={index} className={s.containerGroup}>
        <Group teamsInGroup={sortDataTeamsInGroup} year={props.year} titleGroup={currentrGroupTitle}/>
        <MatchesInGroup matches={matchesInGroup}/>
      </div>
    )
  })

  return (
    <div className={s.wrapper}> {mappedMatches} </div>
  )
}