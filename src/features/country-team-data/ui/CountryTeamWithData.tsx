import { CountryTeam } from '@/entities/country-team'
import { Country } from '@/shared/types'
import { useCountryTeamData } from '../model/hooks/useCountryTeamData'

type Props = {
  countryName: Country
  year: string
  reverse?: boolean
}

export const CountryTeamWithData = ({
  countryName,
  year,
  reverse = false,
}: Props) => {
  const { countryNameByYear, flagSrc, isCountryReal } = useCountryTeamData(
    countryName,
    year
  )

  return (
    <CountryTeam
      countryName={countryNameByYear}
      isCountryReal={isCountryReal}
      reverse={reverse}
      flagSrc={flagSrc}
    />
  )
}
