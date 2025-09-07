
import { ChampionshipInfo } from '@/shared/model/national-tournaments-store/types'
import s from './ChampionshipStat.module.scss'
import { ChampionshipHeader } from './championship-header/TournamentHeader'
import { ChampionshipMainInfo } from './championship-main-info/ChampionshipMainInfo'

type Props = {
  championshipData: ChampionshipInfo
  year: string
}

export const ChampionshipStat = ({ championshipData, year }: Props) => {
  return (
    <div className={s.container}>
      <ChampionshipHeader
        title={championshipData.title}
        year={year}
        logoPath={championshipData.logo.withoutBackground}
      />
      <ChampionshipMainInfo championshipData={championshipData} year={year} />
    </div>
  )
}
