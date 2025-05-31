import { GoalsInfo } from '@/shared/model/match/types'
import s from './InfoGoals.module.scss'

type Props = {
  infoGoals: GoalsInfo[]
}

export const InfoGoals = ({infoGoals}: Props) => {
  const renderTeamsGoals = infoGoals.map((teamGoals, key) => {
    const classNameContainerPlayerScoredGoal = key === 0 ? `${s.containerPlayerScoredGoal}` : `${s.containerPlayerScoredGoalReverse}`

    const renderTeamGoals = teamGoals.playersScoredGoal.map((playerScoredGoal, index )=> {
      let timeGoal =  teamGoals.timeGoals[index].indexOf(',') === -1 ? 
                      teamGoals.timeGoals[index] + "'" :
                      teamGoals.timeGoals[index].split(',').map(time => time + "'").join()

      if(timeGoal.includes('(p)')) {
        timeGoal = timeGoal.replace("(p)'", "'(p)")
      }

      if(timeGoal.includes('(o.g.)')) {
        timeGoal = timeGoal.replace("(o.g.)'", "'(o.g.)")
      }

      return (
          <div className={classNameContainerPlayerScoredGoal} key={index}>
            <span>{playerScoredGoal}</span>
            <span>{timeGoal}</span>
          </div>
      )
    })

    return (
      <div className={s.containerTeamGoals} key={key}>
        {renderTeamGoals}
      </div>
    )
  })

  return (
    <div className={s.container}>
      <div className={s.containerTeamsGoals}>
        {renderTeamsGoals}
      </div>
    </div>
  )
}