import { Badge, Flag } from '@/shared'
import { ChampionshipName } from './championship-name/ChampionshipName'
import s from './ChampionshipTitle.module.scss'

type Props = {
  title: string
  year: string
  number: number
  hostCountries: string[]
}

export const ChampionshipTitle = ({
  title,
  year,
  number,
  hostCountries,
}: Props) => {
  const hostCountryFlags = hostCountries.map(
    (countryName: string, index: number) => {
      return <Flag countryName={countryName} year={year} key={index} />
    }
  )

  return (
    <div className={s.container}>
      <ChampionshipName title={title} year={year} />
      <div className={s.containerNumber}>
        <Badge number={number} variant="secondary" size="small" />
      </div>
      <div className={s.containerHostCountry}>{hostCountryFlags}</div>
    </div>
  )
}
