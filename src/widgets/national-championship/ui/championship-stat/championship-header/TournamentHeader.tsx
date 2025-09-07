
import { getChampionshipTitleWithoutYear } from '@/shared/lib'
import s from './TournamentHeader.module.scss'
import { Heading } from '@/shared/ui/heading/Heading'

type Props = {
  title: string
  year: string
  logoPath: string
}

export const ChampionshipHeader = ({ title, year, logoPath }: Props) => {
  const titleWithoutYear = getChampionshipTitleWithoutYear(title)

  return (
    <div className={s.container}>
      <h2 className={s.year}>{year}</h2>
      <Heading weight="bold" color="secondary" size={'7'} className={s.title}>
        {titleWithoutYear}
      </Heading>
      <img className={s.logo} src={logoPath} alt={`icon ${title}`} />
    </div>
  )
}
