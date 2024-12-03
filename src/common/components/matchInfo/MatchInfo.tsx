import { GeneralInfoAboutMatch, StadiumType } from './generalMatchInfo/GeneralInfoAboutMatch'
import { InfoAboutTeamInMatch, PlayersForwardType } from './infoAboutTeamInMatch/InfoAboutTeamInMatch'
import s from './MatchInfo.module.css'
import { ScoreInMatch, ScoreType } from './scoreInMatch/ScoreInMatch'

type TeamsType = string[]

type MatchType = {
  id: string
  date: string
  stage: string
  teams: TeamsType
  score: ScoreType[]
  forwards: PlayersForwardType[]
  stadium: StadiumType
}

type PropsType = {
  info: MatchType
}

const info: MatchType = {
  id: '1-1930',
  date: '13.07.1930',
  stage: 'group 1',
  teams: ['France', 'Mexico'],
  score: [[4, 1], [], []],
  forwards: [
    { players: ['L. Laurent', 'Langiller', 'Maschinot'],
      timeGoals: ['19', '40', '43, 87'] }, 
    { players: ['Carreño'],
      timeGoals: ['80'] }, 
  ],
  stadium: 
  {title: 'Estadio Pocitos',
    city: 'Montevideo',
    country: 'Uruguay',
    attendance: '4 444'
  }
}

export const MatchInfo = () => {
  return (
    <div className={s.container} key={info.id}>
      <GeneralInfoAboutMatch date={info.date} stadium={info.stadium}/>
      <InfoAboutTeamInMatch team={info.teams[0]} forwards={info.forwards[0]} year={info.id}/>
      <ScoreInMatch score={info.score}/>
      <InfoAboutTeamInMatch team={info.teams[1]} forwards={info.forwards[1]} year={info.id}/>
    </div>
  )
}