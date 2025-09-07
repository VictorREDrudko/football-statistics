import { GoalsDetails } from '../../../model'
import s from './InfoGoals.module.scss'

type Props = {
  goalsDetails: GoalsDetails
}

export const InfoGoals = ({ goalsDetails }: Props) => {
  const { goalsTeam1, goalsTeam2 } = goalsDetails

  const goalsData = [goalsTeam1, goalsTeam2].map((goalsTeam, key) => {
    const mappedGoalsTeam = goalsTeam.map((goalInfo, index) => {
      const { player, minutes } = goalInfo

      return (
        <div
          className={key === 0 ? s.containerPlayer : s.containerPlayerReverse}
          key={index}>
          <span className={s.name}>{player}</span>
          <span className={s.time}>{minutes}</span>
        </div>
      )
    })

    return (
      <div className={s.containerTeamGoals} key={key}>
        {mappedGoalsTeam}
      </div>
    )
  })

  return <div className={s.container}>{goalsData}</div>
}
