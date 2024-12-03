import { MatchFifaWorldCup } from '../../../../../app/App'
import s from './FinalStage.module.css'
import { Match } from './match/Match'

type FinalStageProps = {
  data: MatchFifaWorldCup[]
}

type StatisticTeam = {
  team: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalsDifference: number 
  points: number
}

export const FinalStage = (props: FinalStageProps) => {
  // Add header table
  const dataForHeaderTable = {
    position: '№',
    team: 'Team',
    played: 'Played',
    won: 'Won',
    drawn: 'Drawn',
    lost: 'Lost',
    goalsFor: 'GF',
    goalsAgainst: 'GA',
    goalsDifference: 'GD',
    points: 'Points',
    qualification: 'Q'
  }

  const headerTable = Object.values(dataForHeaderTable).map((item, index) => {
    return <th key={index} className={s.headerTable}>{item}</th>
  })
  
  
  // Filter matches group / play-off stage
  const matchesGroupStage = props.data.filter(el => el.stage.slice(0, 5) === 'group');
  const matchesPlayOff = props.data.filter(el => el.stage.slice(0, 5) !== 'group');

  // 2. Create array unique title group stage and play off stage
  const titleUniqueGroups = Array.from(new Set(matchesGroupStage.map(match => match.stage))).sort();
  const titlePlayoffStage = Array.from(new Set(matchesPlayOff.map(match => match.stage))).sort();
  // Unique name teams in play-off
  const NameUniqueTeamsPlayOff = Array.from(new Set(matchesPlayOff.map(match => match.teams).flat()));

  // 3. Matches in group + data Table / stage play off
  const mappedMatchesInGroup = titleUniqueGroups.map((titleGroup, index) => {
    const filteredMatchInGroup = matchesGroupStage.filter(match => match.stage === titleGroup);
    // create unique teams group
    const NameUniqueTeamsGroup = Array.from(new Set(filteredMatchInGroup.map(match => match.teams).flat()));

    // Statistic Data every teams in group
    const dataTeamsInGroup = NameUniqueTeamsGroup.map(name => {
      // create initial object in every team
      const statisticTeam = {
        team: name,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalsDifference: 0, 
        points: 0
      }

      filteredMatchInGroup.forEach(match => {
        if(name === match.teams[0]){
          statisticTeam.played += 1;
          statisticTeam.goalsFor += match.score[0][0];
          statisticTeam.goalsAgainst += match.score[0][1];
          if(match.score[0] > match.score[1]) statisticTeam.won += 1;
          if(match.score[0] < match.score[1]) statisticTeam.lost += 1;
          if(match.score[0] === match.score[1]) statisticTeam.drawn += 1;
          statisticTeam.goalsDifference = statisticTeam.goalsFor - statisticTeam.goalsAgainst;
          statisticTeam.points = Number(match.date.slice(-4)) <= 1981 
            ? (statisticTeam.won * 2) + (statisticTeam.drawn * 1)
              : (statisticTeam.won * 3) + (statisticTeam.drawn * 1)
        }

        if(name === match.teams[1]){
          statisticTeam.played += 1;
          statisticTeam.goalsFor += match.score[0][1];
          statisticTeam.goalsAgainst += match.score[0][0];
          if(match.score[1] > match.score[0]) statisticTeam.won += 1;
          if(match.score[1] < match.score[0]) statisticTeam.lost += 1;
          if(match.score[0] === match.score[1]) statisticTeam.drawn += 1;
          statisticTeam.goalsDifference = statisticTeam.goalsFor - statisticTeam.goalsAgainst;
          statisticTeam.points = Number(match.date.slice(-4)) <= 1981 
            ? (statisticTeam.won * 2) + (statisticTeam.drawn * 1)
              : (statisticTeam.won * 3) + (statisticTeam.drawn * 1)
        } 
      })

      return statisticTeam
    })

    // Sort teams in group
    const sortDataTeamsInGroup = dataTeamsInGroup.sort((a, b) => {
      return a.points > b.points ? -1 : 1
    })

    // Add properties position and qualification
    const addPropertiesToDataTeamsInGroup = sortDataTeamsInGroup.map((dataTeam : StatisticTeam, index) => {
      const qualificationTeam = NameUniqueTeamsPlayOff.includes(dataTeam.team, 0) 
      return ( {...dataTeam, position: index + 1, qualification: qualificationTeam} )
    })


    const addBodyTable = addPropertiesToDataTeamsInGroup.map((item, index) => {
      return (
      <tr key={index} >
        <th>{item.position}</th>
        <th>{item.team}</th>
        <th>{item.played}</th>
        <th>{item.won}</th>
        <th>{item.drawn}</th>
        <th>{item.lost}</th>
        <th>{item.goalsFor}</th>
        <th>{item.goalsAgainst}</th>
        <th>{item.goalsDifference}</th>
        <th>{item.points}</th>
        <th>{item.qualification}</th>
      </tr>
      )
    })

    const mappedMatch = filteredMatchInGroup.map(match => {
      return (
      <div key={match.id}>
        <Match teams={match.teams} score={match.score} id={match.id}/>
      </div>
      )
    })

    return (
      <div key={index}>
        <table style={{border: '1px solid black', borderCollapse: 'collapse', marginBottom: '10px', width: '550px'}}>
          <caption>{titleGroup}</caption>
          <thead>
            <tr>{headerTable}</tr>
          </thead>
          <tbody>{addBodyTable}</tbody>
        </table>
        <div className={s.matchesInGroup}>{mappedMatch}</div>
      </div>
    )
  })

  const mappedMatchesInPlayOff = titlePlayoffStage.map((titleGroup, index) => {
    const filteredMatchInPlayOff = matchesPlayOff.filter(match => match.stage === titleGroup);

    const mappedMatch = filteredMatchInPlayOff.map(match => {
      return (
      <div key={match.id}>
        <Match teams={match.teams} score={match.score} id={match.id}/>
      </div>
      )
    })

    return (
      <div key={index} className={s.matchesInPlayOff}>{mappedMatch}</div>
    )
  })



  return (
    <div className={s.container}>
      <div>
        {mappedMatchesInGroup}
      </div>
      <div>
        {mappedMatchesInPlayOff}
      </div>
    </div>
  )
}