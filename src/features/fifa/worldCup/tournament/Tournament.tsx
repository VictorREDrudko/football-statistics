import { Background } from '../../../../common/components/background/Background'
import s from './Tournament.module.css'
import imageFifaWorldCup from './../../../../assets/background-world-cup-1930.png'
import { Statistics } from './statistics/Statistics'
import { InfoAboutTournament } from './infoAboutTournament/InfoAboutTournament'
import { Qualification } from './qualification/Qualification'
import { FinalStage } from './finalStage/FinalStage'
import { Matches } from '../../../../app/App'

type TournamentProps = {
  data: Matches
}


export const Tournament = (props: TournamentProps) => {
  return (
    <div className={s.wrapper}>
      <Background image={imageFifaWorldCup}/>
      <div className={s.content}>
        <Statistics/>
        <InfoAboutTournament/>
      </div>
      <Qualification/>
      <FinalStage data={props.data.finalStage}/>
    </div>
  )
}


