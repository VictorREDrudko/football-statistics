import { Container, Flag } from '@/shared'
import s from './HostCountry.module.scss'
import { Parameter } from '../parameter/Parameter'

type Props = {
  countryNames: string[]
  year: string
}

export const HostCountry = ({countryNames, year} : Props) => {
  const mappedCountries = countryNames.map((countryName, index) => {
    return (
      <Container direction='col' align='center' className={s.containerCountryName} key={index}>
        <Flag countryName={countryName} year={year}/>
        <span className={s.value}>{countryName}</span>
      </Container>
    )
  })
  
  return(
    <div className={s.container}>
      <Parameter title={'Host countries:'}/>
      {mappedCountries}
    </div>
  )
}
