import { GoalsInfo } from 'data/worldCupData/type-worldCupData'
import s from './InfoGoals.module.css'

type Props = {
  infoGoals: GoalsInfo[]
}

export const InfoGoals = ({infoGoals}: Props) => {
  const renderTeamsGoals = infoGoals.map(teamGoals => {
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
          <div className={s.containerPlayerScoredGoal} key={index}>
            <span>{playerScoredGoal}</span>
            <span>{timeGoal}</span>
          </div>
      )
    })

    return (
      <div className={s.containerTeamGoals}>
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