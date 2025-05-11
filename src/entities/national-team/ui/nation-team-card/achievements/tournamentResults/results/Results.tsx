import { StatsResult } from '@/entities/national-team/model/types/types'
import s from './Results.module.css'
import { Result } from './result/Result'

type Props = {
  statsResult: StatsResult
}

export const Results = ({statsResult} : Props) => {
  const medalResults = statsResult.resultsMedal.map((medal, index) => {
    return (
      <Result titleCompetition={statsResult.titleCompetition}
              countryName={statsResult.countryName}
              statsResult={medal}
              key={index}
      />
    )
  })

  return (
    <div className={s.container}>
      {medalResults}
      <Result titleCompetition={statsResult.titleCompetition}
              countryName={statsResult.countryName}
              statsResult={statsResult.resultsAppearances}
      />
      <Result titleCompetition={statsResult.titleCompetition}
              countryName={statsResult.countryName}
              statsResult={statsResult.resultsMatches}
      />
    </div>
  )
}