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
      <section className={s.containerAboutTournament}>
        <div className={s.containerStatistic}>
          <Statistics logo={props.data.image.logo} statistic={props.data.statistic}/>
        </div>
        <div className={s.containerDescription}>
          <InfoAboutTournament info={props.data.info} ball={props.data.image.ball}/>
        </div>
      </section>
      <section className={s.containerFinalStage}>
        <FinalStage data={props.data.finalStage}/>
      </section>
      <section className={s.containerFinalStage}>
        <Qualification/>
      </section>
    </div>
  )
}


