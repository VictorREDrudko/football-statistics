import { TeamWorldCupAchievements } from 'logics/worldCup/createTeamWorldCupAchievements'
import s from './TournamentResults.module.css'
import { TotalGroup } from './totalGroup/TotalGroup'
import { createWorldCupPosition, WorldCupPosition } from 'logics/worldCup/createWorldCupPosition'
import { createDataMatchesWorldCup } from 'logics/worldCup/createDataMatchesWorldCup'
import { classNameResult } from 'data/nationalTeamsData/classNameResult'
import { TitleItem } from 'features/nationalTeams/nationTeamCard/titleItem/TitleItem'

type Props = {
  resultsData: TeamWorldCupAchievements
  title: string
  openModal: () => void
}

export const TournamentResults = ({resultsData, title, openModal}: Props) => {
  const worldCupPosition: WorldCupPosition[] = createWorldCupPosition(resultsData)
  const worldCupMatches: WorldCupPosition[] = createDataMatchesWorldCup(resultsData)

  const plugPosition = [
    {
      value: 0,
      typeTotal: classNameResult.circleLarge,
      years: [],
      description: "champion"
    }, 
    {
      value: 0,
      typeTotal: classNameResult.circleMedium,
      years: [],
      description: "runner-up"
    },
    {
      value: 0,
      typeTotal: classNameResult.circleSmall,
      years: [],
      description: "third-place"
    },
  ]

  const plugMatches =[
    {
      value: 0,
      typeTotal: classNameResult.squareLarge,
      years: [],
      description: "appearances"
    }, 
    {
      value: 0,
      typeTotal: classNameResult.squareSmall,
      years: [],
      description: "matches"
    },
  ]

  const rendering = title === 'FIFA World Cup' ? (
    <>
      <TitleItem title={title}/>
      <div className={s.containerTotalGroup}>
        <TotalGroup openModal={openModal} data={worldCupPosition}/>
        <TotalGroup openModal={openModal} data={worldCupMatches}/>
      </div>
    </>
  ) : (
    <>
      <TitleItem title={title}/>
      <div className={s.containerTotalGroup}>
        <TotalGroup openModal={openModal} data={plugPosition}/>
        <TotalGroup openModal={openModal} data={plugMatches}/>
      </div>
  </>
  )


  return (
    <div className={s.container}>
      {rendering}
    </div>
  )
}