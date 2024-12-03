import { Background } from '../../../../common/components/background/Background'
import s from './Tournament.module.css'
import { Statistics } from './statistics/Statistics'
import { InfoAboutTournament } from './infoAboutTournament/InfoAboutTournament'
import { Qualification } from './qualification/Qualification'
import { FinalStage } from './finalStage/FinalStage'
import { FifaWorldCup } from '../../../../app/App'

type TournamentProps = {
  data: FifaWorldCup
}


export const Tournament = (props: TournamentProps) => {
  return (
    <div className={s.wrapper}>
      <Background image={props.data.image.background}/>
      <div className={s.content}>
        <Statistics logo={props.data.image.logo}/>
        <InfoAboutTournament/>
      </div>
      <Qualification/>
      <FinalStage data={props.data.finalStage}/>
    </div>
  )
}


