import { Container } from '@/shared'
import s from './ChampionshipHostCountry.module.scss'
import { Flag } from '@/entities'

type Props = {
  countryNames: string[]
  year: string
}

export const ChampionshipHostCountry = ({ countryNames, year }: Props) => {
  const mappedCountries = countryNames.map((countryName, index) => {
    return (
      <Container
        direction="row"
        align="center"
        gap="2"
        className={s.containerCountry}
        key={index}>
        <Flag countryName={countryName} year={year} />
        <span className={s.countryName}>{countryName}</span>
      </Container>
    )
  })

  return (
    <Container direction="col" gap="2">
      {mappedCountries}
    </Container>
  )
}
