import { background } from 'data/data'
import s from './PlayOffStage.module.css'
import { MatchesInGroup } from '../groups/mathes-in-group/MatchesInGroup'
import { MatchFifaWorldCup } from 'data/type-data'
import { getUniqueStagePlayOff } from 'data/worldCupFinalStage'
import { KnockoutStage } from '../knockout-stage/KnockoutStage'

type Props = {
  year: string | undefined
  matchesInPlayOff: MatchFifaWorldCup[] | undefined
}

export const PlayOffStage = ({year, matchesInPlayOff} : Props) => {
  const yearFWC = year ? year : '1930'
  const matches = matchesInPlayOff ? matchesInPlayOff : []

  const stage = getUniqueStagePlayOff(matches)

  const mappedStage = stage.map((nameStage, index) => {
    const filterMatches = matches.filter(match => match.stage === nameStage)
    return (
      <div className={s.containerStage} key={index}>
        <span className={s.nameStage}>{nameStage}</span>
        <MatchesInGroup matches={filterMatches}/>
      </div>
    )
  })

  return (
    <div className={s.container} style={ {backgroundImage: `url(${background.worldCup[yearFWC].image1})`} }>
      <h2 className={s.titleStage}>Knockout stage</h2>
      <div className={s.containerStages}>
        {mappedStage}
      </div>
      <div className={s.containerBlock}>
        <KnockoutStage matches={matchesInPlayOff}/>
        <div className={s.wrapper} ></div>
      </div>
    </div>
  )
}
