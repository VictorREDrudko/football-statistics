import { GoalsInfo } from '@/shared/model'
import s from './InfoGoals.module.scss'
import { getPlayerGoalTimes } from '../../lib/getPlayerGoalTimes'

type Props = {
  infoGoals: GoalsInfo[]
}

export const InfoGoals = ({ infoGoals }: Props) => {
  const renderTeamsGoals = infoGoals.map((teamInfoGoals, index) => {
    // revers
    const classNameContainerPlayer =
      index === 0 ? `${s.containerPlayer}` : `${s.containerPlayerReverse}`

    const renderTeamGoals = teamInfoGoals.playersScoredGoal.map(
      (playerName, key) => {
        const playerGoalTimes = getPlayerGoalTimes(teamInfoGoals.timeGoals[key])

        return (
          <div className={classNameContainerPlayer} key={key}>
            <span className={s.name}>{playerName}</span>
            <span className={s.time}>{playerGoalTimes}</span>
          </div>
        )
      }
    )

    return (
      <div className={s.containerTeamGoals} key={index}>
        {renderTeamGoals}
      </div>
    )
  })

  return <div className={s.container}>{renderTeamsGoals}</div>
}
