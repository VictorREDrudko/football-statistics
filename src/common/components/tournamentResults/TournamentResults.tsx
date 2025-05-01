import { classNameResult } from '../../../data/nationalTeamsData/classNameResult'
import { Confederation } from '../../../data/nationalTeamsData/type-nationalTeams'
import { TitleItem } from '../../../features/nationalTeams/nationTeamCard/titleItem/TitleItem'
import { structuringResultChampionships } from '../../../logics/structuringResultChampionships/structuringResultChampionships'
import { BaseResult } from '../../../logics/structuringResultChampionships/structuringResultChampionships-type'
import { TeamWorldCupAchievements } from '../../../logics/worldCup/createTeamWorldCupAchievements'
import s from './TournamentResults.module.css'
import { TotalGroup } from './totalGroup/TotalGroup'

type Props = {
  resultsData: TeamWorldCupAchievements
  titleCompetition: string
  countryName: string
  confeder:Confederation
}

export const TournamentResults = ({resultsData, titleCompetition, countryName, confeder}: Props) => {
  const resultWorldCup: BaseResult[] = structuringResultChampionships(resultsData, confeder)

  const medalResult = resultWorldCup.filter(el => el.title !== 'appearances' && el.title !== 'matches')
  const appearancesAndMatches = resultWorldCup.filter(el => el.title === 'appearances' || el.title === 'matches')

  // Заглушка
  const plugResult = [
    {
      title: "champion",
      count: 0,
      years: [[]],
      iconPath: '',
      typeTotal: classNameResult.circleLarge,
    },
    {
      title: "runner-up",
      count: 0,
      years: [[]],
      iconPath: '',
      typeTotal: classNameResult.circleMedium,
    },
    {
      title: "third-place",
      count: 0,
      years: [[]],
      iconPath: '',
      typeTotal: classNameResult.circleMedium,
    },
    {
      title: 'appearances',
      count: 0,
      years: [[]],
      iconPath: '',
      typeTotal: classNameResult.squareLarge,
    }, 
    {
      title: 'matches',
      count: 0,
      years: [[]],
      iconPath: '',
      typeTotal: classNameResult.squareSmall,
    }
  ]

  const medalResultPlug = plugResult.filter(el => el.title !== 'appearances' && el.title !== 'matches')
  const appearancesAndMatchesPlug = plugResult.filter(el => el.title === 'appearances' || el.title === 'matches')

  const rendering = titleCompetition === 'FIFA World Cup' ? (
    <>
      <TitleItem title={titleCompetition}/>
      <div className={s.containerTotalGroup}>
        <TotalGroup titleCompetition={titleCompetition}
                    countryName={countryName}
                    data={medalResult}/>
        <TotalGroup titleCompetition={titleCompetition}
                    countryName={countryName}
                    data={appearancesAndMatches}/>
      </div>
    </>
  ) : (
    <>
      <TitleItem title={titleCompetition}/>
      <div className={s.containerTotalGroup}>
        <TotalGroup titleCompetition={titleCompetition}
                    countryName={countryName}
                    data={medalResultPlug}/>
        <TotalGroup titleCompetition={titleCompetition}
                    countryName={countryName}
                    data={appearancesAndMatchesPlug}/>
      </div>
    </>
  )

  return (
    <div className={s.container}>
      {rendering}
    </div>
  )
}